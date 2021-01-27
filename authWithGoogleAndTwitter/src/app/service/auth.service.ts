import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { authFireGoogle } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // tslint:disable-next-line: typedef
  credentialsGoogle() {
    // Using a popup.
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    firebase
      .auth()
      .getRedirectResult()
      .then(function (result) {
        // This gives you a Google Access Token.
        if (result.credential) {
          const token = authFireGoogle.apiKey;
        }

        // The signed-in user info.
        let user = result.user;
      });
  }
  credentialsTwitter() {
    const providerTwitter = new firebase.auth.TwitterAuthProvider();
    providerTwitter.setCustomParameters({
      apiKey:
        '413818067815-vrhdj3gcn31ifnk433jsb50rj1q9q1hk.apps.googleusercontent.com',
      secretKey: 'YWE6H20322o2FwLD60T4WMoa',
    });
    providerTwitter.providerId =
      'https://firechat-a030a.firebaseapp.com/__/auth/handler';
    firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then(function (result) {
        // This gives you a Google Access Token.
        const token = result.credential.signInMethod;
        // The signed-in user info.
        const user = result.user;
      });
  }
}
