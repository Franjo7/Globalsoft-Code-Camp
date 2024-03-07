/*

// Document Object Model (DOM)

// Promijeniti prvoj i zadnjoj stavci u listi sadržaj na način da za prve i treće stavke piše: first i last. 
// Koristiti querySelectorAll, forEach() i pseudo-elemente.

const firstInList = [...document.querySelectorAll("ul > li:first-child")];                    
const lastInList = [...document.querySelectorAll("ul > li:last-child")];

firstInList.forEach((li) => {
    li.textContent = "first";
});

lastInList.forEach((li) => {
    li.textContent = "last";
});

*/





/*

// Na web stranici prikazuje se lista predmeta. Korisnik može dodavati
// nove predmete i mijenjati tekst postojećih.

const app = document.getElementById("list-app");                        
const list = document.createElement("ul");
const input = document.createElement("input"); 
input.setAttribute("type", "text");
const button = document.createElement("button");
button.textContent = "Kreiraj novu stavku";

button.addEventListener("click", function() {
    const listItem = document.createElement("li");
    listItem.innerHTML = input.value;
    list.appendChild(listItem);
    input.value = "";
});

list.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        const newText = prompt("Izmijenite postojeću stavku");
        event.target.textContent = newText;
    }
});

app.appendChild(input);
app.appendChild(button);
app.appendChild(list);

*/





/*

// Funkcija prima neki niz i callback funkciju.
// Funkcija vraća true ukoliko ima najmanje dva neparna broja i false ukoliko nema.

function isOdd(broj) {
    return broj % 2 !== 0;                                      
}

function hasAtLeastTwoOdds(niz, callback) {
    return niz.filter(callback).length >= 2;                        // filter vraća novi niz koji sadrži sve elemente koji ispunjavaju uvjet.
}

console.log(hasAtLeastTwoOdds([1, 2, 3, 4, 5], isOdd));             // true
console.log(hasAtLeastTwoOdds([1, 2, 6, 8], isOdd));                // false
console.log(hasAtLeastTwoOdds([1, 3, 4, 2, 5], (t) => t > 3));      // true
console.log(hasAtLeastTwoOdds([1, 3, 4, 2, 5], (t) => t > 4));      // false

*/





/*

// Kreirati Promise funkciju koja će nakon 2 sekunde ili ispisati "Hello World" ili "Error".
// Rezultat treba biti riješen slučajnim odabirom tako da budu šanse 50/50 za jedan od ispisa.

function promiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if(random > 0.5) {
                resolve("Hello World");
            } else {
                reject("Error");
            }
        }, 2000);
    });
}

promiseFunction()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

*/





/*

// Neka varijabla predstavlja string od više riječi odvojenih razmakom. Vratiti inicijale od tih riječi. 
// Primjer: "Ivana Brlić Mažuranić" -> "IBM"

const string = "Ivana Brlić Mažuranić";
const inicijali = string.split(" ").map((rijec) => rijec[0]).join("");
console.log(inicijali);                            // IBM

*/