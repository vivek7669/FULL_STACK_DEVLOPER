import navbar from "../components/navbar.js";

document.querySelector('.container_navbar').innerHTML = navbar();

document.querySelector('.cart').classList.add('active','text-dark','fw-bolder');
document.querySelector('.home').classList.add('text-light');
document.querySelector('.sproduct').classList.add('text-light');
document.querySelector('.home').classList.remove('active','text-dark');

let user = JSON.parse(localStorage.getItem('user'));
if(localStorage.getItem('islogin')=='false') {
    location.href = "../index.htm";
}

if(localStorage.getItem('islogin') == 'true'){
    document.querySelector('#search_product').style.display = 'none';
    document.querySelector('#sign_up').style.display = 'none';
    document.querySelector('#sign_in').style.display = 'none';
    // document.querySelector('#search_product').style.display = 'none';
    document.querySelector('#logout').style.width = '79rem';
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

let products = JSON.parse(localStorage.getItem('cart_product')) ?? [];
    // console.log(allproducts.length);
    // let section = document.createElement('div');
    // section.classList.add('h-100','h-custom');

const removepro = (el,po) => {
    products.splice(po,1);
    localStorage.setItem('cart_product', JSON.stringify(products));
    uimaker(products);
}

const qminsquantity = (el,ind) => {
    let qm = Number(document.querySelector(`#p${ind + 1}`).value);
    if(qm >= 0){
        qm = qm - 1;
    }
    
        let getinput = document.querySelector(`#p${ind + 1}`);
        getinput.value = qm;
        console.log(products[ind].quatity = qm);
        localStorage.setItem('cart_product', JSON.stringify(products));
        uimaker(products);
}

const qplusquantity = (el,ind) => {
    let qp = Number(document.querySelector(`#p${ind + 1}`).value);
    if(qp >= 0){
        qp = qp + 1;
    }
        let getinput = document.querySelector(`#p${ind + 1}`);
        getinput.value = qp;
        console.log(products[ind].quatity = qp);
        localStorage.setItem('cart_product', JSON.stringify(products));
        uimaker(products);
}

const uimaker = (allproducts) => {

    document.querySelector('.itemscount').textContent = products.length + ' items'; 
    document.querySelector('.itemscounts').textContent =  ' items ' + products.length ; 

    // document.querySelector('.pricewitoutgst').textContent =  ' items ' + products.length ; 
    let prolist = document.querySelector('.productlist');
    prolist.innerHTML = "";
   


    let phader = document.createElement('div');
    phader.classList.add('d-flex','justify-content-between','align-items-center','mb-5'); 
    let phadertitle = document.createElement('h1');
    phadertitle.classList.add('fw-bold','mb-0');
    phadertitle.textContent = 'Shopping Cart';
    let phaderitcount = document.createElement('h6');
    phaderitcount.classList.add('itemscount' ,'mb-0' ,'text-muted');
    phaderitcount.textContent = `${allproducts.length} items`;
    phader.append(phadertitle,phaderitcount);
    prolist.append(phader);
    allproducts.map((elm,ind,arr)=>{
        let hr = document.createElement('hr');

        let pror = document.createElement('div');
        pror.classList.add('row','mb-4','d-flex','justify-content-between','align-items-center');
        
        //* product Image
        let imgcontainer = document.createElement('div');
        imgcontainer.classList.add('col-md-2', 'col-lg-2', 'col-xl-2');
        let pimg = document.createElement('img');
        pimg.classList.add('img-fluid', 'rounded-3');
        pimg.alt = `${elm.category}`;
        pimg.src = `${elm.image}`;
        imgcontainer.append(pimg);

        //* prduct Name & Description
        let pncontainer = document.createElement('div');
        pncontainer.classList.add('col-md-3', 'col-lg-3', 'col-xl-3');
        let pname = document.createElement('h6');
        pname.classList.add('text-muted');
        pname.textContent = `${elm.title}`;
        let pcategoury = document.createElement('h6');
        pcategoury.classList.add('mb-0');
        pcategoury.textContent = `${elm.category}`;
        pncontainer.append(pname,pcategoury);

        //* product Quantity
        let pquantity = document.createElement('div');
        pquantity.classList.add('col-md-3', 'col-lg-3', 'col-xl-2', 'd-flex');
        let qmbtn = document.createElement('button');
        qmbtn.classList.add('btn','btn-link','px-2');
        let qmins = document.createElement('i');
        qmins.classList.add('fas','fa-minus');
        qmbtn.append(qmins);
        qmbtn.addEventListener('click',()=>qminsquantity(elm,ind));
        let inp1 = document.createElement('input');
        inp1.classList.add('form1','form-control','form-control-sm');
        inp1.setAttribute('min','0');
        inp1.setAttribute('value','1');
        inp1.setAttribute('type','number');
        inp1.setAttribute('id',`p${elm.id}`);
        inp1.value=`${elm.quatity}`;
        let qpbtn = document.createElement('button');
        qpbtn.classList.add('btn','btn-link','px-2');
        let qplus = document.createElement('i');
        qplus.classList.add('fas','fa-plus');
        qpbtn.append(qplus);
        qpbtn.addEventListener('click',()=> qplusquantity(elm,ind));
        pquantity.append(qmbtn,inp1,qpbtn);

        //* price Container
        let ppricecontainer = document.createElement('div');
        ppricecontainer.classList.add('col-md-3', 'col-lg-2', 'col-xl-2', 'offset-lg-1');
        let pprice = document.createElement('h6');
        pprice.classList.add('mb-0');
        pprice.textContent = `${elm.price}₹`
        ppricecontainer.append(pprice);
       
        //* time Container
        let ptimecontainer = document.createElement('div');
        ptimecontainer.classList.add('col-md-1','col-lg-1','col-xl-1','text-end');
        let ptime = document.createElement('a');
        ptime.classList.add('text-muted');
        let pptime = document.createElement('a');
        pptime.classList.add('fas','fa-times');
        pptime.setAttribute('href',"#");
        pptime.addEventListener('click',()=> removepro(elm,ind));
        ptime.append(pptime);
        ptimecontainer.append(ptime);

        let tp = 0 ;
        for(let i=0;i<products.length;i++){
            tp += arr[i].price * arr[i].quatity;
        }
        document.querySelector('.pricewitoutgst').textContent = `${tp}₹`;

        if(document.querySelector('.stdelvary').selected){
            document.querySelector('.pricrwithgst').textContent = `${tp + 5}₹`;
        }
        else{

            document.querySelector('.pricrwithgst').textContent = `${tp}₹`;
        }
        
        pror.append(imgcontainer,pncontainer,pquantity,ppricecontainer,ptimecontainer);
        prolist.append(hr,pror);

    })
}

document.querySelector('.form-select').addEventListener('change',()=>{

    uimaker(products)
})

uimaker(products)