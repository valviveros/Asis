export interface NoticiasI {
    header: {
        title: string
        id: string
    }
    tag:{
        title: string
        img: string
        id: string
        
    
    }
    body: {
        img: string
        content: string
        imgSize?: number
        contentSize?: number
    }
    bodyDetails: {
        divDetails:string,
        id: string
        content: string
        backId: string,
        imgSizeDetails?: number
        contentSizeDetails?: number
      }
}