//Funzione per cambiare H1
function cambiaH1() {
    let H1 = document.getElementById("title")
    if (H1.innerHTML === "Amazon") {
        H1.innerHTML = "E-Commerce";
    } else {
        H1.innerHTML = "Amazon";
    }
}

//Funzione per cambio colore background
function cambiaBackground() {
    if (document.bgColor === "grey") {
        document.bgColor = "white";
    } else {
        document.bgColor = "grey";
    }
}

//Funzione per cambiare l'indirizzo 
function changeAddress() {
    let address = document.getElementById("address");
    //console.table(address.innerHTML);
    if (address.innerHTML === "Via Paperino, 123 DisneyLand Parigi") {
        address.innerHTML = "Via Ravanusa, 48/B Tremestieri Etneo (CT) Italia";
    } else {
        address.innerHTML = "Via Paperino, 123 DisneyLand Parigi";
    }
}

//Funzione per aggiungere o rimuovere una classe
function addClass() {
    let classe = document.getElementsByTagName("a");
    for (let i = 0; i < classe.length; i++)
        classe[i].classList.toggle("prova");
}

//Funzione per nascondere e mostrare le immagini
function hideShow() {
    let classe = document.getElementsByTagName("img");
    for (let i = 0; i < classe.length; i++)
        classe[i].classList.toggle("hide");
}



//Funzione per cambiare il colore del prezzo in maniera randomica
function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let classe = document.getElementsByClassName("article-price")
    console.log(classe);
    for(let i = 0; i < classe.length; i++){
        classe[i].style.color = "#" + randomColor;
    }
}
