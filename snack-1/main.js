'use strict';

// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num1 = Number(prompt('numero 1'));
const num2 = Number(prompt('numero 2'));

let msg;

if (num1 > num2) msg = 'il maggiore è ' + num1;
else if (num1 === num2) msg = 'sono equivalenti';
else msg = 'il maggiore è ' + num2;

console.log(msg);