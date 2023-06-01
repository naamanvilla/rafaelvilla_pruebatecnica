import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'; 
import { Character } from '../models/character.model';

@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit{
  data: string ='';

  //inyecta la dependencia en el constructor
  constructor(private dataService: DataService){}

  //al inicializarse el componente, manda llamar el método del servicio para traer la data sin formato
  ngOnInit(): void {
    this.dataService.fetchRawData().subscribe(response => {
      this.data = response;
    });
  }

}
