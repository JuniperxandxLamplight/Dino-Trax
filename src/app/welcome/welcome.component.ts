import { Component, OnInit } from '@angular/core';
// declare var require: any;
// const firebase = require("firebase/functions");

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  storeUserPassword(pass){
    // const storePass = firebase.functions().httpsCallable('storePass');
    // storePass({text: pass}).then(function(result) {
    //   // Read result of the Cloud Function.
    //   const passHash = result.data.text;
    // }).catch(function(error) {
    //   // Getting the Error details.
    //   const code = error.code;
    //   const message = error.message;
    //   const details = error.details;
    // });
  }
}
