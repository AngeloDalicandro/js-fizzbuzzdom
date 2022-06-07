// Imposto il for stampare da 1 a 100
let fizzBuzzDom;

for( i = 1; i <= 100; i++) {
    // Creo le li in js
    let list = document.getElementById('list');
    let listItem = document.createElement('li');
    listItem.classList.add("box");

    // Seleziono i multipli di 5 e 3 e stampo nelle li
    if( (i % 5) === 0) {
        fizzBuzzDom = 'buzz';
        listItem.classList.add('buzz')
    } else if( (i % 3) === 0) {
        fizzBuzzDom = 'fizz';
        listItem.classList.add('fizz')
    } else {
        fizzBuzzDom = i;
    }

    listItem.append( ` ${fizzBuzzDom}  ` )

    console.log( listItem )
    list.append( listItem )
    }
