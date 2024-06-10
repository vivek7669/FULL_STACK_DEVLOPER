let products = JSON.parse(localStorage.getItem('product')) ?? [];
let user = JSON.parse(localStorage.getItem('user')) ?? [];
let count = localStorage.getItem('like') ?? 0;

let image_user = document.querySelector("#image_user");
image_user.src = user.img;
let name_user = document.querySelector("#user_name");
name_user.textContent = user.name;

const countlike = () => {
    count++;
    localStorage.setItem('like',count);
    document.querySelector('.fa-heart').style.color = 'red';
    alert(`like : ${count}`);
}

const loadNews = () => {
    products.map((elm) => {
        let card = document.createElement('div');
        card.classList.add('card','w-25','h-25','p-4');
        let card_title = document.createElement('h3');
        card_title.textContent = elm.title;
        let card_image = document.createElement('img');
        card_image.src = elm.image;
        card_image.classList.add('card-img','pb-4');
        let card_desc = document.createElement('pre');
        card_desc.textContent = elm.description;
        let card_country = document.createElement('select');
        let option1 = document.createElement('option');
        option1.textContent = "india"; 
        let option2 = document.createElement('option');
        option2.textContent = "pakistan"; 
        let option3 = document.createElement('option');
        option3.textContent = "bangladesh"; 
        let option4 = document.createElement('option');
        option4.textContent = "nepal"; 
        card_country.append(option1,option2,option3,option4);
        card_desc.textContent = elm.description;

        let box = document.createElement('div');
        let like = document.createElement("i");
        like.addEventListener('click',countlike);
        like.classList.add("fa-solid","fa-heart");
        let share = document.createElement("i");
        share.classList.add("fa-solid","fa-share");
        box.append(like,share);
        box.classList.add('d-flex','justify-content-around');
        
        card.append(card_title,card_image,card_country,card_desc,box);
        document.querySelector('#cards').append(card);
    })
}
loadNews()