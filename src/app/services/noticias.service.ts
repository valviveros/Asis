import { Injectable } from '@angular/core';
import { title } from 'process';
import db from "../db/noticias.json";
import { NoticiasI } from "../interfaces/NoticiasI"

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  getAll(): Array<NoticiasI> {
    const noticias: Array<NoticiasI> = db;
    return noticias;
  }
  // get(title:string): NoticiasI{
  //   const Noticias: Array<NoticiasI> = db;
  //   const Noticia: Array<NoticiasI> = Noticias.filter(e => e.header.title === title);
  //   if (Noticia.length < 1) {
  //     throw "No se encontró la Noticia"
  //   }
  //   return Noticia[0];
  // }
  // getBytitle(e: string): Array<NoticiasI> {
  //   const Noticias: Array<NoticiasI> = db;
    
  //   // console.log(digimon.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
  //   const Match = Noticias.filter(function(evento){
  //     // console.log(evento.header.title)
  //     if (e === evento.header.title) {
  //       return evento.header.title
  //     }
  //   })
  //   // if (matches.length < 1) {
  //   //   throw "No se encontró la noticia"

  //   // }
  //   return Match
  // }

  
  constructor() { }


}
