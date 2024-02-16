// console.log('connected');

let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");
// console.log(cards);

for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  // console.log(card);
  card.addEventListener("click", function () {
    // console.log('clicked');

    // get the title
    // const title = card.querySelector('h3');
    const title = card.querySelector("h3").innerText;
    // console.log(title.innerText);

    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    // console.log(typeof price);
    // console.log(price);
    // console.log({title,price});
    // console.log(price.innerText);
    // console.log(price, title);

    const titleContainer = document.getElementById("title-container");
    // console.log(titleContainer);

    const p = document.createElement("p");
    p.innerText = titleCount + ". " + title;
    titleContainer.appendChild(p);
    titleCount++;

    // calculate price
    totalPrice += price;
    // console.log(totalPrice);
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  });
}

const btn = document.getElementById("apply-btn");
// console.log(btn);
btn.addEventListener("click", function () {
//   console.log("clicked");

// get the value from input
    const couponElement = document.getElementById('input-field').value;
    // console.log(couponElement);
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    console.log(couponCode);
    if(totalPrice >= 200){
        if(couponCode === 'SELL200'){
            // discount calculation
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            // rest total calculation
            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById('input-field').value = '';
        }else{
            alert('Invalid Coupon Code');
            document.getElementById('input-field').value = '';
        }
    }else{
        alert('Please spend at least $200 Brother!')
        document.getElementById('input-field').value = '';
    }
});
