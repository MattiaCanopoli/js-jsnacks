// Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
// Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.

let rnd = Math.ceil(Math.random() * 9)+1 ;

const num = Number(prompt('Inserisci un numero da 1 a 10'))

if (!isNaN(num)){
    if (num===rnd){
        alert('Hai vinto!')
    } else {
        alert('Non hai vinto')
    }
} else {
    alert('Devi inserire un numero per giocare!')
}