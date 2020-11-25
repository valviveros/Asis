import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
interface SectionsI {
  header: {
    title: string
    id: string
  }
  tag: {
    title: string
    img: string
    id: string

    // imgSize?: number
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
    img: string
    content: string
    backId: string,
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

  sections: Array<SectionsI> = this.noticiasService.getAll();
  textoBuscar = '';
  // sections: Array<SectionsI> = [
  //   {
  //     header: {
  //       title: "Noticias"
  //     },
  //     body: {
  //       img: "https://picsum.photos/200/300?random=1",
  //       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
  //       imgSize: 3,
  //       contentSize: 9
  //     }
  //   },
  //   {
  //     header: {
  //       title: "Salud"
  //     },
  //     body: {
  //       img: "https://picsum.photos/200/300?random=2",
  //       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
  //     }
  //   }
  // ]

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    addEventListener("click", this.onIconClick);
  }

  onIconClick() {
    const click = document.getElementById("imagen1");
    const click2 = document.getElementById("imagen2");
    const click3 = document.getElementById("imagen3")
    const back = document.getElementById("backOne");
    const back2 = document.getElementById("backTwo");
    const back3 = document.getElementById("backThree")

    const click4 = document.getElementById("imagen4");
    const click5 = document.getElementById("imagen5");
    const click6 = document.getElementById("imagen6");
    const back4 = document.getElementById("backOne_2");
    const back5 = document.getElementById("backTwo_2");
    const back6 = document.getElementById("backThree_2");


    console.log(event.target)
    //primera imagen
    if (event.target == click) {
      document.getElementById("DetailsOne").style.display="block"
      document.getElementById("Body1").style.display="none"

    }else if(event.target == back){
      document.getElementById("DetailsOne").style.display=""
      document.getElementById("Body1").style.display=""

    }

    //segunda imagen
    if (event.target == click2) {
      document.getElementById("DetailsTwo").style.display="block"
      document.getElementById("BodyThree").style.display="none"
      
    }else if(event.target == back2){
      document.getElementById("DetailsTwo").style.display=""
      document.getElementById("BodyThree").style.display=""

    }
    //tercera imagen
    if (event.target == click3) {
      document.getElementById("DetailsThree").style.display="block"
      document.getElementById("Body5").style.display="none"
    }else if(event.target == back3){
      document.getElementById("DetailsThree").style.display=""
      document.getElementById("Body5").style.display=""

    }

    //cuarta imagen
    if (event.target == click4) {
      console.log("entró")
      document.getElementById("DetailsOne_2").style.display="block"
      document.getElementById("Body2").style.display="none"
    }else if(event.target == back4){
      document.getElementById("DetailsOne_2").style.display=""
      document.getElementById("Body2").style.display=""

    }

    //quinta imagen
    if (event.target == click5) {
      console.log("entró")
      document.getElementById("DetailsTwo_2").style.display="block"
      document.getElementById("Body4").style.display="none"
    }else if(event.target == back5){
      document.getElementById("DetailsTwo_2").style.display=""
      document.getElementById("Body4").style.display=""

    }


    //sexta imagen
    if (event.target == click6) {
      console.log("entró")
      document.getElementById("DetailsThree_2").style.display="block"
      document.getElementById("Body6").style.display="none"
    }else if(event.target == back6){
      document.getElementById("DetailsThree_2").style.display=""
      document.getElementById("Body6").style.display=""

    }




    // if (event.target == click) {
    //   console.log("entró al if")
    //   //lo que debe cerrar
    //   document.getElementById("DetailsTwo").style.display=""
    //   document.getElementById("bodyTwo").style.display=""
    //   //lo que debe abrir
    //   document.getElementById("DetailsOne").style.display="block"
    //   document.getElementById("bodyOne").style.display="none"

    // }else if (event.target == back) {
    //   console.log("entró")
    //   document.getElementById("DetailsOne").style.display=""
    //   document.getElementById("bodyOne").style.display=""
    // }


    // if (event.target == click2) {
    //   //lo que debe cerrar
    //   document.getElementById("DetailsOne").style.display=""
    //   document.getElementById("bodyOne").style.display=""
    //   //lo que debe abrir
    //   document.getElementById("DetailsTwo").style.display="block"
    //   document.getElementById("bodyTwo").style.display="none"


    // }else if (event.target == back2) {
    //   console.log("entró al 2")
    //   document.getElementById("DetailsTwo").style.display=""
    //   document.getElementById("bodyTwo").style.display=""
    // }

    // if (event.target == click3) {
    //   //lo que debe cerrar
    //   document.getElementById("DetailsOne").style.display=""
    //   document.getElementById("bodyOne").style.display=""

    //   document.getElementById("DetailsTwo").style.display=""
    //   document.getElementById("bodyTwo").style.display=""

    //   //lo que debe abrir
    //   document.getElementById("DetailsThree").style.display="block"
    //   document.getElementById("bodyThree").style.display="none"


    // }else if (event.target == back3) {
    //   console.log("entró al 2")
    //   document.getElementById("DetailsThree").style.display=""
    //   document.getElementById("bodyThree").style.display=""
    // }


  }

  initializeItems() {
    this.sections = this.noticiasService.getAll();
  }

  buscar(event: any) {
    const valor = event.target.value;
    this.initializeItems()
    if (valor && valor.trim() != '') {
      this.sections = this.sections.filter((item) => {

        return (item.header.title.toLowerCase().indexOf(valor.toLowerCase()) > -1);
      })
    }
  }


  // buscar(event){
  //   this.textoBuscar = event.detail.value;
  //   let valor = this.noticiasService.getBytitle(this.textoBuscar)
  //   valor.filter(function(evento){
  //     if (evento.header.title=="Noticias") {
  //       document.getElementById("bodyTwo").style.display="none"
  //       document.getElementById("bodyThree").style.display="none"
  //       document.getElementById("Salud").style.display="none"
  //       document.getElementById("Economía").style.display="none"
  //       document.getElementById("SaludTitle").style.display="none"
  //       document.getElementById("EconomiaTitle").style.display="none"

  //     }if (evento.header.title=="Salud") {
  //       document.getElementById("bodyOne").style.display="none"
  //       document.getElementById("bodyThree").style.display="none"
  //       document.getElementById("noticia").style.display="none"
  //       document.getElementById("Economía").style.display="none"
  //       document.getElementById("NoticiaTitle").style.display="none"
  //       document.getElementById("EconomiaTitle").style.display="none"

  //     }

  //   })


  // }
}