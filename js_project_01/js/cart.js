import navbar from "../components/navbar.js";

document.querySelector('.container_navbar').innerHTML = navbar();

let user = JSON.parse(localStorage.getItem('user'));
let cartproducts = JSON.parse(localStorage.getItem('cart_product')) ?? [];
console.log(cartproducts);

if(localStorage.getItem('islogin') == 'true'){
    document.querySelector('#sign_up').style.display = 'none';
    document.querySelector('#sign_in').style.display = 'none';
    // document.querySelector('#search_product').style.display = 'none';
    document.querySelector('#logout').style.width = '32rem';
    document.querySelector('.user-name').innerHTML = `${user.name}`;
}
else{
    document.querySelector('#user-block').style.display = 'none';
    document.querySelector('#cartproduct').style.display = 'none';
    document.querySelector('#search_product').style.display = 'none';
    document.querySelector('#sign_up').style.display = 'inline-block';
    document.querySelector('#sign_in').style.display = 'inline-block';
    document.querySelector('#logout').style.display = 'none';
    document.querySelector('#add_product').style.display = 'none';
}

const deletepro = (ind) =>{
    console.log(cartproducts);
    cartproducts.splice(ind,1);
    localStorage.setItem('cart_product',JSON.stringify(cartproducts));
    cartui_maker(cartproducts)
}

const cartui_maker = (products) => {
    document.querySelector('.products_box').innerHTML = "";
    products.map((elm,ind)=>{
        let card = document.createElement('div');
        card.classList.add('card','shadow');
        card.style.padding = "1rem";
        let title = document.createElement('p');
        title.classList.add('card-title');
        title.innerHTML = elm.title;
        let image = document.createElement('img');
        image.classList.add('card-img','img-fluid'  );
        image.src = elm.image;
        let price = document.createElement('h3');
        price.classList.add('card-text');
        price.innerHTML = elm.price;
        let category = document.createElement('p');
        category.classList.add('card-text');
        category.innerHTML = elm.category;
        let qantity = document.createElement('h4');
        qantity.classList.add('card-text');
        qantity.innerHTML = elm.quatity;

        let Ignore = document.createElement('button');
        Ignore.classList.add('card-btn','btn','btn-primary','btn-sm');
        Ignore.innerHTML = "Not Interested";
        Ignore.addEventListener('click',()=>deletepro(ind));    

        card.append(title,image,price,category,qantity,Ignore);
        document.querySelector('.products_box').append(card);
    })
}

cartui_maker(cartproducts)