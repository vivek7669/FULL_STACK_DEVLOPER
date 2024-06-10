
let data = JSON.parse(localStorage.getItem('product')) ?? [];

const getdata = (e) => {
    e.preventDefault();
    let obj2 = {
        title : document.querySelector('#n_title').value,
        image : document.querySelector('#n_image').value,
        description : document.querySelector('#n_desc').value,
        country : document.querySelector('#n_country').value,
    }

    data.push(obj2)
    localStorage.setItem('product',JSON.stringify(data));
}

let add_news_data = document.querySelector('#add_news_data');
add_news_data.addEventListener('submit',getdata);