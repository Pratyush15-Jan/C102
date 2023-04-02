var firebaseConfig = {
    apiKey: "AIzaSyBy-OBFn3OvREsRAl94xhFzjUyuZiDH93A",
    authDomain: "kwitter-571a9.firebaseapp.com",
    databaseURL: "https://kwitter-571a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-571a9",
    storageBucket: "kwitter-571a9.appspot.com",
    messagingSenderId: "426042981717",
    appId: "1:426042981717:web:5af4d7008a09fa323d83dc",
    measurementId: "G-FKBYSR6LPL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();