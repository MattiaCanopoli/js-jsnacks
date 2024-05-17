'use strict'

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l'array alla fine.

const odd =[]

for (let i = 0; i<6; i++ ){
    let num = Number(prompt('inserisci un numero'))
    if (num % 2 !== 0) odd.push(num)
}

console.log(odd)