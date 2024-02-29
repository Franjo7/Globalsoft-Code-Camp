/*

// Kreirati objekt i ispisati ga u konzoli kao smislenu rečenicu

let employee = {
    name: "Harry",
    age: 26,
    gender: "male"
};

console.log(`${employee.name} is ${employee.age} years old. He is a ${employee.gender}.`);




// Kljuc u objektu

let user = {
    name: "John",
    age: 30
};

alert("name" in user); // true

for (let key in user) {
    alert(key); // name, age
    alert(user[key]); // John, 30
}




// typeof operator

let a = "Peter";
console.log(typeof a, typeof "proljeće", typeof 4.15, typeof true, typeof false, typeof z); // string string number boolean boolean undefined




// Napisati funkciju koja će vratiti true ako objekt nema svojstva, u suprotnom vraća false

let object1 = {
    name: "John",
    age: 30
};

let object2 = {};

function isEmptyObject(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

console.log(isEmptyObject(object1));      // false
console.log(isEmptyObject(object2));      // true




// Zbrojiti sve plaće iz objekta i spremiti ih u varijablu zbroj

let plaće = {
    "John": 100,
    "Ann": 160,
    "Pete": 130
};

let zbroj = 0;
for (let key in plaće) {
    zbroj += plaće[key];
}

console.log(`Zbroj plaća ${plaće.John}, ${plaće.Ann} i ${plaće.Pete} iznosi ${zbroj}.`);




// Napisati funkciju koja množi sve brojčane vrijednosti sa 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function pomnoziBrojeve (objekt) {
    for (let key in objekt) {
        if (typeof objekt[key] === "number") {
            objekt[key] *= 2;
        }
    }
    return objekt;
}

console.log(menu);
console.log(pomnoziBrojeve(menu));




// Map funkcija

let john = { name: "John Doe"},
    lily = { name: "Lily Bush"},
    peter = { name: "Peter Drucker"};

let userRole = new Map(); 
console.log(typeof userRole); // object

// userRole objektu dodijeliti odgovarajuće uloge
// John je admin, Lily je editor, Peter je subscriber
// Inicijalizirati novu Map i ispisati je u konzoli

userRole.set(john, "admin")
        .set(lily, "editor")
        .set(peter, "subscriber");

let userRoles = new Map([
    [john, "admin"],
    [lily, "editor"],
    [peter, "subscriber"]
]);

console.log(userRoles);

// Dohvatiti ulogu korisnika John i ispisati je u konzoli
console.log(userRoles.get(john));   // admin

// Dohvatiti nedefiniranu ulogu korisnika i ispisati je u konzoli
let foo = { name: "Foo" };
console.log(userRoles.get(foo));    // undefined

// Provjeriti postojanje ključa korištenjem has() metode
console.log(userRoles.has(foo));    // false
console.log(userRoles.has(lily));   // true

// Dohvatiti veličinu mape
console.log(userRoles.size);        // 3

// Za prolazak kroz mapu koristimo tri metode: keys(), values() i entries()

// Keys() metoda
for (let user of userRoles.keys()) {
    console.log(user.name);
}

// Values() metoda
for (let role of userRoles.values()) {
    console.log(role);
}

// Entries() metoda
for (let entry of userRoles.entries()) {
    console.log(`${entry[0].name}: ${entry[1]}`);
}

// Izbrisati Johna iz mape
userRoles.delete(john);
console.log(userRoles);

// Izbrisati sve objekte iz mape
userRoles.clear();
console.log(userRoles.size);        // 0




// Isprobati metode nad vlastitim objektom

const osoba = new Map();

osoba.set("ime", "Franjo");
osoba.set("prezime", "Lovrić");
osoba.set("posao", "student");

console.log(osoba.has("ime"));      // true
console.log(osoba.size);            // 3

osoba.delete("posao");
console.log(osoba.has("posao"));    // false
console.log(osoba.size);            // 2

var rezultat = osoba.get("prezime");
console.log(rezultat);              // Lovrić

console.log(osoba.keys());          // MapIterator { 'ime', 'prezime' }
console.log(osoba.values());        // MapIterator { 'Franjo', 'Lovrić' }
console.log(osoba.entries());       // MapIterator { [ 'ime', 'Franjo' ], [ 'prezime', 'Lovrić' ] }

osoba.clear();
console.log(osoba.size);            // 0





// ZADACI SA ISPITA

// 1. Zadatak
// Definirati funkciju koja će primiti niz, veličinu i jedan cijeli broj.
// Funkcija vraća niz koji se sastoji od ukupnog broja cijelih brojeva koji su 
// manji, jednaki ili veći od vrijednosti koja je proslijeđena kao cijeli broj.

function filtrirajNiz(niz, veličina, broj) {
    let brojManjih = 0, brojJednakih = 0, brojVećih = 0;
    for (let i = 0; i < veličina; i++) {
        if (niz[i] < broj) {
            brojManjih++;
        }
        else if (niz[i] == broj) {
            brojJednakih++;
        }
        else {
            brojVećih++;
        }
    }
    return [brojManjih, brojJednakih, brojVećih];
}

console.log(filtrirajNiz([2, 4, 6, 8, 10], 5, 6));       // [2, 1, 2]




// 2. Zadatak
// Kreirati malu formu za prijavu za posao. Forma se sastoji od pet polja - ime, godine,
// obrazovanje, adresa i očekivana plaća. Polja definirati u HTML-u, a klikom na gumb se 
// prikazuju korisnikove informacije iz forme u div-u.

function prikazi() {
    let ime = document.getElementById("ime").value;
    let godine = document.getElementById("godine").value;
    let obrazovanje = document.getElementById("obrazovanje").value;
    let adresa = document.getElementById("adresa").value;
    let plaća = document.getElementById("očekivana_plaća").value;

    const prikaz = document.getElementById("prikaz");
    prikaz.innerHTML = `<p>Ime: ${ime}<br>Godine: ${godine}<br>Obrazovanje: ${obrazovanje}<br>Adresa: ${adresa}<br>Očekivana plaća: ${plaća}`;
}




// 3. Zadatak
// Korisnik unosi dva broja kroz input, klikom na gumb kroz alert se prikazuje koji je veći od njih.

function prikaziVećiBroj() {
    let broj1 = document.getElementById("broj1").value;
    let broj2 = document.getElementById("broj2").value;

    if (broj1 > broj2) {
        alert(`Broj ${broj1} je veći od broja ${broj2}.`);
    }
    else if (broj1 < broj2) {
        alert(`Broj ${broj2} je veći od broja ${broj1}.`);
    }
    else {
        alert(`Brojevi ${broj1} i ${broj2} su jednaki.`);
    }
}




// 4. Zadatak
// Kreirati funkciju koja će za argument uzeti niz cijelih brojeva i vratiti true ukoliko tri uzastopna broja daju zbroj 7

function zbroj(niz) {
    if (niz.length < 3) {
        return "Niz mora imati barem tri elementa.";
    }
    for (let i = 2; i < niz.length; i++) {
        if (niz[i] + niz[i - 1] + niz[i - 2] === 7) {
            return true;
        }
    }
    return false;
}

niz = [1, 2];
console.log(zbroj(niz));    // Niz mora imati barem tri elementa.
niz1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(zbroj(niz1));    // false
niz2 = [0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(zbroj(niz2));    // true

*/