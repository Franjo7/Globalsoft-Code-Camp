// Zaostali zadatak sa prošlih vježbi
// Kreirati klasu Zaposleni sa svojstvima ime i plaća. Klasa ima metodu unaprjeđenje() koja će povećati plaću za 1000 i ima 
// metodu opis() koja vraća rečenicu "Ime + zarađuje plaću."
// Klasa Manager nasljeđuje klasu Zaposleni i ima još i svoje svojstvo odjel.
// Ima i metodu unaprjeđenje() koja nasljeđuje unaprjeđenje iz bazne klase i plaću povećava za 500.
// Ima i metodu opis() koju isto nasljeđuje iz bazne klase i vraća rečenicu iz opis metode() + i vodi odjel.

/*
class Zaposleni {
    constructor(ime, placa) {
        this.ime = ime;
        this.placa = placa;
    }

    unapredjenje() {
        this.placa += 1000;
    }

    opis() {
        return `${this.ime} zarađuje ${this.placa}.`;
    }
}

class Manager extends Zaposleni {
    constructor(ime, placa, odjel) {
        super(ime, placa);
        this.odjel = odjel;
    }

    unapredjenje() {
        this.placa += 500;
    }

    opis() {
        return super.opis() + ` I vodi odjel ${this.odjel}.`;
    }
}

let zaposleni1 = new Zaposleni('Franjo', 5000); 
console.log(zaposleni1.opis());                          // Franjo zarađuje 5000.
zaposleni1.unapredjenje();
console.log(zaposleni1.opis());                          // Franjo zarađuje 6000.

let manager1 = new Manager('Ivan', 6000, 'Marketing');      
console.log(manager1.opis());                           // Ivan zarađuje 6000. I vodi odjel Marketing.
manager1.unapredjenje();
console.log(manager1.opis());                           // Ivan zarađuje 6500. I vodi odjel Marketing.
*/





// JSON - JavaScript Object Notation
// Dvije metode: JSON.stringify() i JSON.parse()

// Primjer objekta
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);
console.log(typeof json);                   // string
console.log(json);                          // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}





// Primjer niza
const languages = ["HTML", "CSS", "JavaScript"];
let result = JSON.stringify(languages);
console.log(result);                        // ["HTML","CSS","JavaScript"]  





// Razni tipovi podataka
console.log(JSON.stringify(1));              // 1
console.log(JSON.stringify('test'));         // "test"
console.log(JSON.stringify(true));           // true
console.log(JSON.stringify([1, 2, 3]));      // [1,2,3]





// Primjer ugniježđenog objekta
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log(JSON.stringify(meetup));                // {"title":"Conference","room":{"number":23,"participants":["john","ann"]}}





// Vraćanje (pretvaranje) JSON objekta u JavaScript objekt
let user1 = '{ "name": "John", "age": 30 }';
let user2 = JSON.parse(user1);
console.log(user2.name + "\n" + user2.age);                 // John 30
console.log(`${user2.name} ima ${user2.age} godina.`);      // John ima 30 godina.





// Ugniježđeni JSON podaci (koristiti backticks)
const employees = `{
    "employees": {
        "name": "John Doe",
        "age": 30,
        "languages": ["HTML", "CSS", "JavaScript"],
        "experience": {
            "CompanyName1": "2 years", "CompanyName2": "3 years"
        }
    }
}`;

let result1 = JSON.parse(employees);                                 // pretvaranje JSON objekta u JavaScript objekt
console.log(result1["employees"]["name"] + "\n");                    // John Doe
console.log(result1.employees.age + "\n");                           // 30
console.log(result1.employees.languages[2] + "\n");                  // JavaScript
console.log(result1.employees.experience.CompanyName2);              // 3 years





// Rekurzija

// Bez rekurzije
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {           // 0 < 3, 1 < 3, 2 < 3
        result *= x;                        // 1 * 2 = 2, 2 * 2 = 4, 4 * 2 = 8
    }
    return result;
}
console.log(pow(2, 3));                    // 8





// Sa rekurzijom
function pow1(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow1(x, n - 1);         // 2 * pow1(2, 2), 2 * pow1(2, 1), 2 * 2
    }
}
console.log(pow1(2, 3));                   // 8





// Zbrojiti brojeve od 1 do n, bez rekurzije

function zbrojiBezRekurzije(n) {
    let zbroj = 0;
    for (let i = 1; i <= n; i++) {
        zbroj += i;
    }
    return zbroj;
}
console.log(zbrojiBezRekurzije(5));                     // 15





// Zbrojiti brojeve od 1 do n, sa rekurzijom

function zbrojiSaRekurzijom(n) {
    if (n <= 1) {                                      
        return 1;
    } else {
        return n + zbrojiSaRekurzijom(n - 1);
    }
}
console.log(zbrojiSaRekurzijom(5));                     // 15





// Izračunati faktorijel nekog prirodnog broja

function faktorijel(n) {
    return (n != 1) ? n * faktorijel(n - 1) : 1;        
}
console.log(faktorijel(5));                             // 120





// Callback funkcija - funkcija koja se prosljeđuje kao argument nekoj drugoj funkciji za kasnije izvršavanje.

// Definirati funkciju filter(numbers, fn) koja će primiti neki niz(numbers) i funkciju(fn).
// Funkcija koja če biti proslijeđena kao argument će se zvati isOdd i vraćat će neparan broj koji će biti spremljen u niz
// koji će se zapisati unutar funkcije filter i ta funkcija će vratiti taj niz.
// Napisati i funkciju isEven() koja će biti proslijeđena kao argument funkciji filter.

function isOdd(number) {
    return number % 2 !== 0;                         // ako je broj neparan
}

function isEven(number) {
    return number % 2 === 0;                         // ako je broj paran
}

function filter(numbers, fn) {
    let result = [];
    for (let number of numbers) {
        if (fn(number)) {
            result.push(number);
        }
    }
    return result;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));                    // [1, 7, 3, 5]
console.log(filter(numbers, isEven));                   // [2, 4, 6]





// Dva tipa callbacks: sinkroni i asinkroni
// Sinkroni callback - izvrši se tijekom izvršavanja high-order funkcije
// Asinkroni callback - izvrši se nakon izvršavanja high-order funkcije

function firstFunction() {
    secondFunction();                                   // poziv druge funkcije
    console.log('Pozdrav iz prve funkcije.');
}

function secondFunction() {
    thirdFunction();                                    // poziv treće funkcije
    console.log('Pozdrav iz druge funkcije.');
}

function thirdFunction() {
    console.log('Pozdrav iz treće funkcije.');
}

firstFunction();                                        // Pozdrav iz treće funkcije. Pozdrav iz druge funkcije. Pozdrav iz prve funkcije.





/**
 * Množi dva broja i poziva callback funkciju s rezultatom.
 *
 * @param {number} a - Prvi broj za množenje.
 * @param {number} b - Drugi broj za množenje.
 * @param {function} callback - Callback funkcija koja će biti pozvana s rezultatom.
 */

function multiply(a, b, callback) {
    let result = a * b;     
    callback(result);
}

function callback (value) {
    console.log(value)
}

multiply(5, 10, callback);                              // 50





// Napisati funkciju koja prima niz proizvoljnih brojeva i callback funkciju, računa zbroj brojeva u nizu i poziva
// callback funkciju koja vraća je li zbroj paran broj.

function sumOfNumbers(numbers, callback) {
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    callback(sum);
}

function isEvenNumber(sum) {
    if (sum % 2 === 0) {
        console.log(`Zbroj ${sum} je paran broj.`);
    } else {
        console.log(`Zbroj ${sum} nije paran broj.`);
    }
}

let niz = [1, 2, 3, 4, 5];
sumOfNumbers(niz, isEvenNumber);                        // Zbroj nije paran broj.
let niz2 = [2, 4, 6, 8, 10];
sumOfNumbers(niz2, isEvenNumber);                       // Zbroj je paran broj.




// Preuzeti sliku s udaljenog servera i obraditi ju nakon što se preuzimanje završi.
// Preuzimanje slike ovisit će o brzini mreže i veličini slike.
// Koristiti setTimeout() funkciju za simulaciju preuzimanja slike.

function downloadImage(url, callback) {
    setTimeout(() => {
        console.log(`Preuzimanje ${url}`);
        callback(url);
    }, 3000);
}

function processImage(image) {
    console.log(`Obrada ${image}`);
}

let url = 'https://www.javascripttutorial.net/pic.jpg';
downloadImage(url, processImage);                          // Prvo se ispiše Preuzimanje, a nakon toga Obrada.




                                                        

// setTimeout(), setInterval()

// Napisati funkciju printNumbers(a, b) koja ispisuje broj svake sekunde počevši od a i završavajući s b.

function printNumbers(a, b) {
    let current = a;
    let timerId = setInterval(function() {               // postavljanje intervala
        console.log(current);
        if (current === b) {                            // ako je trenutni broj jednak b
            clearInterval(timerId);                     // prekid intervala
        }
        current++;                                      // povećanje trenutnog broja
    }, 1000);                   
}

printNumbers(5, 10);                                    // 5, 6, 7, 8, 9, 10





// Napisati funkciju countNumbersFromTo(start, end) koja će ispisivati brojeve od start do end svake sekunde.

function countNumbersFromTo(start, end) {
    let current = start;
    function display() {
        console.log(current);
        if (current < end) {
            current++;
            setTimeout(display, 1000);
        }
    }
    display();
}

countNumbersFromTo(5, 10);                              // 5, 6, 7, 8, 9, 10





// Početak i kraj se ispisuju odmah, poruku ispisati nakon 2 sekunde.

console.log('Početak');

setTimeout(() => {
    console.log('Uspješno završeno.');
}, 2000);

console.log('Kraj');





// Promises
// .then() - izvršava se kada se izvrši resolve
// .catch() - izvršava se kada se izvrši reject

function multiply(a, b) {
    return new Promise(function(resolve, reject) {
        let result = a * b;
        if (result >= 0) {
            resolve(result);
        } else {
            reject(new Error('Rezultat je manji od 0.'));
        }
    });
}

multiply(5, 10)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
});





// Napisati funkciju koja prima niz proizvoljnih brojeva i callback funkciju, računa zbroj brojeva u nizu i poziva
// callback funkciju koja vraća je li zbroj paran broj.
// Riješiti zadatak koristeći Promise.

function sumOfNumbers(numbers) {
    return new Promise(function(resolve, reject) {
        let sum = 0;
        numbers.forEach(element => {
            sum += element;
        });
        if (sum % 2 === 0) {
            resolve(`Zbroj ${sum} je paran broj.`);
        } else {
            reject(`Zbroj ${sum} nije paran broj.`);
        }
    });
}

sumOfNumbers([1, 2, 3, 4, 5])
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

sumOfNumbers([2, 4, 6, 8, 10])
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });





// Ispišite svoje ime nakon 2 sekunde.
// Koristiti setTimeout() i Promise.

function sayMyName(name) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(`Moje ime je ${name}.`);
        }, 2000);
    });
}

sayMyName('Franjo')
    .then(function(result) {
        console.log(result);
    });