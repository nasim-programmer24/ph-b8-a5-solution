// console.log('connected');

let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');
// console.log(cards);

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(card);
    card.addEventListener('click', function(){
        // console.log('clicked');

        // get the title
        // const title = card.querySelector('h3');
        const title = card.querySelector('h3').innerText;
        // console.log(title.innerText);

        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        // console.log(typeof price);
        // console.log(price);
        // console.log({title,price});
        // console.log(price.innerText);
        // console.log(price, title);

        const titleContainer = document.getElementById('title-container');
        // console.log(titleContainer);

        const p = document.createElement('p');
        p.innerText =titleCount + '. ' + title;
        titleContainer.appendChild(p);
        titleCount++;

        // calculate price
        totalPrice += price;
        // console.log(totalPrice);
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })
}