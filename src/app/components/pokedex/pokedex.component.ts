import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { FetchPokemon } from 'src/models/pokemon';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex: FetchPokemon[];
  Id: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.FetchPokedex();
  
  }


  FetchPokedex() {
    return this.http.get('/pokedex/national')
    .pipe(map
    ((Response: any)=>{
      this.pokedex = Response;
      return this.pokedex;
    })).subscribe(pokedex => {
      console.log(pokedex);
    });
  }

}
