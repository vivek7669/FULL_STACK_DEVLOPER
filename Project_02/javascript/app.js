import { apiObject } from "../api/group_api.js";

document.querySelector('.show_data').innerHTML="";
let update_id = false;
let flag_id = 0;

let l = await apiObject.get();
let r = [];
    l.map((elm)=>{
        r.push(elm.email);
    })
    // console.log(r);

const post = async (e) => {
  e.preventDefault();
  let userdata = {
    username: document.querySelector("#exampleUserName1").value,
    email: document.querySelector("#exampleInputEmail1").value,
    password: document.querySelector("#exampleInputPassword1").value,
  };


// console.log(flag_id);
  if (!r.includes(userdata.email) && update_id === false) {
    await apiObject.post(userdata);
  } else {
    if (update_id === true) {
      await apiObject.patch(flag_id, userdata);
    }
    else{
        console.log("already Exist.");
    }
  }
};

const updatedata = (data) => {
  update_id = true;
  document.querySelector("#exampleUserName1").value = data.username;
  document.querySelector("#exampleInputEmail1").value = data.email;
  document.querySelector("#exampleInputPassword1").value = data.password;
  flag_id = data.id;
};

l.map((elm) => {
  let container = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerHTML = elm.username;
  let p2 = document.createElement("p");
  p2.innerHTML = elm.email;
  let p3 = document.createElement("p");
  p3.innerHTML = elm.password;
  let btn1 = document.createElement("button");
  btn1.textContent = "Update";
  btn1.addEventListener("click", () => updatedata(elm));
  container.append(p1,p2,p3,btn1);
  document.querySelector('.show_data').append(container);
});

document.querySelector("#adduser").addEventListener("submit", post);
