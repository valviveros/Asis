import { DomElementSchemaRegistry, identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { AsyncLocalStorage } from 'async_hooks';
import { log } from 'console';
import { element } from 'protractor';
import { NoticiasService } from '../services/noticias.service';
interface SectionsI {
  header: {
    title: string
  }
  tag:{
    title: string
    img: string
    id: string
    
    // imgSize?: number
  }
  body: {
    DivIdBody:string,
    img: string
    id: string
    content: string
    imgSize?: number
    contentSize?: number
  },
  bodyDetails: {
    divDetails:string,
    id: string
    content: string
    backId: string,
    imgSizeDetails?: number
    contentSizeDetails?: number
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
    contentSize: 9,
    imgSizeDetails: 10,
    contentSizeDetails: 9
  }

  sections: Array<SectionsI> = [
    {
      header: {
        title: "Noticias"
      },
      tag:{
        title:"Noticias",
        img:"https://image.flaticon.com/icons/png/512/88/88142.png",
        id:"noticia"
      },
      body: {
        DivIdBody:"bodyOne",
        img: "https://picsum.photos/200/300?random=1",
        id:"imagen1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
        imgSize: 3,
        contentSize: 9
      },
      bodyDetails:{
        divDetails:"DetailsOne",
        id:"imagen1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
        backId: "backOne",
        imgSizeDetails: 10,
        contentSizeDetails: 9
      }
    },
    {
      header: {
        title: "Salud"
      },
      tag:{
        title:"Salud",
        img:"https://www.flaticon.es/svg/static/icons/svg/205/205952.svg",
        id:"salud"

      },
      body: {
        DivIdBody:"bodyTwo",
        img: "https://picsum.photos/200/300?random=2",
        id:"imagen2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
      },
      bodyDetails:{
        divDetails:"DetailsTwo",
        id:"imagen1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
        backId: "backTwo",
        imgSizeDetails: 10,
        contentSizeDetails: 9
      }

    }
  ]

  constructor() { }

  ngOnInit() {
    addEventListener("click",this.onIconClick)  
  }
  onIconClick(){
    const click = document.getElementById("imagen1");
    const click2 = document.getElementById("imagen2");
    const back = document.getElementById("backOne");
    const back2 = document.getElementById("backTwo");

    console.log(event.target)

    if (event.target == click) {
      console.log("entró al if")
      //lo que debe cerrar
      document.getElementById("DetailsTwo").style.display=""
      document.getElementById("bodyTwo").style.display=""
      //lo que debe abrir
      document.getElementById("DetailsOne").style.display="block"
      document.getElementById("bodyOne").style.display="none"
     
    }else if (event.target == back) {
      console.log("entró")
      document.getElementById("DetailsOne").style.display=""
      document.getElementById("bodyOne").style.display=""
    }
    

    if (event.target == click2) {
      //lo que debe cerrar
      document.getElementById("DetailsOne").style.display=""
      document.getElementById("bodyOne").style.display=""
      //lo que debe abrir
      document.getElementById("DetailsTwo").style.display="block"
      document.getElementById("bodyTwo").style.display="none"


    }else if (event.target == back2) {
      console.log("entró")
      document.getElementById("DetailsTwo").style.display=""
      document.getElementById("bodyTwo").style.display=""
    }

    
  }

}
