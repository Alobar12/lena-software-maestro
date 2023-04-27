import React, { useContext } from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Header } from '../../components/index';
import HTMLView from 'react-native-htmlview';

import { BlogContext } from '../../context/BlogContext'

import theme from '../../theme/theme';

import { useTranslation } from 'react-i18next';

const BlogDetail = ({ navigation }: any) => {

    const { t } = useTranslation()

    const { wrapper, contentContainer, scroll } = styles

    const { content } = useContext(BlogContext)

    const _goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={wrapper}>
            <Header title={(t("blogDetail.headerTitle"))} onPress={_goBack} />
            <ScrollView style={scroll}>
                <View style={contentContainer}>
                    <HTMLView
                        value={content.content}
                        stylesheet={htmlStyles}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BlogDetail

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: theme.spacing.l,
        marginTop: theme.spacing.m
    },
    scroll: {
        flex: 1
    }
})

const htmlStyles = {
    a: {
        fontSize: theme.spacing.m,
        fontFamily: theme.fontFamily.regular,
    },
    p: {
        fontSize: theme.fontSizes.m,
        fontFamily: theme.fontFamily.regular,
        marginBottom: -50
    },
    li: {
        fontSize: theme.fontSizes.m,
        fontFamily: theme.fontFamily.bold,
        colors: theme.colors.gray,
        marginBottom: -50
    }
}