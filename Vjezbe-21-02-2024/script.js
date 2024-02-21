/*
Kreirati konstruktorsku funkciju Osoba koja će sadržavati ime, prezime i dob za neku osobu.
Ispisati informacije za dvije osobe.
Dodati metodu koja će ispisati rečenicu: "Pozdrav, zovem se Franjo i imam 24 godine."

function Osoba(ime, prezime, dob) {
    this.ime = ime;
    this.prezime = prezime;
    this.dob = dob;
    this.pozdrav = function() {
        console.log(`Pozdrav, zovem se ${this.ime} i imam ${this.dob} godine.`);
    }
}

let osoba1 = new Osoba('Mate', 'Matić', 30);
let osoba2 = new Osoba('Ivan', 'Ivić', 25);

console.log(osoba1);                  // Osoba { ime: 'Mate', prezime: 'Matić', dob: 30 }
console.log(osoba2);                  // Osoba { ime: 'Ivan', prezime: 'Ivić', dob: 25 }

let osoba3 = new Osoba('Franjo', 'Lovrić', 24);
osoba3.pozdrav();                     // Pozdrav, zovem se Franjo i imam 24 godine.




// Potrebno je napisati funkciju koja će zbrojiti plaće iz objekta plaće i vratiti taj zbroj. 
// Koristiti Object.values() i for...of petlju.

function zbrojPlaća(objekt) {
    let zbroj = 0;
    for (let plaća of Object.values(objekt)) {
        zbroj += plaća;
    }
    return zbroj;
}

let plaće = {
    direktor: 5000,
    tajnica: 3000,
    radnik: 2500
};

console.log(zbrojPlaća(plaće));        // 10500




// Napisati funkciju koja će vratiti broj svojstava unutar objekata.

function brojSvojstava(objekt) {
    return Object.keys(objekt).length;
}

let osoba = {
    ime: 'Mate',
    prezime: 'Matić',
};

let plaće = {
    direktor: 5000,
    tajnica: 3000,
    radnik: 2500
};

console.log(brojSvojstava(osoba));     // 2
console.log(brojSvojstava(plaće));     // 3




// KLASE
// Kreirati klasu Olovka koja će imati svojstva ime, boja i cijena. 
// Klasa mora imati i metodu koja će ispisati ime i cijenu olovke.

class Olovka {
    constructor(ime, boja, cijena) {
        this.ime = ime;
        this.boja = boja;
        this.cijena = cijena;
    }
    ispisiCijenu() {
        console.log(`Olovka ${this.ime} košta ${this.cijena} kn.`);
    }
}

let olovka1 = new Olovka('Parker', 'plava', 20);
olovka1.ispisiCijenu();                             // Olovka Parker košta 20 kn.




// Definirati objekt korisnik koji će imati ime i prezime za svojstva.
// Definirati i getter koji će vratiti vrijednost za ime i prezime iz objekta.
// Dodati i setter tako da omogućimo mijenjanje vrijednosti za svojstva objekta.

let korisnik = {
    ime: 'Mate',
    prezime: 'Matić',

    get punoIme() {
        return `${this.ime} ${this.prezime}`;
    },

    set punoIme(value) {
        [this.ime, this.prezime] = value.split(' ');
    }
};

console.log(korisnik.punoIme);                      // Mate Matić
korisnik.punoIme = 'Ivan Ivić';                    
console.log(korisnik.punoIme);                      // Ivan Ivić
console.log(korisnik.ime);                          // Ivan
console.log(korisnik.prezime);                      // Ivić

// Ograničiti unos imena korisnika, tj. ne smije biti manje od 4 znaka.
// Kroz getter i setter možemo dobiti više kontrole nad operacijama u stvarnim objektima.

let korisnik2 = {
    get ime() {
        return this._ime;
    },

    set ime(value) {
        if (value.length < 4) {
            console.log('Ime mora imati najmanje 4 znaka.');
            return;
        }
        this._ime = value;
    }
};

korisnik2.ime = 'Ivo';                               // Ime mora imati najmanje 4 znaka.
korisnik2.ime = 'Ivan';
console.log(korisnik2.ime);                          // Ivan




// Dodatni primjer za getter i setter

let meeting = {
    attendees : [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },

    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('Mate').add('Ivan');
console.log(`The latest attendee is ${meeting.latest}.`);                        // The latest attendee is Ivan.




// Kreirati klasu Osoba sa svojstvima ime i godine. 
// Kreirati getter za godine koji vraća godine osobe, a setter koji postavlja godine osobe ukoliko je broj pozitivan.

class Osoba {
    constructor(ime, godine) {
        this.ime = ime;
        this._godine = godine;          // _godine je privatno svojstvo
    }

    get godine() {
        return this._godine;
    }

    set godine(value) {
        if (value > 0) {
            this._godine = value;
        }
        else {
            console.log('Godine moraju biti pozitivan broj.');
        }
    }
}

let osoba1 = new Osoba('Mate', 30);
console.log(osoba1.godine);                      // 30
osoba1.godine = -35;                             // Godine moraju biti pozitivan broj.
console.log(osoba1.godine);                      // 30
osoba1.godine = 35;
console.log(osoba1.godine);                      // 35




// Kreirati klasu BankovniRačun sa svojstvom stanje. Postaviti setter koji će spriječiti postavljanje negativnog stanja.

class BankovniRačun {
    constructor(stanje) {
        this._stanje = stanje;
    }

    get stanje() {
        return this._stanje;
    }

    set stanje(value) {
        if (value >= 0) {
            this._stanje = value;
        }
        else {
            console.log('Stanje ne može biti negativno.');
        }
    }
}

let račun1 = new BankovniRačun(1000);
console.log(račun1.stanje);                      // 1000
račun1.stanje = -500;                            // Stanje ne može biti negativno.
console.log(račun1.stanje);                      // 1000
račun1.stanje = 1500;
console.log(račun1.stanje);                      // 1500




// Potrebno je definirati klasu Automobil sa svojstvima marka, model i godina proizvodnje.
// Definirati getter koji će vratiti godinu koja označava starost automobila.

class Automobil {
    constructor(marka, model, godina) {
        this.marka = marka;
        this.model = model;
        this.godina = godina;
    }

    get starost() {
        return new Date().getFullYear() - this.godina;
    }
}

let auto1 = new Automobil('Audi', 'A6', 2015);
console.log(auto1.godina);                           // 2015
console.log(auto1.starost);                          // 9   




// Potrebno je kreirati klasu Proizvod koja će imati svojstva ime, cijena i popust.
// Getter treba vratiti kolika će biti cijena proizvoda nakon popusta.
// Prikazati cijenu s popustom preko metode pokažiCijenu().

class Proizvod {
    constructor(ime, cijena, popust) {
        this.ime = ime;
        this.cijena = cijena;
        this.popust = popust;
    }

    get cijenaSaPopustom() {
        return this.cijena - (this.cijena * this.popust / 100);
    }

    pokažiCijenu() {
        console.log(`Cijena proizvoda ${this.ime} s popustom ${this.popust}% iznosi ${this.cijenaSaPopustom} kn.`);
    }
}

let proizvod1 = new Proizvod('Laptop', 5000, 10);
console.log(proizvod1.ime);                           // Laptop
console.log(proizvod1.cijena);                        // 5000
console.log(proizvod1.cijenaSaPopustom);              // 4500
proizvod1.pokažiCijenu();                             // Cijena proizvoda Laptop s popustom iznosi 4500 kn.




// NASLJEĐIVANJE

class Osoba {
    constructor() {
        console.log('Osoba konstruktor');
    }
}

class Student extends Osoba {
    constructor() {
        super();                
        console.log('Student konstruktor');
    }
}

let student1 = new Student();                // Osoba konstruktor, Student konstruktor




// Pristup svojstvu iz bazne klase
// Kreirati klasu proizvoljnog imena koja će imati svojstvo ime.
// Neka druga klasa naslijedi to svojstvo i u konzoli ispiše ime koje bude proslijeđeno + je programer!

class Osoba {
    constructor(ime) {
        this.ime = ime;
    }
}

class Programer extends Osoba {
    constructor(ime) {
        super(ime);
        console.log(`${this.ime} je programer!`);
    }
}

let osoba1 = new Programer('Mate');                 // Mate je programer!




// Pristup metodi iz bazne klase
// Kreirati klasu koja će imati svojstvo ime i u konzoli ispisati "Moje ime je definirano u baznoj klasi."
// Klasa ima i metodu objaviIme() koja će ispisati "Ja sam + ime."
// Neka druga klasa naslijedi baznu. Imat će i svojstvo programskiJezik.
// Ima i svoju metodu objaviJezik() koja će ispisati "+ ime + koristi + programskiJezik."
// Metodama pristupamo preko super.imeMetode().

class Osoba {
    constructor(ime) {
        this.ime = ime;
        console.log('Moje ime je definirano u baznoj klasi.');
    }

    objaviIme() {
        console.log(`Ja sam ${this.ime}.`);
    }
}

class Programer extends Osoba {
    constructor(ime, programskiJezik) {
        super(ime);
        this.programskiJezik = programskiJezik;
    }

    objaviJezik() {
        super.objaviIme();
        console.log(`${this.ime} koristi ${this.programskiJezik}.`);
    }
}

let programer1 = new Programer('Mate', 'JavaScript');         // Moje ime je definirano u baznoj klasi.
programer1.objaviJezik();                                     // Ja sam Mate. Mate koristi JavaScript.




// Definirati klasu Životinja koja će imati svojstva ime i metodu speak() koja u konzoli ispisuje ime životinje + pravi buku.
// Kreirati klasu Pas koja će naslijediti klasu Životinja. Ona ima metodu speak() koja će u konzoli ispisati ime psa + laje.

class Životinja {
    constructor(ime) {
        this.ime = ime;
    }

    speak() {
        console.log(`${this.ime} pravi buku.`);
    }
}

class Pas extends Životinja {
    speak() {
        console.log(`${this.ime} laje.`);
    }
}

let životinja1 = new Životinja('Slon');
životinja1.speak();                                 // Slon pravi buku.
let pas1 = new Pas('Rex');
pas1.speak();                                       // Rex laje.




// Kreirati klasu Superjunak koja će imati svojstvo zdravlje = 100.
// Metoda get objaviStanje() će u konzoli ispisati "Zdravlje je + vrijednostZdravlja."
// Metoda set primljeniUdarac() provjerava je li zdravlje - udarac > 0. Ako jest, onda smanjiti zdravlje za udarac 
// koji je proslijeđen metodi set i zatim objaviti stanje, inače u konzoli ispisati "Superjunak je mrtav."
// Klasa ima još jednu metodu set ozdravljenje() kojoj će biti proslijeđena pomoć.  
// Ukoliko je zdravlje + pomoć > 100, zdravlje će biti jednako 100 i opet objaviti stanje, inače,
// povećati zdravlje za vrijednost pomoći i opet objaviti stanje.

class Superjunak {
    constructor() {
        this._zdravlje = 100;
    }

    get objaviStanje() {
        console.log(`Zdravlje je ${this._zdravlje}.`);
    }

    set primljeniUdarac(udarac) {
        if (this._zdravlje - udarac > 0) {
            this._zdravlje -= udarac;
            this.objaviStanje;
        }
        else {
            console.log('Superjunak je mrtav.');
        }
    }

    set ozdravljenje(pomoć) {
        if (this._zdravlje + pomoć > 100) {
            this._zdravlje = 100;
            this.objaviStanje;
        }
        else {
            this._zdravlje += pomoć;
            this.objaviStanje;
        }
    }
}

let superjunak1 = new Superjunak();
superjunak1.objaviStanje;                           // Zdravlje je 100.
superjunak1.primljeniUdarac = 50;                   // Zdravlje je 50.
superjunak1.ozdravljenje = 60;                      // Zdravlje je 100.
superjunak1.primljeniUdarac = 150;                  // Superjunak je mrtav.
superjunak1.objaviStanje;                           // Zdravlje je 100.
superjunak1.primljeniUdarac = 70;                   // Zdravlje je 30.
superjunak1.ozdravljenje = 40;                      // Zdravlje je 70.
superjunak1.primljeniUdarac = 70;                   // Superjunak je mrtav.




// Potrebno je kreirati klasu Oblik koja će imati svojstvo boja. Klasa ima i metodu
// dohvatiBoju() koja vraća boju. Ima i metodu površina() koja će vratiti "Ova metoda se mora implementirati."
// Klasa Krug nasljeđuje Oblik i još ima svojstvo radijus i metodu površina() koja će vratiti površinu kruga.
// Klasa Pravokutnik nasljeđuje Oblik i još ima svojstva širina i visina te metodu površina() koja će vratiti površinu pravokutnika.
// Kreirati objekt krug i izračunati površinu kruga i ispisati boju. Isto uraditi i za pravokutnik.
// Kreirati i neki objekt iz bazne klase i izračunati površinu i dohvatiti boju.

class Oblik {
    constructor(boja) {
        this.boja = boja;
    }

    dohvatiBoju() {
        return this.boja;
    }

    površina() {
        return 'Ova metoda se mora implementirati.';
    }
}

class Krug extends Oblik {
    constructor(boja, radijus) {
        super(boja);
        this.radijus = radijus;
    }

    površina() {
        return Math.PI * this.radijus ** 2;         // Math.PI * this.radijus * this.radijus
    }
}

class Pravokutnik extends Oblik {
    constructor(boja, širina, visina) {
        super(boja);
        this.širina = širina;
        this.visina = visina;
    }

    površina() {
        return this.širina * this.visina;
    }
}

let krug = new Krug('crvena', 5);
console.log(krug.površina());                       // 78.53981633974483
console.log(krug.dohvatiBoju());                    // crvena

let pravokutnik = new Pravokutnik('plava', 5, 10);
console.log(pravokutnik.površina());                // 50
console.log(pravokutnik.dohvatiBoju());             // plava

let oblik = new Oblik('zelena');
console.log(oblik.površina());                      // Ova metoda se mora implementirati.
console.log(oblik.dohvatiBoju());                   // zelena

*/