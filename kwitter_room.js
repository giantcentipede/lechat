

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxVDR3njQ86K0sTrCT_ltiWkXCuw3eJwc",
    authDomain: "letchat-b55f5.firebaseapp.com",
    databaseURL: "https://letchat-b55f5-default-rtdb.firebaseio.com",
    projectId: "letchat-b55f5",
    storageBucket: "letchat-b55f5.appspot.com",
    messagingSenderId: "1037493096683",
    appId: "1:1037493096683:web:0ed07b42c50e22bfe12eae"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  





user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addroom() {
    room_name=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding roomname"
    });
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  
    console.log("roomname "+ Room_names );

    row="<div class='room_name' id="+Room_names + " onclick='redirecttoRoomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
    
    });});}
getData();
function redirecttoRoomname(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    
}

function logout() {
    window.location="index.html";
}