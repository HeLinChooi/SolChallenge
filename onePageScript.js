/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  // var database = firebase.database();
  // document.getElementById("mySidePanel").style.width = "50%";
  console.log("in open nav function");
  // firebase.database().ref("user").set({
  //   username: "steady"
  // });
  document.getElementById("mySidePanel").style.width = "90%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidePanel").style.width = "0";
}