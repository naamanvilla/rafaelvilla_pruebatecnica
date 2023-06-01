import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Character, CharacterResponse } from './models/character.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;
  characters: any[] = [];
  apiUrl: string = 'https://rickandmortyapi.com/api/character';

  //En el constructor se inyecta la dependencia del servicio Http para poder usar sus métodos
  constructor(private http: HttpClient) { }

  //Se consume la API con el método <get> del servicio 'HttpClient', devolverá una observable del array Character[]
  fetchData(): Observable<Character[]> {
    return this.http.get<CharacterResponse>(this.apiUrl)
      .pipe(
        map(response => response.results)
      );
  };

  //data sin formato
  fetchRawData(): Observable<any>{
    return this.http.get(this.apiUrl, { responseType: 'text'});
  }

}
