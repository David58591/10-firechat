// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};
export const  authFireGoogle = {
  apiKey: 'AIzaSyB0apZi9csudS7OdwT3KNzN1aRY0_x1znQ',
  authDomain: 'firechat-a030a.firebaseapp.com',
  databaseURL: 'https://firechat-a030a.firebaseio.com',
  projectId: 'firechat-a030a',
  storageBucket: 'firechat-a030a.appspot.com',
  messagingSenderId: '413818067815',
  appId: '1:413818067815:web:815b2866fbd58102f5edc2',
  measurementId: 'G-6DXT9C7T2X'
 };
export const  authFireTwitter = {
  apiKey: '413818067815-vrhdj3gcn31ifnk433jsb50rj1q9q1hk.apps.googleusercontent.com',
  apiSecret: 'YWE6H20322o2FwLD60T4WMoa'
 };

 // Initialize Firebase
firebase.initializeApp(authFireGoogle, 'Google');
firebase.initializeApp(authFireTwitter, 'Twitter');
firebase.analytics();
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
import firebase from 'firebase';
