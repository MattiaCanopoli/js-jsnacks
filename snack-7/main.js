// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.


const maxValue = Number(prompt('definisci il valore massimo'))

for (let i = 1; (i*2) <=maxValue; i++) {
    console.log(i*2)
}