interface ICard {
    banner: string
    title: string
    summary: string
    totalReadingTime: number
    onPress: (postId: number) => void
    postId: number
}