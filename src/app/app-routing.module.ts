import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAPIdataComponent } from './display-apidata/display-apidata.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JsondataComponent } from './jsondata/jsondata.component';


//Rutas agregadas al array para navegar entre componentes
const routes: Routes = [
  {path:'', component: DisplayAPIdataComponent}, //path vacío se redirige al componente principal 'DisplayAPIdataComponent'
  {path:'jsondata', component: JsondataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
