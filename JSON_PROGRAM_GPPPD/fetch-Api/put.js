import { nav } from "../components/navbar.js";
import { getdata } from "./get.js";

document.querySelector(".container-fluid").innerHTML = nav();

export const patchdata = async (data) => {

    let url = `http://localhost:3000/user/${data.fedat}`;
    let option={
        method : "PUT",
        headers : {
            "Content-Type":"Application/json"
        },
        body : JSON.stringify({
            "User_Email":`${data.femdat}`,
            "User_Password":`${data.fepsdat}`
        })
    }
    let ad_user_req = await fetch(url,option);
    let ad_user_res = await ad_user_req.json();

}

const pedata = (e) => {
    e.preventDefault();
  
    let pdata = {
         fedat : document.querySelector('#exampleInputId1').value,
         femdat : document.querySelector('#exampleInputEmail1').value,
         fepsdat : document.querySelector('#exampleInputPassword1').value
    }
    patchdata(pdata)
}

let add_user = document.querySelector('#adduser');
add_user.addEventListener('submit',pedata);

getdata();