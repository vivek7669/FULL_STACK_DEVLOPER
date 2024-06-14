import navbar from "../components/navbar.js";

const getdata = (e) => {
    e.preventDefault();
    let obj = {
        name : document.querySelector('#name').value,
        email : document.querySelector('#email').value,
        img : document.querySelector('#image').value,
        country : document.querySelector('#country').value,
        password : document.querySelector('#password').value
    }
    // console.log(JSON.stringify(obj));
    localStorage.setItem('user',JSON.stringify(obj));
    Location.href = "../web/login.htm";
}

document.querySelector('.navbar').innerHTML = navbar();

let sign_data = document.querySelector('#sign_up_data');
sign_data.addEventListener("submit",getdata);