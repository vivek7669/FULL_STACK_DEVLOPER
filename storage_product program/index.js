
let product_datas = [];
 product_datas = JSON.parse(localStorage.getItem('products')) || [];

const deletepro = (ind) =>{
    product_datas.splice(ind,1);
    localStorage.setItem('products',JSON.stringify(product_datas));
    uimaker(product_datas)
}

const uimaker = (products_data) => {
    document.querySelector(".products_box").innerHTML = ""
    console.log(products_data);
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
        buy.addEventListener('click',()=>location.href = `buy.htm?`);
        let card_btn = document.createElement('div');
        card_btn.append(Ignore,buy);
        card_btn.style.margin = "0rem 0rem -1rem 0.5rem";

        card.append(title,image,price,category,card_btn);
        document.querySelector('.products_box').append(card);

    })
}
// console.log(product_datas);
uimaker(product_datas);