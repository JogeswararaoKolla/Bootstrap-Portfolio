 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAdlLiim1JqvIP8Ce90Wv84M5ESRuMCTn0",
    authDomain: "myportfolio-c46d1.firebaseapp.com",
    databaseURL: "https://myportfolio-c46d1.firebaseio.com",
    projectId: "myportfolio-c46d1",
    storageBucket: "",
    messagingSenderId: "131704944694",
    appId: "1:131704944694:web:ddd52ae4d02804ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function writeUserData(msgObj) {
    firebase.database().ref('PortfolioData').push(msgObj);
    alert("Thank you " + msgObj.Name + ".your message was saved sucessfully");
  }

  var database = firebase.database();

  $(document).ready(function(event){
    console.log(event);
    $("#submtbtn").click(function(eventObj){
        eventObj.preventDefault();
        console.log(eventObj);  
        let msgObj={
            Name: $("#yourName").val().trim(),
            Email: $("#inputEmail").val().trim(),
            Message : $("#msg").val().trim()
        }
      console.log(msgObj);
      writeUserData(msgObj);
      $("#yourName").val("");
      $("#inputEmail").val("");
      $("#msg").val("");

    });
   

  });
