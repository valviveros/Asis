import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
interface SectionsI {
  header: {
    title: string
    id: string
  }
  tag:{
    title: string
    img: string
    id: string
    
    // imgSize?: number
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

  constructor( private noticiasService: NoticiasService ) { }

  ngOnInit() {
    addEventListener("click",this.onIconClick);   
  }

  onIconClick(){
    const click = document.getElementById("imagen1");
    const click2 = document.getElementById("imagen2");
    const click3 = document.getElementById("imagen3")
    const back = document.getElementById("backOne");
    const back2 = document.getElementById("backTwo");
    const back3 = document.getElementById("backThree")

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
      console.log("entró al 2")
      document.getElementById("DetailsTwo").style.display=""
      document.getElementById("bodyTwo").style.display=""
    }

    if (event.target == click3) {
      //lo que debe cerrar
      document.getElementById("DetailsOne").style.display=""
      document.getElementById("bodyOne").style.display=""

      document.getElementById("DetailsTwo").style.display=""
      document.getElementById("bodyTwo").style.display=""

      //lo que debe abrir
      document.getElementById("DetailsThree").style.display="block"
      document.getElementById("bodyThree").style.display="none"


    }else if (event.target == back3) {
      console.log("entró al 2")
      document.getElementById("DetailsThree").style.display=""
      document.getElementById("bodyThree").style.display=""
    }

    
  }

  initializeItems(){
    this.sections= this.noticiasService.getAll();
  }

  buscar(event: any){
    const valor = event.target.value;
      this.initializeItems()
      if (valor && valor.trim() != '') {
        this.sections= this.sections.filter((item) => {
         
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