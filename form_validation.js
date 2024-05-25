// FULL_NAME : 
let regex1 = /^([A-Za-z\s]{9,16})+$/;
let errm1 = document.querySelector('.err1');
let ffield = document.querySelector('#fname');
let logo1 = document.querySelector('.changelogo1');
// MOBILE_NO : 
let regex2 = /^([0-9]{10})+$/;
let sfield = document.querySelector('#mno');
let errm2 = document.querySelector('.err2');
let logo2 = document.querySelector('.changelogo2');
const fdatas = (e) => {
    e.preventDefault();

    let fname = document.querySelector('#fname').value;
    let fmno = document.querySelector('#mno').value;


    // NAME :
    if(regex1.test(fname)){  
        console.log(regex1.test(fname));
        errm1.innerHTML = "";
        logo1.classList.remove("fa-circle-exclamation");
        logo1.classList.add("fa-check");
        logo1.style.color = "green";
        logo1.style.top = "-2rem";
        ffield.style.border = "1px solid green";
    }
    else{
        console.log('not match1');
        errm1.innerHTML = "please enter valid name.";
        errm1.style.color = "red"
        logo1.style.display = "visible";
        logo1.style.color = "red";
        logo1.classList.remove("fa-check");
        logo1.classList.add("fa-circle-exclamation");
        logo1.style.top = "-3.4rem";
        ffield.style.border = "1px solid red";
        ffield.style.animation = "shake 0.2s ease-in-out 0s 2";
        navigator.vibrate([200]);
    }
 
    if(fname.length == 0){
        console.log('not match2');
        errm1.innerHTML = "please enter name.";
        errm1.style.color = "red"
        logo1.classList.remove("fa-check");
        logo1.classList.add("fa-circle-exclamation");
        logo1.style.top = "-3.4rem";
        ffield.style.border = "1px solid red";
        ffield.style.animation = "shake 0.2s ease-in-out 0s 2";
        navigator.vibrate([200]);
    }
    // MOBILE_NO :
    if(regex2.test(fmno)){  
        console.log(regex2.test(fmno));
        errm2.innerHTML = "";
        logo2.classList.remove("fa-circle-exclamation");
        logo2.classList.add("fa-check");
        logo2.style.color = "green";
        logo2.style.top = "-2rem";
        sfield.style.border = "1px solid green";
    }
    else{
        console.log('not match1');
        errm2.innerHTML = "please enter valid Mobile No.";
        errm2.style.color = "red"
        logo2.style.display = "visible";
        logo2.style.color = "red";
        logo2.classList.remove("fa-check");
        logo2.classList.add("fa-circle-exclamation");
        logo2.style.top = "-3.4rem";
        sfield.style.border = "1px solid red";
        sfield.style.animation = "shake 0.2s ease-in-out 0s 2";
        navigator.vibrate([200]);
    }
 
    if(fmno.length == 0){
        console.log('not match2');
        errm2.innerHTML = "please enter Mobile No.";
        errm2.style.color = "red"
        logo2.classList.remove("fa-check");
        logo2.classList.add("fa-circle-exclamation");
        logo2.style.top = "-3.4rem";
        sfield.style.border = "1px solid red";
        sfield.style.animation = "shake 0.2s ease-in-out 0s 2";
        navigator.vibrate([200]);
    }
  
} 

const checkname = () => {
    let regex1 = /^([A-Za-z\s]{9,16})+$/;
    let fname = document.querySelector('#fname').value;
    let ffield = document.querySelector('#fname');
    let logo = document.querySelector('.changelogo1');
    if(regex1.test(fname)){  
        console.log(regex1.test(fname));
        errm1.innerHTML = "";
        logo.classList.remove("fa-circle-exclamation");
        logo.classList.add("fa-check");
        logo.style.color = "green";
        logo.style.top = "-2rem";
        ffield.style.border = "1px solid green";
    }
    else if(fname.length == 0){
        errm1.innerHTML = "please enter name.";
        errm1.style.color = "red"
        logo.style.display = "visible";
        logo.style.color = "red";
        logo.classList.remove("fa-check");
        logo.classList.add("fa-circle-exclamation");
        logo.style.top = "-3.4rem";
        ffield.style.border = "1px solid red";
       
    }
    else{
        console.log('not match');
        errm1.innerHTML = "please enter valid name.";
        errm1.style.color = "red"
        logo.style.display = "visible";
        logo.style.color = "red";
        logo.classList.remove("fa-check");
        logo.classList.add("fa-circle-exclamation");
        logo.style.top = "-3.4rem";
        ffield.style.border = "1px solid red";
        
    }
}

const checkmno = () => {
    let regex2 = /^([0-9]{10})+$/;
    let fmno = document.querySelector('#mno').value;
    let sfield = document.querySelector('#mno');
    let logo = document.querySelector('.changelogo2');
    if(regex2.test(fmno)) {  
        console.log(regex2.test(fmno));
        errm2.innerHTML = "";
        logo.classList.remove("fa-circle-exclamation");
        logo.classList.add("fa-check");
        logo.style.color = "green";
        logo.style.top = "-2rem";
        sfield.style.border = "1px solid green";
    }
    else if(fmno.length == 0){
        errm2.innerHTML = "please enter Mobile No.";
        errm2.style.color = "red"
        logo.style.display = "visible";
        logo.style.color = "red";
        logo.classList.remove("fa-check");
        logo.classList.add("fa-circle-exclamation");
        logo.style.top = "-3.4rem";
        sfield.style.border = "1px solid red";
       
    }
    else{
        console.log('not match');
        console.log(regex1.test(fmno));
        errm2.innerHTML = "please enter valid Mobile No.";
        errm2.style.color = "red"
        logo.style.display = "visible";
        logo.style.color = "red";
        logo.classList.remove("fa-check");
        logo.classList.add("fa-circle-exclamation");
        logo.style.top = "-3.4rem";
        sfield.style.border = "1px solid red";
        
    }
}

let cname = document.querySelector('#fname');
cname.addEventListener('input' , checkname); 

let cmno = document.querySelector('#mno');
cmno.addEventListener('input' , checkmno); 

let fdata = document.querySelector('#form_data');
fdata.addEventListener('submit' , fdatas); 



