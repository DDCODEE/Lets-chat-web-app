var firebaseConfig = { apiKey: "AIzaSyCdCqJNXXyJkPIJmNr8K90ydMPapTSQvFI", 
authDomain: "kwitteeer.firebaseapp.com", 
databaseURL: "https://kwitteeer-default-rtdb.firebaseio.com",
 projectId: "kwitteeer", 
 storageBucket: "kwitteeer.appspot.com",
  messagingSenderId: "487391430616",
   appId: "1:487391430616:web:2a6f01253d5d621c4b14ad" };
   // Initialize Firebase firebase.initializeApp(firebaseConfig);
   
   firebase.initializeApp(firebaseConfig);
   user_name= localStorage.getItem("username");
   room_name=localStorage.getItem("roomname");
function send() 
{
      msg= document.getElementById("msg").value;
      firebase.database().ref("/").child(room_name).push({
            name:user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];

row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";       
document.getElementById("output").innerHTML+= row;

      } });  }); }
getData();
function updatelike(message_id)
{
      console.log("When like button clicked"+ message_id);
      button_id=message_id;
       likes= document.getElementById(button_id).value;
       update_likes= Number(likes)+1;
       console.log(update_likes);
       firebase.database().ref(room_name).child(message_id).update({
             like:update_likes

       });
}
function logout()
{
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html";
}
