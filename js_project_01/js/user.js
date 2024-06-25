import navbar from "../components/navbar.js";

let user = localStorage.getItem('user');
console.log(user);
document.querySelector('.container_navbar').innerHTML = navbar();
document.querySelector('.user-name').classList.add('active','text-dark');
document.querySelector('.home').classList.add('text-light');
document.querySelector('.sproduct').classList.add('text-light');
document.querySelector('.home').classList.remove('active','text-dark');

let database_obj = JSON.parse(localStorage.getItem('user')) ?? {};
let data_name = database_obj.name;

if(localStorage.getItem('islogin') == 'true'){
    document.querySelector('#sign_up').style.display = 'none';
    document.querySelector('#sign_in').style.display = 'none';
    document.querySelector('#logout').style.width = '66rem';
    document.querySelector('.user-name').innerHTML = `${data_name}`;
}
else if (localStorage.getItem('islogin') == null){
    location.href = '../index.htm';
}
else{

    document.querySelector('#user-block').style.display = 'none';
    document.querySelector('#cartproduct').style.display = 'none';
    document.querySelector('#sign_up').style.display = 'inline-block';
    document.querySelector('#sign_in').style.display = 'inline-block';
    document.querySelector('#logout').style.display = 'none';
}