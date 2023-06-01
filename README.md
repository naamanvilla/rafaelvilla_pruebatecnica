# TestAPIapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Prueba técnica candidato: Rafael Villa

-Se creó la applicación desde el CLI con 'ng new <nombreApp>'

## routing
-> seleccioné la opción de routing, el archivo 'app-routing.module' para ejemplificar el concepto de Routing y navegar entre componentes

## componentes    
-Se crearon los componentes 'display-apidata' y 'jsondata' desde el CLI con 'ng generate c <nombreComponente>'
-> Estos componentes se les inyecta la dependencia del servicio data.service para poder consumir la api
-> componente 'jsondata': Sólo mostrará la data sin formato
-> componente 'display-apidata'muestra la data con formato del modelo de personajes (con imágenes) y tiene funcionalidad para filtrar por status (Usando la pipe personalizada 'filter.pipe'), ordenar personajes por nombre

## data.service.ts
-Se creó el servicio 'data.service' desde el CLI con 'ng generate s <nombreServicio>'
-Este se inyecta como dependencia en los componentes para usarse
    -> en este servicio vienen métodos para consumir la API:
        -> Un método la regresa sin formato
        -> segundo método la regresa en formato usando el modelo para los personajes

## Modelos
-Se creó el modelo 'character.model.ts' para manejar una estructura de la data que se va consumir y mostrarla en el template

## Pipe personalizada
-Se creó la pipe personalizada 'filter.pipe' para ejemplificar el concepto, previamente sabiendo la estructura de la data, se puede agregar este tipo de filtros, en este caso, filtro para status de los personajes