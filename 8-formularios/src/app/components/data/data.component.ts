import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent  {

  forma: FormGroup;
  usuario:Object = {
   
      nombre : 'David',
      apellido: 'Egea',
      correo: 'david.egea.daw@gmail.com',
      pasatiempos: ['Correr', 'Dormir', 'Comer']
  };
 
  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required,
       Validators.minLength(3), Validators.maxLength(15)]),
      'apellido': new FormControl('', [Validators.required,
      Validators.minLength(3), Validators.maxLength(30)]),
      'correo': new FormControl('', [Validators.required,
      Validators.pattern('[a-z0-9.?-?]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ),
      'pasatiempos': new FormArray([new FormControl('', Validators.required)])
    });
  //  this.forma.setValue(this.usuario);
  }

  agregarPasatiempo(): void{
    (<FormArray>this.forma.controls['pasatiempos']).push(
    new FormControl('', Validators.required));
  }

  guardarCambios(): void{
  console.log(this.forma.value);
  console.log(this.forma);

  this.forma.reset( {
    nombre : '',
    apellido: '',
    
    pasatiempos: []
  });
  }
}
