
Location.href = "../web/login.htm";
const getdata = (e) => {
    e.preventDefault();
    let obj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        img: document.querySelector('#image').value,
        country: document.querySelector('#country').value,
        password: document.querySelector('#password').value
    }
    // console.log(JSON.stringify(obj));
    localStorage.setItem('user', JSON.stringify(obj));


//     let database_obj = JSON.parse(localStorage.getItem('user')) ?? {};
//     let data_name = database_obj.name;
//     if (!data_name) {
//         location.href = './web/sign_up.htm';
//     }
}


// let sign_data = document.querySelector('#sign_up_data');
// sign_data.addEventListener("submit", getdata);
// document.querySelector('#save').addEventListener("click", ()=>{
//     Location.href = "../web/login.htm";
// });