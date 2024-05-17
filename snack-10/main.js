// Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
// Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.

let num = '' //creo una variante con una stringa vuota

//apro un ciclo for infinito che continua a chiedere all'utente numeri con prompt 'input'
for (i=1; i>0;){
    let input = Number(prompt('inserisci un numero'))

    //verifico che input sia un numero, altrimenti alert e fermo l'esecuzione
    if (isNaN(input)){ 
        alert('è necessario inserire un numero per giocare!');

    } else if (input===num){     //se input è un numero, verifico che sia uguale alla variabile num (stringa vuota alla prima iterazione). se uguale, alert e fermo l'esecuzione
        alert('hai inserito due numeri uguali');
        break
    }

    //assegno a num il valore di input per controllo dalla seconda iterazione in poi
    num=input 
}