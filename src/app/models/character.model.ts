//Interfaces usadas como modelos para la estructura del response de la API
//

export interface CharacterResponse {
    results: Character[];
  }
  
export interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
}
  