const productsList = document.querySelector('#products .products');

// api
fetch(`https://isko88.github.io/apipizza.json`)
.then(resp => {
    return resp.json();
})
.then(products => {
    products.forEach(product => {
        let col = document.createElement('div');
        col.className = "col-3 p-2";
        let card = document.createElement('div');
        card.className = "card text-center";
        let cardImgDiv = document.createElement('div');
        cardImgDiv.className = "image text-center";
        let cardImg = document.createElement('img');
        cardImg.className = "card-img-top";
        cardImg.style.paddingLeft = "40px";
        cardImg.style.paddingTop = "25px";
        cardImg.src = product.image;
        cardImg.setAttribute('alt', 'Product image');
        // let button = document.createElement('button');
        // button.className = "btn btn-light";
        // button.setAttribute("type", "button");
        // button.textContent = "Add to basket";
        let cardBody = document.createElement('div');
        cardBody.className = "card-body";
        let cardTitle = document.createElement('h5');
        cardTitle.className = "card-title";
        cardTitle.textContent = product.name;
        let cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.style.fontSize = "14px";
        cardText.textContent = product.topping.join(', ');
        let cardPrice = document.createElement('p');
        cardPrice.textContent = product.price + '$';

        cardImgDiv.appendChild(cardImg);
        card.appendChild(cardImgDiv);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(button);
        card.appendChild(cardBody);
        col.appendChild(card);
        productsList.append(col);
       
    });
})

$('.basket-button').on('click', function() {
    if ($('.basket').css('opacity') == 0) $('.basket').css('opacity', 1);
    else $('.basket').css('opacity', 0);
});

