/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 10;
let num2 = 7;

if (num1 > num2) {
    console.log('Il primo numero è maggiore del secondo');
    
} else {
  console.log('Il secondo numero è maggiore del primo');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 5;

if (numero !== 5) {
    console.log('Not equal to 5')
} else {
  console.log('Equal to 5')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numDivisibile = 20;

if (numDivisibile % 5 === 0) {
    console.log('Divisibile per 5')
} else {
  console.log('Non divisibile per 5')

}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoNumero = 5;
let secondoNumero = 3;

if (primoNumero ===8 || secondoNumero === 8) {
    console.log('Uno dei due numeri equivale a 8')
} else if(primoNumero + secondoNumero === 8){
    console.log('La somma dei due numeri equivale a 8');
    
} else {
    console.log('Nessuno dei due numeri, nè la loro somma, equivale a 8');
    
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 48;

if (totalShoppingCart<=50) {
    let shippingCost = 10;
    let total = totalShoppingCart+ shippingCost
    let more = 50 - totalShoppingCart;
    console.log('Il totale è: ' + totalShoppingCart + '$. Aggiungi ' + more+ '$ Per usufruire della spedizione gratuita!')
    
} else {
  console.log('Hai diritto alla spedizione gratuita! Il totale del tuo carrello è maggiore di 50')
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sconto = 0.2;
let blackFriday = totalShoppingCart * sconto;
let newTotal = totalShoppingCart - blackFriday;

if (newTotal <= 50) {
  let shippingCost = 10;
  let total = newTotal+ shippingCost;
  let more = 50 - newTotal;
  console.log('Il totale è: ' + total + '$. Aggiungi ' + more+ '$ Per usufruire della spedizione gratuita!')
  
} else {
console.log('Hai diritto alla spedizione gratuita! Il totale del tuo carrello è maggiore di 50')
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let var1 = 80;
let var2 = 1800;
let var3 = 556;

if (var1 > var2 && var2 > var3) {
  console.log(var1 + ' ' + var2 + ' ' + var3);
} else if (var1 > var2 && var2 < var3 && var3 < var1) {
  console.log(var1 + ' ' + var3 + ' ' + var2);
} else if (var2 > var1 && var2 > var3 && var1 > var3) {
  console.log(var2 + ' ' + var1 + ' ' + var3);
} else if (var2 > var1 && var2 > var3 && var3 > var1) {
  console.log(var2 + ' ' + var3 + ' ' + var1);
} else if (var3 > var1 && var3 > var2 && var1 > var2) {
  console.log(var3 + ' ' + var1 + ' ' + var2);
} else if (var1 < var2 && var2 < var3) {
  console.log(var3 + ' ' + var2 + ' ' + var1);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore1 = 'casa';
let valore2 = 5;

console.log(valore1 + ': ' + typeof valore1);
console.log(valore2 + ': '  + typeof valore2);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pariDispari = 11

if (pariDispari % 2 === 0) {
    console.log('Il numero inserito è pari.');
    
} else {
    console.log('Il numero inserito è dispari.');
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'; 
 console.log(me);
 
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberArray = []
numberArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numberArray);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numberArray[9] = 100;
console.log(numberArray);

//oppure

numberArray.splice(-1, 1, 100);
console.log(numberArray);
