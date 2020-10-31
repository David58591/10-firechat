import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { HeroeModel } from '../../models/heroe/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe = new HeroeModel();

  constructor(private heroesService : HeroesService,
              private route: ActivatedRoute) {}

  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo'){
      this.heroesService.getHeroe(id).subscribe(
        (resp : HeroeModel) => {
          this.heroe = resp;
          this.heroe.id = id;
          console.log(resp);
        }
      );
    }
    
  }

  guardar(  f : NgForm) {
    if (f.invalid) {
      console.log('Formulario invalido');
      return;
    }
    console.log(f);
    console.log(f.form);

    Swal.fire({
      title: 'Espere',
      text: 'Guardando Información',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe(() => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success',
      });
    });
  }
}
