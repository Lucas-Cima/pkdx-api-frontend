import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { FetchPokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokedex: FetchPokemon[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  FetchSinglePokemon() {
    return this.http.get('/pokedex/{Id}')
    .pipe(map
    ((Response: any)=>{
      this.pokedex = Response;
      return this.pokedex;
    })).subscribe(pokedex => {
      console.log(pokedex);
    });
  }
  colorMapping: any = {
    Grass: '#7c5',
    Fire: '#f42',
    Water: '#39f',
    Normal: '#aa9',
    Flying: '#89f',
    Electric: '#fc3',
    Rock: '#ba6',
    Ground: '#db5',
    Bug: '#ab2',
    Fighting: '#b54',
    Psychic: '#f59',
    Fairy: '',
    Poison: '#a59',
    Dark: '#754',
    Ghost: '#66b',
    Ice: '#6cf',
    Steel: '#aab',
    Dragon: '#76e'
};


}
