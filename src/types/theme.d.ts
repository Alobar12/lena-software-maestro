interface ITheme {
    theme: {
        colors: {
            black: string
            white: string
            green: string
            darkGreen: string
            backgroundGreen: string
            gray: string
            brown: string
            gramsWhite: string
            gold: string
            lightGreen: string
            darkBlue: string
        },
        spacing: {
            xs: number
            m: number,
            l: number,
            xl: number
        },
        fontFamily: {
            regular: string,
            bold: string
            semibold: string
            medium: string
        },
        fontSizes: {
            xs: number
            m: number,
            l: number,
            xl: number
        },
        radiusValues: {
            xs: number,
            s: number,
            m: number,
            l: number,
            xl: number
        }
    }
}