
let database_obj = JSON.parse(localStorage.getItem('user')) ?? {} ;
let data_email = database_obj.email;
let data_password = database_obj.password;
let err_msg_email = document.querySelector('.err_msg_e');
let err_msg_password = document.querySelector('.err_msg_p');


const checkdata = (obj1) =>{
    if(obj1.email == data_email && obj1.password == data_password){
        err_msg_email.textContent = "match the email";
        err_msg_password.textContent = "match the password";
        location.href = "../index.htm";
        localStorage.setItem('islogin',true);
    }
    else if(obj1.password.length == 0 && obj1.email.length == 0){
        err_msg_email.textContent ="pls fill the email";
        err_msg_password.textContent ="pls fill the password";
    }
    else if(obj1.email != data_email && obj1.password != data_password){
        err_msg_email.textContent = "not match the email";
        err_msg_password.textContent = "not match the password";
    }
    else{
        alert("not match");
    }
} 

const getdata = (e) => {
    e.preventDefault();
    let obj1 = {
        email : document.querySelector('#email').value,
        password : document.querySelector('#password').value
    }
    checkdata(obj1)
}

let login_data = document.querySelector("#login_data");
login_data.addEventListener("submit",getdata);
