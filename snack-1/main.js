'use strict';

// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num1 = prompt('numero 1');
const num2 = prompt('numero 2');

if (num1 > num2) console.log('il maggiore è ' + num1);
else if (num1 == num2) console.log('sono equivalenti');
else console.log('il maggiore è ' + num2);
