import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {  AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Componentes
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

// servicios
import {AngularFireAuth}  from '@angular/fire/auth/';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
 
  exports: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
