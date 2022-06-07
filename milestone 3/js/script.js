// Imposto il for stampare da 1 a 100
let fizzBuzzDom;

for( i = 1; i <= 100; i++) {
    // Creo le li in js
    let list = document.querySelector('ul');

    // Seleziono i multipli di 5 e 3 e stampo nelle li
    if( (i % 5) === 0) {
        fizzBuzzDom = 'buzz';
    } else if( (i % 3) === 0) {
        fizzBuzzDom = 'fizz';
    } else {
        fizzBuzzDom = i;
    }

    const listItem = `<li> ${fizzBuzzDom} </li> `
    list.innerHTML += listItem;

    }
