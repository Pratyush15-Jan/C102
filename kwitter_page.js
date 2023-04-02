var firebaseConfig = {
    apiKey: "AIzaSyDSjzIhWkk9X6f91-TJR7sKC_zg92xSMuk",
    authDomain: "try1-8ebd0.firebaseapp.com",
    databaseURL: "https://try1-8ebd0-default-rtdb.firebaseio.com",
    projectId: "try1-8ebd0",
    storageBucket: "try1-8ebd0.appspot.com",
    messagingSenderId: "806384789247",
    appId: "1:806384789247:web:6e46b3c6d4b03fa9ff8eca",
    measurementId: "G-THD0S830P3"
  };
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }