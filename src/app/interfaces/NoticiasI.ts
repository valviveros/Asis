export interface NoticiasI {
    header: {
        title: string
        id: string
    }
    tag: {
        title: string
        img: string
        id: string
    }
    body: {
        categoria: string
        bodyB: {
            id:string
            headerC: {
                titleC: string
            }
            bodyC: {
                id: string
                imgC: string
                contentC: string
                imgSizeC?: number
                contentSizeC?: number
            }
        }
        bodyB2: {
            id2:string
            headerC2: {
                titleC2: string
            }
            bodyC2: {
                id:string
                imgC2: string
                contentC2: string
                imgSizeC2?: number
                contentSizeC2?: number
            }
        }
    }


    bodyDetails: {
        divDetails: string,
        id: string
        content: string
        backId: string,
        img: string
        imgSizeDetails?: number
        contentSizeDetails?: number
    }
    bodyDetails2: {
        divDetails: string,
        id: string
        img: string
        content: string
        backId: string,
        imgSizeDetails?: number
        contentSizeDetails?: number
      }
}