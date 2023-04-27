import React, { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import { Card } from '../../components/index'
import { FlashList } from '@shopify/flash-list'

import { BlogContext } from '../../context/BlogContext'

import theme from "../../theme/theme"

import { API_URL } from "@env"

import { useTranslation } from 'react-i18next'

const Home = ({ navigation }: any) => {

    const { t } = useTranslation()

    const { wrapper, container, footer } = styles

    const { content, setContent } = useContext(BlogContext)

    const [data, setData] = useState<IBlogPost["data"]>([])

    const [refreshLoading, setRefreshLoading] = useState<boolean>(false)
    const [paginationLoading, setPaginationLoading] = useState<boolean>(false)
    const [isListEnd, setIsListEnd] = useState<boolean>(false)

    const [pageNumber, setPageNumber] = useState<number>(1)

    const _cardOnPress = (id: number) => {
        data.filter((item) => item.postId === id && setContent({ content: item.content }))
        navigation.navigate("BlogDetail")
    }

    const _getData = async () => {
        setRefreshLoading(true)
        setPaginationLoading(true)
        await fetch(API_URL + `/1?page=${pageNumber}&count=10`)
            .then((res) => res.json())
            .then((data) => setData((prev) => {
                const newData = pageNumber === 1 ? data.result : [...prev, ...data.result]
                setIsListEnd(data.result.length < 10)
                return newData
            }))
            .catch(() => {
                Alert.alert("Error", "Failed to fetch data!")
            })
        setRefreshLoading(false)
        setPaginationLoading(false)
    }

    const _reloadData = async () => {
        setRefreshLoading(true)
        setIsListEnd(false)
        await fetch(API_URL + `/1?page=1&count=10`)
            .then((res) => res.json())
            .then((data) => setData(data.result))
        setPageNumber(1)
        setRefreshLoading(false)
    }

    const _onEndReached = async () => {
        if (!isListEnd) {
            setPaginationLoading(true)
            setPageNumber((prev) => prev + 1)
            await fetch(API_URL + `/1?page=${pageNumber + 1}&count=10`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.result.length > 0) {
                        setData((prev) => [...prev, ...data.result])
                    }
                    else {
                        setIsListEnd(true)
                    }
                })
                .catch(() => {
                    Alert.alert("Error")
                })
            setPaginationLoading(false)
        }
    }

    const _renderItem = ({ item }: { item: ICard }) => {
        return (
            <Card
                postId={item.postId}
                onPress={() => _cardOnPress(item.postId)}
                banner={item.banner}
                summary={item.summary}
                title={item.title}
                totalReadingTime={item.totalReadingTime} />
        )
    }

    const renderFooter = () => {
        return (
            <View style={footer}>
                {paginationLoading && < ActivityIndicator />}
                {isListEnd && <Text>{t("homePage.noMoreData")}</Text>}
            </View>
        )
    }

    useEffect(() => {
        _getData()
    }, [])

    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <FlashList
                    estimatedItemSize={410}
                    onRefresh={_reloadData}
                    ListFooterComponent={renderFooter}
                    onEndReached={_onEndReached}
                    onEndReachedThreshold={0.2}
                    refreshing={refreshLoading}
                    renderItem={_renderItem}
                    data={data}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        paddingHorizontal: theme.spacing.m,
        flex: 1,
        marginTop: theme.spacing.m
    },
    footer: {
        width: "100%",
        alignItems: "center"
    },
})