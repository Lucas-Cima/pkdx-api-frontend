import { Injectable } from '@angular/core';
import { FetchPokemon } from "../../../models/pokemon";
import {catchError, first, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokedex: FetchPokemon[];
  constructor(
    private http: HttpClient
  ) { }

  getNationalPokedex(): Observable<FetchPokemon> | any {
    const url = `/pokedex/national`;
    return this.http.get(url).pipe(
      // first(),
      // catchError((error: HttpErrorResponse) => throwError(() => error)),
      map((Response: any) => {
        this.pokedex = Response;
        return this.pokedex;
      }))
  }
}
