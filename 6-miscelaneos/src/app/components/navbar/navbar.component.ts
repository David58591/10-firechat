import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioNuevoComponent } from '../usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from '../usuario/usuario-editar.components';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  usuario: UsuarioComponent;
  usuarioNuevo: UsuarioNuevoComponent;
  usuarioEditar: UsuarioEditarComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
