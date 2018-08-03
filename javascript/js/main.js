document.getElementById("bold").onclick=toBold

function toBold(){
    let weight = document.getElementById("paragraph").style.fontWeight

    if(weight=="bold"){
        document.getElementById("paragraph").style.fontWeight="normal"
    }else{
        document.getElementById("paragraph").style.fontWeight="bold"
    }
}


document.getElementById("italic").onclick=toItalic

function toItalic(){
    let weight = document.getElementById("paragraph").style.fontStyle

    if(weight=="italic"){
        document.getElementById("paragraph").style.fontStyle="normal"
    }else{
        document.getElementById("paragraph").style.fontStyle="italic"
    }
}

document.getElementById("underline").onclick=toUnderline

function toUnderline(){
    let weight = document.getElementById("paragraph").style.textDecoration

    if(weight=="underline"){
        document.getElementById("paragraph").style.textDecoration="initial"
    }else{
        document.getElementById("paragraph").style.textDecoration ="underline"
    }
}

document.getElementById("fontFamily").onchange = changeFontFamily

changeFontFamily()  /*la valeur sélectionnée en premier lieu*/
function changeFontFamily(){
    let family= document.getElementById("fontFamily").value
    document.getElementById("paragraph").style.fontFamily = family
}

document.getElementById("fontSize").onchange = changeFontSize

changeFontSize()  /*la valeur sélectionnée en premier lieu*/
function changeFontSize(){
    let family= document.getElementById("fontSize").value
    document.getElementById("paragraph").style.fontSize = family
}