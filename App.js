const btnHamburger = document.querySelector('#btnHamburger');

//EVENTS

btnHamburger.addEventListener('click', openHamburger);


//FUNCTIONS

function openHamburger() {
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open')
    } else {
        btnHamburger.classList.add('open')
    }
};