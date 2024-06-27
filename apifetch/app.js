

const uimaker = (data) => {
    let outer_div = document.querySelector('.outer_div'); 
    outer_div.innerHTML = ''
    data.map((elm, ind) => {
        let chi_duv = document.createElement('div');
        chi_duv.classList.add('card', 'inner_card', 'p-3', 'd-flex', 'justify-content-center', 'align-items-center');
        let ptitle = document.createElement('h4');
        ptitle.classList.add('card-title','title');
        ptitle.textContent = elm.title;
        let pimg = document.createElement('img');
        pimg.classList.add('card-img');
        pimg.src = elm.image;
        let pcategory = document.createElement('pre');
        pcategory.classList.add('card-text');
        pcategory.textContent = elm.category;
        let pdescription = document.createElement('p');
        pdescription.classList.add('card-text','description');
        pdescription.textContent = elm.description;
        let pr_radiv = document.createElement('div');
        pr_radiv.classList.add('d-flex','justify-content-around','align-items-center','prdiv');
        let pprice = document.createElement('h3');
        pprice.classList.add('card-text');
        pprice.textContent = elm.price + '₹'; 
        let rate = document.createElement('div');
        rate.classList.add('d-flex','justify-content-end','align-items-center','prdiv','mr-2');
        let pi = document.createElement('i');
        pi.classList.add("fa-solid","fa-star");
        let prate = document.createElement('h4');
        prate.classList.add('card-text');
        prate.textContent = elm.rating.rate; 
        let btn = document.createElement('button');
        btn.classList.add('btn','btnbuy');
        btn.textContent = 'Buy'; 
        rate.append(pi,prate);
        pr_radiv.append(pprice,rate);
        chi_duv.append(ptitle,pimg,pcategory,pdescription,pr_radiv,btn);
        outer_div.append(chi_duv);

    })
}

const fetchapi = (async () => {
    let reqest = await fetch('https://fakestoreapi.com/products');
    let response = await reqest.json();
    uimaker(response);
    console.log(response);
})();