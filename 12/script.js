const products = [
    { name: 'Loerm', price: 1600, id: 0 },
    { name: 'Game', price: 10600, id: 1 },
    { name: 'INpUT', price: 12600, id: 2 },
    { name: 'Maga', price: 13600, id: 3 },
    { name: 'Laka', price: 15600, id: 4 },
    { name: 'Raro', price: 18600, id: 5 },
];
const baha = JSON.parse(localStorage.getItem('aha'))
let aha = [];

let num = document.getElementById('num');

const loop = []

const cont = document.getElementById('cont');
let i = 0;

function ftdt() {
    products.forEach((product) => {
        const div = document.createElement('div');
        const priceText = document.createElement('h3');
        const nameText = document.createElement('h1');


        let button = document.createElement('btn')
        button.innerHTML = `<button id="${i}">Liked</button>`;

        button.classList.add('btn')
        div.classList.add('card');
        priceText.textContent = product.price;
        nameText.textContent = product.name;

        div.appendChild(nameText);
        div.appendChild(priceText);
        div.appendChild(button);

        button.addEventListener('click', () => {
            let kaha = JSON.parse(localStorage.getItem('aha'));
            let bratan = kaha;
            
            

            if (kaha) {
                kaha.push(product);
                localStorage.setItem('aha', JSON.stringify(bratan));
                console.log(JSON.parse(localStorage.getItem('aha')));
            } else {
                aha.push(product);
                localStorage.setItem('aha', JSON.stringify(aha));
                console.log(JSON.parse(localStorage.getItem('aha')));
            }

            ff()

        })

        cont.appendChild(div);

        i++

    })  
}

ftdt()


const cart = document.getElementById('cart');

function dd() {
    baha.forEach((cartE) => {
        const cartDiv = document.createElement('div');
        const cartPrice = document.createElement('h3');
        const cartName = document.createElement('h1');
        let removed = document.createElement('div');
        removed.innerHTML = `<button>Remove</button>`;
        removed.classList.add('removeBtns')

        cartPrice.textContent = cartE.price;
        cartName.textContent = cartE.name;

        cartDiv.appendChild(cartName);
        cartDiv.appendChild(cartPrice);
        cartDiv.appendChild(removed)

        cart.appendChild(cartDiv);

        removed.addEventListener('click', () => {
            console.log(baha.indexOf(cartE));

            baha.splice(baha.indexOf(cartE), 1);
            cart.removeChild(cartDiv)
            localStorage.setItem('aha', JSON.stringify(baha))
        })
    })
}

dd();

let t = 0;
function ff() {
    t++;
    let arp = JSON.parse(localStorage.getItem('aha'));
    let thea = arp.pop();

    const cartDive = document.createElement('div');
    const cartPricee = document.createElement('h3');
    const cartNamee = document.createElement('h1');
    let removed = document.createElement('div');
    removed.innerHTML = `<button>Remove</button>`;
    removed.classList.add('removeBtns')

    cartPricee.textContent = thea.price;
    cartNamee.textContent = thea.name;

    cartDive.appendChild(cartNamee);
    cartDive.appendChild(cartPricee);
    cartDive.appendChild(removed)

    cart.appendChild(cartDive);
    num.textContent = t;

    removed.addEventListener('click', () => {
        baha.splice(baha.indexOf(thea), 1);
        cart.removeChild(cartDive)
        localStorage.setItem('aha', JSON.stringify(baha))
    })
}

