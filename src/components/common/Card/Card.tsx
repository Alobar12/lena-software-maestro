import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    GestureResponderEvent
} from 'react-native'

import theme from '../../../theme/theme'

import { useTranslation } from 'react-i18next'

const Card = (props: ICard) => {

    const { t } = useTranslation()

    const { container, bannerStyle, titleStyle, summaryStyle, readingTime } = styles

    const { banner, title, summary, onPress, postId, totalReadingTime } = props

    return (
        <TouchableOpacity onPress={(event: GestureResponderEvent) => onPress(postId)} style={container}>
            <Image style={bannerStyle} resizeMode={"contain"} source={{ uri: banner }} />
            <Text style={titleStyle}>{title}</Text>
            <Text style={summaryStyle}>{summary}</Text>
            <Text style={readingTime}>{t("cardComponent.totalReadingTime") + totalReadingTime}</Text>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.xs,
        backgroundColor: theme.colors.white,
        borderRadius: theme.radiusValues.xs,
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.gray,
        marginBottom: theme.spacing.m
    },
    bannerStyle: {
        width: "100%",
        height: 250
    },
    titleStyle: {
        fontSize: theme.fontSizes.m,
        fontFamily: theme.fontFamily.bold,
        textAlign: "center",
        color: theme.colors.brown,
        marginBottom: theme.spacing.m
    },
    summaryStyle: {
        fontSize: theme.fontSizes.xs,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.gray,
        textAlign: "center"
    },
    readingTime: {
        marginTop: theme.spacing.xs,
        fontSize: theme.fontSizes.m,
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.gray,
    }
})