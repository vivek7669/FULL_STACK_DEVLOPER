let arr_pro = [];
 arr_pro = JSON.parse(localStorage.getItem('products')) ?? [];
//  console.log(typeof(arr_pro));

const getdata = (e) => {
    e.preventDefault();
    
    let id = Number( [arr_pro.length]) + Number(1) ;

    let obj = {
        title : document.querySelector('#title').value,
        price : document.querySelector('#price').value,
        image : document.querySelector('#image').value,
        category : document.querySelector('#category').value,
        id
    }
    arr_pro.push(obj);
    // console.log(arr_pro);
    localStorage.setItem('products',JSON.stringify(arr_pro));
    location.href = "../web/product.htm";
}

let formdt = document.querySelector('#formdata');
formdt.addEventListener('submit',getdata);