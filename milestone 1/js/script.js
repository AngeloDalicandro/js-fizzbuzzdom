// Imposto il for stampare da 1 a 100
let fizzBuzzDom;

for( i = 1; i <= 100; i++) {
// Seleziono i multipli di 5 e 3
    if( (i % 5) === 0) {
        fizzBuzzDom = 'buzz';
        console.log( fizzBuzzDom );
    } else if( (i % 3) === 0) {
        fizzBuzzDom = 'fizz';
        console.log( fizzBuzzDom );
    } else {
        fizzBuzzDom = i;
        console.log( fizzBuzzDom );
    }
    }
