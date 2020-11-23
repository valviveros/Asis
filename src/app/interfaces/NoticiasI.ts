export interface NoticiasI {
    header: {
        title: string
    }
    body: {
        img: string
        content: string
        imgSize?: number
        contentSize?: number
    }
}