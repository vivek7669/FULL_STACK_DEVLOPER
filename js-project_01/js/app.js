import navbar from "../components/navbar.js";

let database_obj = JSON.parse(localStorage.getItem('user')) ?? {} ;
let data_name = database_obj.name;
console.log(data_name);
if(!data_name){
    location.href = './web/sign_up.htm';
}

let nav_container = document.querySelector('.container_navbar');
nav_container.innerHTML = navbar()