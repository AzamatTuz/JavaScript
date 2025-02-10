const products = [
    { name: 'Loerm', price: 1600, id: 0 },
    { name: 'Lo7erm', price: 10600, id: 1 },
    { name: 'L8oerm', price: 12600, id: 2 },
    { name: 'Loierm', price: 13600, id: 3 },
    { name: 'Loeolrm', price: 15600, id: 4 },
    { name: 'Lolkerm', price: 18600, id: 5 },
];

const loop = []

const cont = document.getElementById('cont');
let i = 0;

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


    cont.appendChild(div);

    i++

})

const likeds = document.querySelectorAll('.btn');
let a = 0;
let arr = JSON.parse(localStorage.getItem('liked'));

likeds.forEach((like) => {
    like.addEventListener('click', (e) => {
        console.log(e.target.id);
        a = e.target.id

        if (arr) {

            if (arr.length) {

                arr.push({ name: products[a].name, price: products[a].price, id: products[a].id });
                localStorage.setItem('liked', JSON.stringify(arr));
                console.log();

            } else {
                loop.push({ name: products[a].name, price: products[a].price, id: products[a].id })
                localStorage.setItem('liked', JSON.stringify(loop));
            }

        } else {
            loop.push({ name: products[a].name, price: products[a].price, id: products[a].id })
            localStorage.setItem('liked', JSON.stringify(loop));
        }


    })

});


console.log(arr);

const cart = document.getElementById('cart');
let b = 0;

function dd() {
    arr.forEach((cartE) => {
        const cartDiv = document.createElement('div');
        const cartPrice = document.createElement('h3');
        const cartName = document.createElement('h1');
        let removed = document.createElement('div');
        removed.innerHTML = `<button id="1${b}">Remove</button>`;
        removed.classList.add('removeBtns')

        cartPrice.textContent = cartE.price;
        cartName.textContent = cartE.name;

        cartDiv.appendChild(cartName);
        cartDiv.appendChild(cartPrice);
        cartDiv.appendChild(removed)

        cart.appendChild(cartDiv);

        b++

        removed.addEventListener('click', (e) => {
            arr.splice(e.target.id - 10, 1);
            localStorage.setItem('liked', JSON.stringify(arr));
            console.log(arr);
        })
    })
}

dd();
