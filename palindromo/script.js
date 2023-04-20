// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// CHIEDO ALL'UTENTE UNA PAROLA

let word = prompt("Inserisci una parola!")
let l = word.length 



// DETERMINARE SE LA PAROLA E' PALINDROMA O NO


function equalornot(){
    for(let i = 0; i  < 1/2; i++){
    
    if (word[i] !== word[l - 1 - i]){
        console.log("non palindromo")
        return false
    }else{
        console.log("palindromo")
        return true
    }
  }
}

// STAMPO IL RISULTATO

equalornot(word);
console.log(word)








