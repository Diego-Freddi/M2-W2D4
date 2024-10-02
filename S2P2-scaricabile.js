// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.

Progetto:
array di utenti



*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const martin = {
  name: "Martin",
  lastName: "Walt",
  isAmbassador: true,
}

let clienti = []
clienti.push(marco, paul, amy, martin)


console.log("esercizio: elenco clienti")

for (i = 0; i < clienti.length; i++) {

  if (clienti[i].isAmbassador === true) {
    console.log("l'utente " + clienti[i].name + " " + clienti[i].lastName + " è un ambassador")
  }
  else {
    console.log("l'utente " + clienti[i].name + " " + clienti[i].lastName + " non è un ambassador")
  }
}

/* console.log(" ")
console.log("esercizio: elenco clienti (alternativa)")
 
for (let utente of clienti) {
  if (utente.isAmbassador === true) {
    console.log("l'utente " + utente.name + " " + utente.lastName + " è un ambassador")
  }
  else {
    console.log("l'utente " + utente.name + " " + utente.lastName + " non è un ambassador")
  }
}
 */

console.log(" ")
console.log("esercizio: elenco ambassador")

let ambassador = []
for (i = 0; i < clienti.length; i++) {
  if (clienti[i].isAmbassador === true) {
    ambassador.push(clienti[i])
    console.log("l'utente " + clienti[i].name + " " + clienti[i].lastName + " è un ambassador")
  }
}

console.log(" ")
console.log("esercizio: carrello spesa")

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

let carrello = 0
for (i = 0; i < prices.length; i++) {
  carrello += prices[i]
}

let sconto = 0.7

if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
  carrello *= sconto;
  if (carrello > 100) {
    console.log(utenteCheEffettuaLAcquisto["name"] + " ha diritto al 30% di sconto e spenderà " + carrello + " (spedizione gratuita)")
  }
  else {
    console.log(utenteCheEffettuaLAcquisto["name"] + " ha diritto al 30% di sconto e spenderà " + (carrello + shippingCost) + " (incluso 50 di spedizione)")
  }
}
else {
  carrello;
  if (carrello > 100) {
    console.log(utenteCheEffettuaLAcquisto["name"] + " spenderà " + carrello + " (spedizione gratuita)")
  }
  else {
    console.log(utenteCheEffettuaLAcquisto["name"] + " spenderà " + (carrello + shippingCost) + " (incluso 50 di spedizione)")
  }
}


/* console.log(" ")
console.log("Prova: carrello spesa di tutti i clienti")

for (i = 0; i < clienti.length; i++) {
  if (clienti[i].isAmbassador === true) {
    carrelloScontato
    if (carrelloScontato > 100) {
      console.log(clienti[i]["name"] + " ha diritto al 30% di sconto e spenderà " + carrelloScontato + " (spedizione gratuita)")
    }
    else {
      console.log(clienti[i]["name"] + " ha diritto al 30% di sconto e spenderà " + (carrelloScontato + shippingCost) + " (incluso 50 di spedizione)")
    }
  }
  else {
    carrello
    if (carrello > 100) {
      console.log(clienti[i]["name"] + " spenderà " + carrello + " (spedizione gratuita)")
    }
    else {
      console.log(clienti[i]["name"] + " spenderà " + (carrello + shippingCost) + " (incluso 50 di spedizione)")
    }
  }
}
 */


