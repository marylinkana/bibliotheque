import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    const config = {
      apiKey: "AIzaSyBRK840Le6I5bXa3dtbCG-UgIpQh1VO3ns",
      authDomain: "bibliotheque-8ff88.firebaseapp.com",
      databaseURL: "https://bibliotheque-8ff88.firebaseio.com",
      projectId: "bibliotheque-8ff88",
      storageBucket: "bibliotheque-8ff88.appspot.com",
      messagingSenderId: "489341297639",
      appId: "1:489341297639:web:d6b29d80b1e7e3cc"

    };
    firebase.initializeApp(config);
  }

}
