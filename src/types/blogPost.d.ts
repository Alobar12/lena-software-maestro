interface IBlogPost {
    data: {
        postId: number
        totalReadingTime: number
        banner: string
        summary: string
        content: string
        title: string
        onPress: () => void
    }[]
}