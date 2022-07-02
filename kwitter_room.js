const firebaseConfig = {
      apiKey: "AIzaSyCDMRo-a8cnCBkpmp-it1JPCPVuLSCeLR4",
      authDomain: "kwitter-a6fad.firebaseapp.com",
      databaseURL: "https://kwitter-a6fad-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6fad",
      storageBucket: "kwitter-a6fad.appspot.com",
      messagingSenderId: "59792493573",
      appId: "1:59792493573:web:10a2583795479f3f5ae06c",
      measurementId: "G-S2FV651KDQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
name1 = localStorage.getItem("username");


function getData() {
      console.log("getData is running");
      firebase.database().ref("/").on('value', function (snapshot) {
            //document.getElementById("output").innerHTML = " ";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
console.log("Roomnames" + " " + Room_names)
                  //End code
                 
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'openchat(this.id)'> " + Room_names + " </div><hr><br>"
                  document.getElementById("output").innerHTML += row;
                  console.log("getData function has ended");
            });
      });
      
}
getData();

function logout() {
      localStorage.removeItem("username");
      window.location = "index.html";
}
name1 = localStorage.getItem("username");
document.getElementById("welcometag").innerHTML = "Welcome " + name1 + "!!!!!!!!!!!!!!!!!!!!!";

function createroom() {
      roomname = document.getElementById("addroom").value;
      console.log(roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose: "create room name"

      })

      //firebase.database().ref("/").child(roomname).update({purpose : "test"})
      window.location = "kwitter_page.html";
      console.log("action succesful");
      localStorage.setItem("NewRoom", roomname);

}

function openchat(name) {
console.log(name);
localStorage.setItem("Roomnames", name);
window.location = "kwitter_page.html"
}
