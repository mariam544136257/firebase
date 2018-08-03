var config = {
    apiKey: "AIzaSyBRV2pKYOE6Doj8OQzfWOVlE905foFGMLo",
    authDomain: "ourdatabase-31870.firebaseapp.com",
    databaseURL: "https://ourdatabase-31870.firebaseio.com",
    projectId: "ourdatabase-31870",
    storageBucket: "ourdatabase-31870.appspot.com",
    messagingSenderId: "595909579422"
  };
  firebase.initializeApp(config);

  function enregistrer(){
    let nom =$("#name").val()
    let mail =$("#mail").val()
    let texte =$("#text").val()
    let message1 =$("#msg").val()
    firebase.database().ref("ourdatabase/"+nom).set({
        nom:nom,
        email:mail,
        text:texte,  
        message:message1
    })
    document.querySelector('.alert').style.display = 'block';
    }
    //e.preventDefault() in this case will stop the form from submitting & therefore refreshing.
    $("#formulaire").submit(function(e){
        e.preventDefault()
        enregistrer()
    })
    document.querySelector('.alert').style.display = 'none';
    