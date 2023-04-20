// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// CHIEDO ALL'UTENTE PARI/DISAPRI E DI INSERIRE UN NUMERO

let userchoice = prompt("pari o dispari?");
let usernumb = parseInt(prompt("Inserisci un numero"));

// DICHIARO I VALORI SCELTI DALL'UTENTE

console.log("scelta dell'utente " + userchoice);
console.log("scelta del numero utente " + usernumb);

// GENERAZIONE DI UN NUMERO RANDOM PER IL PC

let pcnumb = parseInt(getRandom(1,5).toFixed(0))
console.log(pcnumb)

// CREAZIONE ED ESECUZIONE DELLE FUNZIONI

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

let sum = usernumb + pcnumb;
console.log("somma " + sum)
EvenOrOdd(sum)
function EvenOrOdd(){
    
    if(sum % 2 == 0  ){
        console.log("pari")
        sum = "pari"
    }else{
        console.log("dispari")
        sum = "dispari"
    }
    return
}

// DETERMINO CHI VINCE

if(userchoice === sum){
    console.log("hai vinto")
}else{
    console.log("hai perso")
}