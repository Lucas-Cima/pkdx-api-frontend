import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  getPokedex(){
    const url = `/pokedex`;
    }
    
}