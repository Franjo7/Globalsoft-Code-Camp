/* Napraviti kalkulator sa tri metode: read(), sum() i mul()
    read() kroz prompt sprema dvije vrijednosti i stavlja ih u objekt s imenima a i b
    sum() vraća zbroj spremljenih vrijednosti
    mul() množi spremljene vrijednosti i vraća rezultat
*/

/*

let calculator = {
    read() {
        this.a = parseInt(prompt('Unesite prvi broj:', 0));          
        this.b = parseInt(prompt('Unesite drugi broj:', 0));
    },
    sum() {
        return this.a + this.b;
    }, 
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());





// Kreirati objekt ljestve1 sa svojstvom korak i metodama up(), down() i showStep()

let ljestve1 = {
    korak: 0,
    up() {
        this.korak++;
    },
    down() {
        this.korak--;
    },
    showStep: function() {
        alert(this.korak);
    }
};

ljestve1.up();
ljestve1.up();
ljestve1.down();
ljestve1.showStep();         // 1
ljestve1.down();
ljestve1.showStep();         // 0

// Kreirati i urediti objekt ljestve2 tako da izgleda ulančano (bez da svaki put pišemo ime objekta.metoda)

let ljestve2 = {
    korak: 0,
    up() {
        this.korak++;
        return this;
    },
    down() {
        this.korak--;
        return this;
    },
    showStep: function() {
        alert(this.korak);
        return this;
    }
};

// Ulančavanje metoda
ljestve2.up().up().down().showStep().down().showStep();         // 1, 0




// Definirati konstruktorsku funkciju Calculator s tri metode: read(), sum() i mul()

function Calculator() {
    this.read = function() {
        this.a = parseInt(prompt('Unesite prvi broj:', 0));          
        this.b = parseInt(prompt('Unesite drugi broj:', 0));
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Zbroj: " + calculator.sum());
alert("Umnožak: " + calculator.mul());

*/




/* 
Kreirati konstruktorsku funkciju Accumulator(startingValue). Objekt koji bude stvoren
treba spremiti trenutnu vrijednost u svojstvo value. Metoda read() treba koristiti prompt kako bismo dobili 
novi broj i dodali ga u value. Value je zbroj od svih unesenih vrijednosti s početnom vrijednošću startingValue.
Potrebno je dva puta tražiti od korisnika novi broj i tek onda pokazati ukupni zbroj.
*/

/*

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += parseInt(prompt('Vrijednost koju ćemo dodati:', 0));
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);




// Primjeri za Map i Set

let voće = new Map();       
voće.set('jabuka', 5);  
voće.set('kruška', 3);
voće.set('banana', 2);
console.log(voće.has('kivi'));               // false
console.log(voće.get('kivi'));               // undefined
voće.set('kivi', 10);
console.log(voće);

voće.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

const letters = new Set(['a', 'b', 'c']);
console.log(letters);                       // Set { 'a', 'b', 'c' }    (dvostruke vrijednosti se ne ispisuju) 
console.log(letters.size);                  // 3

// Definirati novi set i ispisati ga u konzoli

let set = new Set([1, 2, 3, 2, 1]);
console.log(set);                           // Set { 1, 2, 3 } 

*/




/* 
Potrebno je napraviti novu mapu inventuraVoća s četiri definirana voća i njihovim vrijednostima.
Kreirati novi set popularnoVoće i dodati keys iz inventuraVoća gdje su vrijednosti od keys veće od 3.
Ispisati popularnoVoće u konzoli.
*/

/*

let inventuraVoća = new Map();
inventuraVoća.set('jabuka', 5);
inventuraVoća.set('kruška', 3);
inventuraVoća.set('banana', 2);
inventuraVoća.set('kivi', 10);

let popularnoVoće = new Set();

// Prvi način
for(let[voće, količina] of inventuraVoća) {          // for-of petlja za iteriranje kroz mapu (može se koristiti i forEach() metoda)
    if(količina > 3) {
        popularnoVoće.add(voće);
    }
}

// Drugi način
inventuraVoća.forEach((količina, voće) => {         // forEach() metoda za iteriranje kroz mapu
    if(količina > 3) {
        popularnoVoće.add(voće);
    }
});

console.log(inventuraVoća);                          // Map { 'jabuka' => 5, 'kruška' => 3, 'banana' => 2, 'kivi' => 10 }
console.log(popularnoVoće);                          // Set { 'jabuka', 'kivi' }
console.log(popularnoVoće.size);                     // 2




// Prebrojati koliko puta se pojavljuje neki element u nizu

function prebroji(array) {
    let map = new Map();
    array.forEach(element => {
        if(map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    });
    return map;
}

let array = [1, 2, 3, 4, 1, 2, 1, 5];
console.log(prebroji(array));           // Map { 1 => 3, 2 => 2, 3 => 1, 4 => 1, 5 => 1 }




// Pronaći jedinstvene vrijednosti u nizu, prvo za brojevne vrijednosti, a zatim za stringove.

let array = [1, 2, 3, 4, 1, 2, 1, 5];
let jedinstveneVrijednosti = new Set(array);
console.log(jedinstveneVrijednosti);           // Set { 1, 2, 3, 4, 5 }

let array2 = ['jabuka', 'kruška', 'banana', 'jabuka', 'kruška', 'kivi'];
let jedinstveneVrijednosti2 = new Set(array2);
console.log(jedinstveneVrijednosti2);          // Set { 'jabuka', 'kruška', 'banana', 'kivi' }




// Koristiti Map kako bismo spremili objekte i pristupili im preko jedinstvenih ključeva

let obj1 = {ime: 'Maja', godine: '30'};
let obj2 = {ime: 'David', godine: '25'};

let map = new Map();
map.set('maja', obj1);
map.set('david', obj2);

console.log(map.get('maja'));           // { ime: 'Maja', godine: '30' }
console.log(map.get('david'));          // { ime: 'David', godine: '25' }




// Preko Set-a definirati dva niza od nekih brojeva tako da ćemo ih spojiti u jedan niz, ali s jedinstvenim podacima (spread operator).
// Pronaći koje elemente imaju oba niza, a koje različite.

let niz1 = new Set([1, 2, 3, 4]);
let niz2 = new Set([3, 4, 5, 6]);

let spojeniNiz = [...niz1, ...niz2];       // spread operator
console.log(spojeniNiz);

let zajedničkiElementi = new Set([...niz1].filter(x => niz2.has(x)));
console.log(zajedničkiElementi);           // Set { 3, 4 }

let različitiElementi = new Set([...niz1].filter(x => !niz2.has(x)));
console.log(različitiElementi);            // Set { 1, 2 }




// Kreirati konstruktorsku funkciju Osoba koja će sadržavati ime, prezime i dob za neku osobu.
// Ispisati informacije za dvije osobe.

function Osoba(ime, prezime, dob) {
    this.ime = ime;
    this.prezime = prezime;
    this.dob = dob;
}

let osoba1 = new Osoba('Mate', 'Matić', 30);
let osoba2 = new Osoba('Ivan', 'Ivić', 25);

console.log(osoba1);                 // Osoba { ime: 'Mate', prezime: 'Matić', dob: 30 }
console.log(osoba2);                 // Osoba { ime: 'Ivan', prezime: 'Ivić', dob: 25 }

*/
