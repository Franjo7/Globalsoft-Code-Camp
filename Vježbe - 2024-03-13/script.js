/*

// Napisati funkciju izracunajPovrsinu() koja za argument prima objekt koji
// predstavlja neki pravokutnik. Objekt treba imati dva svojstva, dužinu i širinu.
// Funkcija prvo provjerava postoje li ta dva svojstva u proslijeđenom objektu.
// Ako ne postoje, funkcija vraća površinu (dužina * širina). Provjeru uraditi za dva objekta:

function izracunajPovrsinu(objekt) {
    if (objekt.duzina && objekt.sirina) {
        return objekt.duzina * objekt.sirina;
    } 
    else {
        return "Neispravan unos!";
    }
}

const pravokutnik1 = { duzina: 5, sirina: 3 };
const pravokutnik2 = { duzina: 7 };

console.log(izracunajPovrsinu(pravokutnik1));       // 15
console.log(izracunajPovrsinu(pravokutnik2));       // Neispravan unos!

*/





/*

// Kreirati niz brojeva. Napisati funkciju koja uklanja posljednji element iz niza, 
// dodaje novi element s vrijednošću 10 na početak niza i ispisuje izmijenjeni niz u konzoli.

const nizBrojeva = [1, 2, 3, 4, 5];

function izmijeniNiz(niz) {
    niz.pop();                  // uklanja posljednji element iz niza
    niz.unshift(10);            // dodaje novi element s vrijednošću 10 na početak niza
    console.log(niz);
}

console.log(nizBrojeva);        // [1, 2, 3, 4, 5]
izmijeniNiz(nizBrojeva);        // [10, 1, 2, 3, 4]

*/





/*

// Kreirati objekt koji predstavlja nekog učenika. Funkcija će dohvatiti taj objekt i u 
// konzoli ispisati rečenicu "Darko ima 17 godina i vrlo dobar je učenik".

const ucenik = {
    ime: "Darko",
    godine: 17,
    uspjeh: "vrlo dobar"
};

function ispisiUcenika(objekt) {
    console.log(`${objekt.ime} ima ${objekt.godine} godina i ${objekt.uspjeh} je učenik.`);
}

ispisiUcenika(ucenik);          // Darko ima 17 godina i vrlo dobar je učenik.

*/





/*

// Unutar HTML koda ubaciti jednu sliku. Na slici su sljedeće promjene:
// - svaki put kada se klikne na sliku, širina slike se povećava za 20px
// - kada širina dosegne 300 px, zaustavlja se povećanje širine

document.querySelector("img").addEventListener("click", function() {
    if (this.width < 300) {
        this.width += 20;
    }
});

*/





/*

// Kreirati gumb i paragraf. Svaki put kada korisnik klikne na gumb dodaje se nova stavka
// unutar uređene liste koja ima ID "dynamicList". Svaka nova stavka popisa treba sadržavati
// redni broj (počevši od 1) dodan osnovnom tekstu, poput "Stavka 1", "Stavka 2" itd.-->

document.querySelector("button").addEventListener("click", function() {
    const lista = document.querySelector("#dynamicList");
    const stavka = document.createElement("li");
    stavka.textContent = `Stavka ${lista.children.length + 1}`;
    lista.appendChild(stavka);
});

*/





/*

// Pritiskom na gumb generira se lozinka. Funkcija generira nasumično lozinku
// određene duljine i prikazuje ju na stranici. Lozinka neka bude dugačka osam znakova,
// a znakovi neka budu proizvoljni.

document.querySelector("button").addEventListener("click", function() {
    const lozinka = document.querySelector("#password");
    let novaLozinka = "";
    const znakovi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 8; i++) {
        novaLozinka += znakovi.charAt(Math.floor(Math.random() * znakovi.length));
    }
    lozinka.textContent = novaLozinka;
});

*/





/*

// Kreirati funkciju koja će primiti neki niz od boolean vrijednosti i vratiti 
// koliko je true vrijednosti unutar niza.

function prebroji(niz) {
    let brojac = 0;
    niz.forEach(element => {
        if (element === true) {
            brojac++;
        }
    });
    return brojac;
}

const niz = [true, false, true, true, false, true, false, false, true];
console.log(prebroji(niz));          // 5

*/





/*


// Kreirati gumb sa sadržajem "Klikni da me sakriješ". Napisati kod
// koji će dohvatiti taj gumb i sakriti ga kad se klikne na njega.

document.getElementById("gumb").addEventListener("click", function() {
    this.style.display = "none";
});

*/





/* 
Kreirati menu koji se otvara/zatvara na klik. Kreirati div element unutar kojeg će se nalaziti 
span element sadržaja Slatko(klikni me!) i jednu neuređenu listu s tri predmeta: Torta, Krafna, Med.
Div i span imaju svoje klase, neuređena klasa ima margin:0, list-style:none, padding-left:20px i display:none.
Span urediti tako da granica bude jedva primjetna, puna crta i crvene boje, veličina fonta 18px u cursor pointer.
Preko pseudo selektora, prije klika na Slatko neka sadržaj span elementa bude strelica prema desno i veličina fonta 80%,
a boja zelena. Napraviti da klikom na span element div element dobije klasu open koja će imati strelicu prema dolje i 
display block.


let menu = document.getElementById("slastice");
let span = document.querySelector("span");

span.onclick = function() {
    menu.classList.toggle("open");
};

*/





/*

// Unijeti select element sa dva option elementa. Prvi predstavlja Rock, a drugi Blues (defaultni).
// Prikazati vrijednost i tekst odabrane opcije. Dodati i opciju Hip Hop i postaviti ju kao odabranu.

let music = document.getElementById("music");
let newOption = document.createElement("option");   
newOption.textContent = "Hip Hop";

music.appendChild(newOption);
newOption.defaultSelected = true;

music.addEventListener("change", function() {
    console.log(music.value);
    console.log(music.options[music.selectedIndex].text);
});

*/