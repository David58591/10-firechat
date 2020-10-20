import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { Component } from '@angular/core';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';


const APP_ROUTES: Routes = [
  { path: 'home' , component: Component},
  { path : 'usuario/:id',
   component: UsuarioComponent,
   children: USUARIO_ROUTES

    },
  { path: '**' , pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);