var config = {
    apiKey: "AIzaSyBRV2pKYOE6Doj8OQzfWOVlE905foFGMLo",
    authDomain: "ourdatabase-31870.firebaseapp.com",
    databaseURL: "https://ourdatabase-31870.firebaseio.com",
    projectId: "ourdatabase-31870",
    storageBucket: "ourdatabase-31870.appspot.com",
    messagingSenderId: "595909579422"
  };
  firebase.initializeApp(config);

  $("#formulaire").submit(function(e){
    e.preventDefault()
    afficher()
})

function afficher(){
    let nom = $("#name").val()
    let feedBacksRef = firebase.database().ref('ourdatabase/'+nom);
    /*A ref in Firebase is like an Excel table, with different attributes and values.*/
    feedBacksRef.once('value').then(function(snapshot) {
      let msg = snapshot.val()
      let email = msg.email
      let texte = msg.text
      let message1=msg.message
      /*JQUERY*/
    $("#name").val(nom) /*on va attribuer la valeur saisie de nom dans #nom*/
    $("#mail").val(email)
    $("#text").val(texte)
    $("#msg").val(message1)
    });
    document.querySelector('.alert').style.display = 'block';
}
document.querySelector('.alert').style.display = 'none';