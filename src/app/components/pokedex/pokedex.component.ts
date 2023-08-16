import { Component, OnInit } from '@angular/core';
import { PokedexService } from "../../services/pokedex/pokedex.service";
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { FetchPokemon } from 'src/models/pokemon';
import { PokemonComponent } from '../pokemon/pokemon.component';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  subscription: Subscription;
  nationaldex: FetchPokemon[];
  error: Error;
  Id: string;
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
    Fairy: '#e9e',
    Poison: '#a59',
    Dark: '#754',
    Ghost: '#66b',
    Ice: '#6cf',
    Steel: '#aab',
    Dragon: '#76e'
  };


  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void{
    this.getNationalPokedex();
  }

  getNationalPokedex() {
    this.subscription = this.pokedexService.getNationalPokedex().subscribe((pokedex: FetchPokemon[]) => {
      this.nationaldex = pokedex;
    },
      () => {
      console.log("error caught");
      });
  }
}


