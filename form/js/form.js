// Fonction de désactivation de l'affichage des "tooltips"
function deactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++) {
        tooltips[i].style.display = 'none';
    }

}


// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input

function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }
/*La propriété en lecture seule  Node.nextSibling renvoie le nœud (node) suivant immédiatement le nœud spécifié dans la liste des enfants ( childNodes) de son nœud parent,
 ou null si le nœud spécifié est le dernier dans cette liste.
 'il suffit de chercher la bulle d'aide la plus « proche » après l'<input> que nous sommes actuellement en train de traiter.*/
    return false;

}


// Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok

var check = {}; // On met toutes nos fonctions dans un objet littéral
/*Nous allons pouvoir exécuter la fonction correspondant à un champ de cette manière : check['id_du_champ']();. Cela va grandement 
simplifier notre code lors de la mise en place des événements.
Il est très important que vous constatiez que notre fonction est contenue dans l'index login de l'objet check, l'index n'est rien d'autre 
que l'identifiant du champ de texte auquel la fonction appartient.*/

check['sex'] = function() {

    var sex = document.getElementsByName('sex'),
        tooltipStyle = getTooltip(sex[1].parentNode).style;

    if (sex[0].checked || sex[1].checked) {
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['lastName'] = function(id) {

    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;
        /*Tout simplement parce qu'elle va nous servir à analyser
         deux champs de texte différents : celui du nom et celui du prénom. */

    if (name.value.length >= 2) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['firstName'] = check['lastName']; // La fonction pour le prénom est la même que celle du nom

check['age'] = function() {

    var age = document.getElementById('age'),
        tooltipStyle = getTooltip(age).style,
        ageValue = parseInt(age.value);

    if (!isNaN(ageValue) && ageValue >= 18 && ageValue <= 80) {
        age.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        age.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['mail'] = function() {

    var mail = document.getElementById('mail'),
        tooltipStyle = getTooltip(mail).style;

    if (mail.value != 'none') {
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inline-block';
        return false;
    }

};



check['filière'] = function() {

    var filière = document.getElementById('filière'),
        tooltipStyle = getTooltip(filière).style;

    if (filière.options[filière.selectedIndex].value != 'none') {
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inline-block';
        return false;
    }

};


// Mise en place des événements

(function() { // Utilisation d'une IIFE pour éviter les variables globales.

    var myForm = document.getElementById('myForm'),
        inputs = document.querySelectorAll('input[type=text], input[type=email]'),
        /*il ne s'agit que de parcourir les <input> de type text ou password.*/
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            /*assigner une fonction anonyme à l'événement keyup de l'<input> actuellement traité*/
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
            /*elle fait appel à la fonction d'analyse qui correspond à l'<input> qui a exécuté l'événement. Ainsi, si l'<input>#login déclenche son événement, il appellera alors la fonction check['login']().*/
        });
    }

    myForm.addEventListener('submit', function(e) {
        /*Alors concernant notre événement submit, celui-ci va parcourir notre tableau check 
        et exécuter toutes les fonctions qu'il contient (y compris celles qui ne sont pas associées à un champ de texte comme check['sex']() et check['country']()). Chaque valeur retournée par ces fonctions est « ajoutée » à la variable result, ce qui fait que si une des fonctions a renvoyé false alors result sera aussi à false et l'exécution de la fonction alert() ne se fera pas.*/
        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            alert('Le formulaire est bien rempli.');
        }

        e.preventDefault();

    });

    myForm.addEventListener('reset', function() {
/*Concernant notre événement reset, c'est très simple : on parcourt les champs de texte, on retire leur classe et ensuite on désactive toutes les bulles d'aide grâce à notre fonction deactivateTooltips().*/
        for (var i = 0; i < inputsLength; i++) {
            inputs[i].className = '';
        }

        deactivateTooltips();

    });

})();


// Maintenant que tout est initialisé, on peut désactiver les "tooltips"

deactivateTooltips();