const productsList = document.querySelector('#products .products');

// api
fetch(`https://isko88.github.io/apipizza.json`)
.then(resp => {
    return resp.json();
})
.then(products => {
    products.forEach(product => {
        console.log(product);
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
        card.appendChild(cardBody);
        col.appendChild(card);
        productsList.append(col);
       
    });
})

// posts.forEach(post => {
//     let postTitle = document.createElement('h3');
//     let postContent = document.createElement('p');
//     postTitle.textContent = post.title;
//     postContent.textContent = post.body;
//     postsList.append(postTitle);
//     postsList.append(postContent);
// });
// .then(user => {
//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const image = document.getElementById("image");
//     name.textContent = `${user.name.first} ${user.name.last}`;
//     email.textContent = user.email;
//     // created image
//     var userImage = new Image();
//     userImage.style.borderRadius = "50%";
//     userImage.src = user.picture.medium;
//     image.append(userImage);
//     console.log(user)

//     // click
//     name.onclick = function () {
//         apiUsersList.innerHTML = "";
//             let apiUserTr = document.createElement('tr');
//             let userFullname = document.querySelector('div.modal.api-users-list .modal-title');
//             let userEmail = document.createElement('td');
//             let userGender = document.createElement('td');
//             let userAge = document.createElement('td');
//             let userPhone = document.createElement('td');
//             let userCountry = document.createElement('td');
//             let userCity = document.createElement('td');
//             let userStreet = document.createElement('td');
//             let userPostcode = document.createElement('td');

            
//             name.setAttribute("data-toggle", "modal");
//             name.setAttribute("data-target", "#myModalUser");

//             userFullname.textContent = `${user.name.first} ${user.name.last}`;
//             userEmail.textContent = user.email;
//             userGender.textContent = user.gender;
//             userAge.textContent = user.dob.age;
//             userPhone.textContent = user.phone;
//             userCountry.textContent = user.location.country;
//             userCity.textContent = user.location.city;
//             userStreet.textContent = user.location.street.name;
//             userPostcode.textContent = user.location.postcode;

//                 apiUserTr.appendChild(userFullname);
//                 apiUserTr.appendChild(userEmail);
//                 apiUserTr.appendChild(userGender);
//                 apiUserTr.appendChild(userAge);
//                 apiUserTr.appendChild(userPhone);
//                 apiUserTr.appendChild(userCountry);
//                 apiUserTr.appendChild(userCity);
//                 apiUserTr.appendChild(userStreet);
//                 apiUserTr.appendChild(userPostcode);


//                 apiUsersList.append(apiUserTr);
        
//     } 
// })

// [
//     {
//       "id": 1,
//       "category": "Pizza",
//       "name": "Quattro formaggi",
//       "image":"https://isko88.github.io/pizza/1.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 79
//     },
//     {
//       "id": 2,
//       "category": "Pizza",
//       "name": "Carbonara",
//       "image":"https://isko88.github.io/pizza/2.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 79
//     },
//     {
//       "id": 3,
//       "category": "Pizza",
//       "name": "Philadelphia salmone",
//       "image":"https://isko88.github.io/pizza/3.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 89
//     },
//     {
//       "id": 4,
//       "category": "Pizza",
//       "name": "Veggie",
//       "image":"https://isko88.github.io/pizza/4.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 10
//     },
//     {
//       "id": 5,
//       "category": "Pizza",
//       "name": "Margherita",
//       "image":"https://isko88.github.io/pizza/5.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 10
//     },
//     {
//       "id": 6,
//       "category": "Pizza",
//       "name": "Pizzasallad",
//       "image":"https://isko88.github.io/pizza/6.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 0
//     },
//     {
//       "id": 7,
//       "category": "Pizza",
//       "name": "Hawaiian",
//       "image":"https://isko88.github.io/pizza/7.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 10
//     },
//      {
//       "id": 8,
//       "category": "Pizza",
//       "name": "Pepperoni",
//       "image":"https://isko88.github.io/pizza/8.png",
//       "topping": [
//         "Dough",
//         "Mozzarella",
//         "Cheddar",
//         "Blue",
//         "Parmesan"
//       ],
//       "price": 10
//     }
//   ]

  