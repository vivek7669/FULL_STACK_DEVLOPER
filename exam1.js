let sarr = [];

const deletdata = () => {
    let index = del.getAttribute('data');
    let da = del.getAttribute('id');
    console.log("Index: "+ index);     

    if(index == da) {
        console.log(da);
        sarr.splice(index,1);
        putdata();
    }
    
}


const putdata = () => {
    let card = document.querySelector('#data');
    card.innerHTML = '';
    sarr.forEach((elem,index,array) => {
    
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        td1.innerText = elem[0];
        td2.innerText = elem[1];
        td3.innerText = elem[2];
        td4.innerHTML = `<button id="f${index}" data="f${index}"  >DELETE</button>`;

        tr.append(td1 ,td2 ,td3,td4);
        card.append(tr);
        
        del = document.querySelector(`#f${index}`);
        
        del.addEventListener('click',deletdata);
            
    });

}

const getdata = (e) =>{
    e.preventDefault();
    let fname = document.querySelector('#first_name').value;
    let lname = document.querySelector('#last_name').value;
    let cname = document.querySelector('#city').value;

   let arr = [fname ,lname ,cname];
   sarr.push(arr);
   putdata();
}

 let save = document.querySelector('#for1');
 save.addEventListener('submit',getdata);


