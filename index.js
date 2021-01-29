let btn = document.querySelector('#btnSend');
var cuantity = document.querySelector('#cuantity');
let list = [];

btn.addEventListener('click', () => {
    let cards = cuantity.value;
    let container = document.querySelector('.cards');
    
    for (let i = 0; i < cards; i++) {
        let symbol = getSymbol(getRandom(4));
        let numbers = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']; //14

        let parent = document.createElement('div');
        parent.style.backgroundColor = 'white';
        parent.style.color = 'black';
        parent.style.width = '7%';
        parent.style.height = '7%';
        parent.classList.add('card');
        parent.style.margin = '0 5px 5px 5px';

        let top = document.createElement('div');
        top.innerHTML = symbol;
        top.classList.add('top');


        let middle = document.createElement('div');
        middle.innerHTML = numbers[getRandom(14)];
        middle.classList.add('body');

        let bottom = document.createElement('div');
        bottom.innerHTML = symbol;
        bottom.classList.add('bottom');

        if (symbol === '\u2660' || symbol === '\u2663') {
            top.style.color = 'black';
            bottom.style.color = 'black';
        }

        parent.appendChild(top);
        parent.appendChild(middle);
        parent.appendChild(bottom);
        container.appendChild(parent);


        list.push(parent);

    }
});

function getRandom(max) {
    return Math.floor(Math.random() * (max - 1) + 1);
}
function getSymbol(option) {
    switch (option) {
        case 1:
            let spades = '\u2660';
            return spades;
            break;
        case 2:
            let trebols = '\u2663';
            return trebols;
            break;
        case 3:
            let hearts = '\u2665';
            return hearts;
            break;

        default:
            hearts = '\u2665';
            return hearts;
            break;
    }
}


