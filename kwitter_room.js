
 var firebaseConfig = { apiKey: "AIzaSyCdCqJNXXyJkPIJmNr8K90ydMPapTSQvFI", 
authDomain: "kwitteeer.firebaseapp.com", 
databaseURL: "https://kwitteeer-default-rtdb.firebaseio.com",
 projectId: "kwitteeer", 
 storageBucket: "kwitteeer.appspot.com",
  messagingSenderId: "487391430616",
   appId: "1:487391430616:web:2a6f01253d5d621c4b14ad" };
   // Initialize Firebase firebase.initializeApp(firebaseConfig);
   
   firebase.initializeApp(firebaseConfig);
  
   username= localStorage.getItem("username");
   
   document.getElementById("user_name").innerHTML= "Welcome"+ username+"!";
   function addroom()
   {
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose: "adding roomname"
         });
         localStorage.setItem("roomname",room_name);
         window.location="kwitter_page.html";

   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name",+Room_names);
      row=" <div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirect(name) {
      console.log(name);
      localStorage.setItem("room name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html";
}