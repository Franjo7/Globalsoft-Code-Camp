// Deklaracija varijable test

/*
var test;
console.log(test); 




// Upit za unos godina

var godine = prompt("Koliko imate godina?");
console.log(godine >= 18 ? "Pivo" : "Sok");





// Koliko mjeseci u 2024. godini ima 28, 30, a koliko 31 dan?

let monthsWith28=0;
let monthsWith30=0;
let monthsWith31=0;

for (let month=1; month<=12; month++){
    let daysInMonth = new Date(2024, month, 0).getDate();

    switch(daysInMonth) {
        case 28:
            monthsWith28++;
            break;
        case 30:
            monthsWith30++;
            break;
        case 31:
            monthsWith31++;
            break;
        default:
            console.log("Unexpected number of days in month");
    }
}

console.log("Months with 28 days: " + monthsWith28);
console.log("Months with 30 days: " + monthsWith30);
console.log("Months with 31 days: " + monthsWith31);




// Kreirati funkciju koja će primiti dvodimenzionalni niz i kroz ugniježđene for petlje ispisati u konzoli sve elemente niza

let nizUnutarNiza = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function ispisiElemente(nizUnutarNiza) {
    for (let i=0; i<nizUnutarNiza.length; i++) {
        for (let j=0; j<nizUnutarNiza[i].length; j++) {
            console.log(nizUnutarNiza[i][j]);
        }
    }
}

ispisiElemente(nizUnutarNiza);





// Kreirati niz imena i ispisati četvrto ime u konzoli

let nizImena = ["Pero", "Mate", "Ivo", "Ana", "Iva"];
console.log(nizImena[3]);       // Ana





// Provjeriti postoji li Tokio u nizu gradova

let gradovi = ['Pariz', 'Berlin', 'New York', 'Tokio', 'Seul'];
if(gradovi.includes('Tokio')) {
    console.log('Tokio je na listi');
}




// Filtrirati niz i ispisati godine koje čine osobu punoljetnom

const godine = [15, 26, 10, 22, 35];

function provjeriPunoljetnost(godine) {
    return godine >= 18;
}

console.log("Sve godine: " + godine);
console.log("Punoljetne godine: " + godine.filter(provjeriPunoljetnost));





// Dohvatiti originialni niz i ispisati novi niz gdje je svaki broj iz originalnog niza pomnožen sa 10

let niz = [55, 40, 15, 6];
let niz2 = niz.map((x) => x * 10);
console.log("Početni niz: " + niz);
console.log("Konačni niz: " + niz2);




// Zamijeni sadržaj dvije varijable

let a = 7, b = 3;
console.log("A je: " + a + ", B je: " + b);
console.log("Zamjena vrijednosti");
[a, b] = [b, a];
console.log("A je: " + a + ", B je: " + b);





// Definirati funkciju koja će vratiti zbroj dva parametra, njihov prosjek i razliku
// Koristiti destrukturiranje za spremanje rezultata u pojedinačne varijable

function zbroj_prosjek_razlika(a, b) {
    return [
        a + b, 
        (a + b) / 2, 
        a - b
    ]
}

let rezultat = zbroj_prosjek_razlika(5, 3);
let [zbroj, prosjek, razlika] = rezultat;
console.log("Zbroj brojeva: " + zbroj);
console.log("Prosjek brojeva: " + prosjek);
console.log("Razlika brojeva: " + razlika);





// Definirati dva niza i ispisati ih kao spojene koristeći spread operator

let niz1 = [1, 2, 3, 4, 5];
let niz2 = [6, 7, 8, 9, 10];
console.log("Niz 1: " + niz1);
console.log("Niz 2: " + niz2);
let niz3 = [...niz1, ...niz2];
console.log("Spojeni niz: " + niz3);

*/