import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import firebase from 'firebase';
import { authFireGoogle, authFireTwitter } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authWithGoogleAndTwitter';
  constructor(auth: AuthService){
    firebase.initializeApp(authFireGoogle, 'logueo con Google');
    firebase.initializeApp(authFireTwitter, 'logueo con Twitter');
    auth.credentialsGoogle();
    auth.credentialsTwitter();
  }
}
