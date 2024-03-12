// Dohvatiti dužinu svih buttona

let buttons = document.querySelectorAll('button'); 
let buttonsLength = buttons.length; 





// Pomoću for petlje se kretati kroz gumbove i dodavati addEventListener za svaki gumb 
// tako što ćemo klikom na gumb proizvesti zvuk i pokrenuti animaciju.	
// Deklarirati varijablu koja će dobiti vrijednost this.innerHTML koja će biti proslijeđena funkcijama za zvuk i animaciju.
// Osim na klik, potrebno je i dvije funkcije pokrenuti pritiskom na odgovarajuće slovo na tipkovnici.

for (let i = 0; i < buttonsLength; i++) {
    buttons[i].addEventListener('click', function() {
        let buttonInnerHTML = this.innerHTML;                   
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});





// Deklarirati funkciju makeSound koja će kao parametar primiti key koji će biti proslijeđen

function makeSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}





// Deklarirati funkciju buttonAnimation koja će kao parametar primiti currentKey koji će biti proslijeđen

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('animation');
    setTimeout(function() {
        activeButton.classList.remove('animation');
    }, 100);
}