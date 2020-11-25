export interface NoticiasI {
    header: {
        title: string
    }
    body: {
        categoria: string
        bodyB: {
            headerC: {
                titleC: string
            }
            bodyC: {
                imgC: string
                contentC: string
                imgSizeC?: number
                contentSizeC?: number
            }
        }
        bodyB2: {
            headerC2: {
                titleC2: string
            }
            bodyC2: {
                imgC2: string
                contentC2: string
                imgSizeC2?: number
                contentSizeC2?: number
            }
        }
    }
}