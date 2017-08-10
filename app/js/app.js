// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAob_pAd1X1VHzmq5R1uT60ZSDfSH2_JTQ",
    authDomain: "angular-fire-chat-fa8e7.firebaseapp.com",
    databaseURL: "https://angular-fire-chat-fa8e7.firebaseio.com",
    projectId: "angular-fire-chat-fa8e7",
    storageBucket: "angular-fire-chat-fa8e7.appspot.com",
    messagingSenderId: "224848298342"
  };
  firebase.initializeApp(config);


// Main module
angular.module('chatApp', ['firebase']);
 