import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { CharacterResponse, Character } from '../models/character.model';

@Component({
  selector: 'app-display-apidata',
  templateUrl: './display-apidata.component.html',
  styleUrls: ['./display-apidata.component.css']
})
export class DisplayAPIdataComponent implements OnInit {
  //Variables que se van usar
  //characters$ se define como observable pues va recibir la data desde el servicio
  characters$: Observable<Character[]> | undefined;
  keys: any;
  selectedStatus: string='';
  isContentVisible: boolean = false;
  sortedCharacters: Character[]=[];
  isSorted: boolean = false;

  //en el constructor del componente se inyecta la dependencia del servicio "data.service.ts" para poder usar su scope y sus métodos
  constructor(private dataService: DataService){}

  ngOnInit():void{
    //Manda llamar el método para recibir la data desde el servicio al momento de crearse el componente.
    this.fetchData();
  }

  toggleContentVisibility(){
    //funcionaliddad de botón toogle, mismo botón con funcionalidad múltiple
    //se inicia en falso, se muestra los personajes cuando se toca y se esconden al siguiente click
    this.isContentVisible = !this.isContentVisible;
  }

  fetchData():void{
    //Recibe la data desde el servicio data.service y lo asigna al Observable characters$
    this.characters$ = this.dataService.fetchData();
    // this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character')
    // .subscribe(
    //   (response) => {
    //     this.characters = response.results;
    //   },
    //   (error) => {
    //     console.log('Error:', error);
    //   }
    // );
    console.log("component characters: ");
    console.log(this.characters$);
  }

  //recibe el status del botón que se tocó, lo asigna al elemento selectedStatus
  filterByStatus(status: string) {
    this.selectedStatus = status;
  }

  //Si hay personajes se ordenan alfabéticamente con el método localeCompare
  //Si no hay personajes, regresa el array vacío
  orderCharacters() {
    if(this.characters$){
      this.characters$.subscribe((characters) => {
        this.sortedCharacters = characters.slice().sort((a, b) => a.name.localeCompare(b.name));
        this.isSorted = true;
      });
    }
  }

  //Resetea el orden al regresar el array vacio
  resetOrder(){
    this.sortedCharacters = [];
    this.isSorted = false;
  }

  showRaw(){
    
  }

  // formatData(data: any): void{
  //   this.keys = Object.keys(this.data);
  // }

}
