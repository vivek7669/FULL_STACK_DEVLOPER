import navbar from "../components/navbar.js";

let cart_product=[];
let counter = 0;

let product_datas = [];
 product_datas = JSON.parse(localStorage.getItem('products')) || [];

 let database_obj = JSON.parse(localStorage.getItem('user')) ?? {};
let data_name = database_obj.name;

const deletepro = (ind) =>{
    product_datas.splice(ind,1);
    localStorage.setItem('products',JSON.stringify(product_datas));
    uimaker(product_datas)
}

const isexist = (exist_product) => {
   return cart_product.includes(exist_product);
}

const datafind = (product) => {
    counter++; 
   if(isexist(product)){
    product.quatity = counter;
    localStorage.setItem('cart_product',JSON.stringify(cart_product));
   }else{
    // console.log(id);
    cart_product.push(product);
    product.quatity = 1;
    localStorage.setItem('cart_product',JSON.stringify(cart_product));
   }
}

const uimaker = (products_data) => {
    document.querySelector(".products_box").innerHTML = ""
    // console.log(products_data);
    products_data.map((elm,ind)=>{
        let card = document.createElement('div');
        card.classList.add('card','shadow');
        card.style.padding = "1rem";
        let title = document.createElement('p');
        title.classList.add('card-title');
        title.innerHTML = elm.title;
        let image = document.createElement('img');
        image.classList.add('card-img');
        image.src = elm.image;
        let price = document.createElement('h3');
        price.classList.add('card-text');
        price.innerHTML = elm.price;
        let category = document.createElement('p');
        category.classList.add('card-text');
        category.innerHTML = elm.category;
        let Ignore = document.createElement('button');
        Ignore.classList.add('card-btn','btn','btn-primary','btn-sm');
        Ignore.innerHTML = "Not Interested";
        Ignore.style.margin = "-1rem 1rem 1rem -1rem";
        Ignore.addEventListener('click',()=>deletepro(ind));
        let buy = document.createElement('button');
        buy.classList.add('card-text','btn','btn-primary','btn-sm');
        buy.innerHTML = "Buy";
        buy.style.margin = "-1rem 0rem 1rem 0rem";
        buy.addEventListener('click',()=>datafind(elm));
        let card_btn = document.createElement('div');
        card_btn.append(Ignore,buy);
        card_btn.style.margin = "0rem 0rem -1rem 0.5rem";

        card.append(title,image,price,category,card_btn);
        document.querySelector('.products_box').append(card);

    })
}

document.querySelector('.container_navbar').innerHTML = navbar();
if(localStorage.getItem('islogin') == 'true'){
    document.querySelector('#sign_up').style.display = 'none';
    document.querySelector('#sign_in').style.display = 'none';
    document.querySelector('#logout').style.width = '32rem';
    document.querySelector('.user-name').innerHTML = `${data_name}`;
}
else{
    document.querySelector('#user-block').style.display = 'none';
    document.querySelector('#cartproduct').style.display = 'none';
    document.querySelector('#sign_up').style.display = 'inline-block';
    document.querySelector('#sign_in').style.display = 'inline-block';
    document.querySelector('#logout').style.display = 'none';
}

// console.log(product_datas);
uimaker(product_datas);