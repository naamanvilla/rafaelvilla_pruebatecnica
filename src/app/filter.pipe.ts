import { Pipe, PipeTransform } from '@angular/core';
import { CharacterResponse, Character } from './models/character.model';

//custom pipe "filter" para filtrar los personajes por status
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(characters: Character[], selectedStatus: string): Character[] {
    //regresa un array vacío para evitar error al ser potencialmente nulo
    if(!characters){
      return [];
    }
    //Si selectedStatus NO es nulo ó es igual "All" regreso el array con los personajes
    if(!selectedStatus || selectedStatus==='All'){
      return characters
    }
    //Se implementa el filtrado por selectedStatus
    return characters.filter(character => character.status === selectedStatus);
  }
}
