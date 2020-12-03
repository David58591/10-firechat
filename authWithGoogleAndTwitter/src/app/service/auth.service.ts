import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // tslint:disable-next-line: typedef
  credentialsGoogle() {
    let // Using a popup.
      provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.providerId;
        // The signed-in user info.
        var user = result.user;
      });
  }
  credentialsTwitter() {
    var providerTwitter = new firebase.auth.TwitterAuthProvider();
    providerTwitter.setCustomParameters({apiKey: 'N268nubkxjehjYNiiLsgGLvMX', secretKey : 'NDuBs7lZRsXpnseaDWic5hUm01GUZERAbbrh0tS7rWxEfaK861'});
    providerTwitter.providerId = 'YWE6H20322o2FwLD60T4WMoa';
    firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then(function (result) {
        // This gives you a Google Access Token.
        var token = result.credential.providerId;
        // The signed-in user info.
        var user = result.user;
      });
  }
}
