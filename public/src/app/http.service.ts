import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getPokemon();
    this.interestingFact();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("Got our tasks!", data));
  }
  interestingFact(){
    let facts = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    facts.subscribe(data => console.log("Got our abilities!", data['abilities'][0]['ability']['name']));
  }
}