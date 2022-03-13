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
}
