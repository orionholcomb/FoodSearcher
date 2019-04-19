// Initialize Firebase
var config = {
  apiKey: "AIzaSyDCbDyvb7466TQ92Zz62wkeenxxwnBAfJg",
  authDomain: "food-searcher-2148b.firebaseapp.com",
  databaseURL: "https://food-searcher-2148b.firebaseio.com",
  projectId: "food-searcher-2148b",
  storageBucket: "food-searcher-2148b.appspot.com",
  messagingSenderId: "269446386428"
};
firebase.initializeApp(config);

// Reference for the firebase database
var database = firebase.database();

// On click function that stores our variables in firebase
$(".exerBtn").on("click", function(event) {
  event.preventDefault();

  // Variables that store user inputs
  var name = $("#name")
    .val()
    .trim();
  var email = $("#email")
    .val()
    .trim();
  var phone = $("#phone")
    .val()
    .trim();
  var message = $("#message")
    .val()
    .trim();
  database.ref().set({
    nameInput: name,
    emailInput: email,
    phoneInput: phone,
    messageInput: message
  });
});

database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
});
