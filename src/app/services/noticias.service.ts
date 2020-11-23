import { Injectable } from '@angular/core';
import db from "../db/noticias.json";
import { NoticiasI } from "../interfaces/NoticiasI"

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  getAll(): Array<NoticiasI> {
    const noticias: Array<NoticiasI> = db;
    return noticias;
  }
  constructor() { }
}
