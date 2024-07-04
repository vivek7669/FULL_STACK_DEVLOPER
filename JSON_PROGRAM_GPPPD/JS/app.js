import { getdata } from "../fetch-Api/get.js";
import { nav } from "../components/navbar.js";
import { postdata } from "../fetch-Api/post.js";

document.querySelector(".container-fluid").innerHTML = nav();
// let email = document.querySelector("#exampleInputEmail1").value;
// let pass = document.querySelector("#exampleInputPassword1").value;
// console.log(email);
const aduser = (data) => {
  //   let emails = document.querySelector("#exampleInputEmail1").value;
  //   let passs = document.querySelector("#exampleInputPassword1").value;
  let u_data = {
    username: data.email,
    password: data.pass,
  };
  postdata(u_data);
};

const checkdata = async (e) => {
  e.preventDefault();
  let email = document.querySelector("#exampleInputEmail1").value;
  let pass = document.querySelector("#exampleInputPassword1").value;

  let url = "http://localhost:3000/user";

  let ad_user_req = await fetch(url);
  let ad_user_res = await ad_user_req.json();

  let l = [];
  let p = [];

  ad_user_res.map((elm) => {
    l.push(elm.User_Email);
    p.push(elm.User_Password);
  });

  if (l.includes(email)) {
    alert("email is registered.");
  } 
  if (p.includes(pass)) {
    alert("password is already Exist.");
  } else {
    let uudata = { email, pass };
    aduser(uudata);
  }
};
document.querySelector("#adduser").addEventListener("submit", checkdata);
// checkdata();
