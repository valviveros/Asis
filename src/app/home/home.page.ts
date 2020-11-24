import { Component, OnInit } from '@angular/core';

interface SectionsI {
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
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sectionsConfig = {
    imgSize: 3,
    contentSize: 9
  }

  sections: Array<SectionsI> = [
    {
      header: {
        title: "Noticias"
      },
      body: {
        categoria: "Entretenimiento",
        bodyB:{
          headerC:{ titleC: "Krol-G"},
          bodyC:{
            imgC: "https://picsum.photos/200/300?random=1",
            contentC: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
            imgSizeC: 3,
            contentSizeC: 9
          },
          
        }
      }   
    },
    {
      header: {
        title: "Salud"
      },
      body: {
        categoria: "Cocina",
        bodyB: {
          headerC:{ titleC: "Veggies"},
          bodyC:{
            imgC: "https://picsum.photos/200/300?random=2",
            contentC: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
          }
        }
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
