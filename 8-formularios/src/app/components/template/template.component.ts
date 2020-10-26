import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form){
      border:1px solid red;
    }
    .espacio{
      margin: 0 auto;
      height: 150px;
    }
    .inline{
      display:inline-block;
    }
    `
  ]
})
export class TemplateComponent implements OnInit {

  paises = [{
    codigo : 'ESP',
    pais : 'España'
  },
  {
     codigo: 'CRI',
     pais: 'Costa Rica'
  },
  {
     codigo: 'FRA',
     pais: 'Francia'
  }
];
  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    pais: 'ESP',
    sexo: 'Hombre'
  };
   sexos = ["Hombre","Mujer","Sin definir"];
  constructor() { }

  ngOnInit(): void {
  }
  guardar( f: NgForm): any {

    console.log('formulario Posteado');
    console.log('ngForm:', f);
    console.log('Valor:', f.value);
  }
}
