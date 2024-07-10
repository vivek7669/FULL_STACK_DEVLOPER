import { apiObject } from "../api/group_api.js";

const login = async(e) =>{
    e.preventDefault();
    let email = document.querySelector('#exampleInputEmail1').value;
     console.log(await apiObject.isLogin(email));
}

document.querySelector("#adduser").addEventListener("submit", login);