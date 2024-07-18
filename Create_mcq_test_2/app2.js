

const putdata = async(elm) => {
    let url = "http://localhost:3000/mcq";
    let option = {
        method : "POST",
        headers : { 'Content-type': 'application/json'}, 
        body : JSON.stringify(elm)
    }
    let req = await fetch(url, option);
    let res = await req.json();
    if(res){
        alert("Put The Data In server.");
    }
}

const getdata = (e) => {   
    e.preventDefault();
    let data = {
        "qus": document.querySelector("#q").value,
        "a": document.querySelector("#f").value,
        "b": document.querySelector("#s").value,
        "c": document.querySelector("#t").value,
        "d": document.querySelector("#fo").value,
        "right": document.querySelector("#r").value
    }
    
    putdata(data);
}

let fdata = document.querySelector("#formdata");
fdata.addEventListener("submit", getdata);