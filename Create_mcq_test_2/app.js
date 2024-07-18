let count = 0 ;
let l = 0;
const mapper = (data) => {
    l =1;
    let dr = document.querySelector(".dexam");
    dr.innerHTML = ""; 

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "100%";

    let in_card = document.querySelector("div");
    in_card.classList.add("card-body");
    
    // let title = document.querySelector("h5");
    // title.classList.add("card-title","mb-5","mt-5");
    // title.textContent = "JavaScript";
    
    data.map((elm,ind)=>{
        let qulist = document.createElement("div");
        qulist.classList.add("que","d-flex","mt-3");
        let qnum = document.createElement("h6");
        qnum.classList.add("qnum","mr-2");
        qnum.textContent = ind + 1+".";
        let cque = document.createElement("h6");
        cque.classList.add("card-question","mb-3","text-muted");
        cque.textContent = elm.qus;
        qulist.append(qnum,cque)

        let aws = document.createElement("div");
        aws.classList.add("awnserdisp","d-flex","justify-content-around","align-items-center","mb-5");

        let a = document.createElement("a");
        a.classList.add(`a`);
        a.textContent =  "A)."+ " " + elm.a 
        let b = document.createElement("a");
        b.classList.add("b");
        b.textContent =  "B)."+ " " + elm.b
        let c = document.createElement("a");
        c.classList.add("c");
        c.textContent =  "C)."+ " " + elm.c
        let d = document.createElement("a");
        d.classList.add("d");
        d.textContent =  "D)."+ " " + elm.d

        aws.append(a,b,c,d);
        in_card.append(qulist,aws);
        card.append(in_card)
        dr.append(card);


        a.onclick = function () {
            
            if (elm.right == elm.a) {
                count++;
                document.querySelector('.h3').innerHTML = 'Correct Awnser : ' + count;
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elm.right == elm.b) {
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elm.right == elm.c) {
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elm.right == elm.d) {
                            a.classList.add('wrong');
                            b.classList.add('wrong');
                            c.classList.add('wrong');
                            d.classList.add('right');
                        }
                        else{
                            console.log('Do nothing.');
                        }
                    }
                }
            }
        }
        b.onclick = function () {
            if (elm.right == elm.a) {
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elm.right == elm.b) {
                    count++;
                    document.querySelector('.h3').innerHTML = 'Correct Awnser : ' + count;
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elm.right == elm.c) {
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elm.right == elm.d) {
                            a.classList.add('wrong');
                            b.classList.add('wrong');
                            c.classList.add('wrong');
                            d.classList.add('right');
                        }
                        else{
                            console.log('Do nothing.');
                        }
                    }
                }
            }
        }
        c.onclick = function () {
            if (elm.right == elm.a) {
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elm.right == elm.b) {
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elm.right == elm.c) {
                        count++;
                        document.querySelector('.h3').innerHTML = 'Correct Awnser : ' + count;
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elm.right == elm.d) {
                            a.classList.add('wrong');
                            b.classList.add('wrong');
                            c.classList.add('wrong');
                            d.classList.add('right');
                        }
                        else{
                            console.log('Do nothing.');
                        }
                    }
                }
            }
        }
        d.onclick = function () {
            if (elm.right == elm.a) {
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elm.right == elm.b) {
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elm.right == elm.c) {
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elm.right == elm.d) {
                            count++;
                            document.querySelector('.h3').innerHTML = 'Correct Awnser : ' + count;
                            a.classList.add('wrong');
                            b.classList.add('wrong');
                            c.classList.add('wrong');
                            d.classList.add('right');
                        }
                        else{
                            console.log('Do nothing.');
                        }
                    }
                }
            }
        }


    })



    //? Disabled Start Button :
    if(l == 1){
        document.querySelector(".strtexam").classList.add("disabled");
    }
}


document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
})

const getapi = (async() => {
    let req = await fetch(`http://localhost:3000/mcq`);
    let res = await req.json();
    console.log(res);
    document.querySelector(".strtexam").addEventListener("click",()=>mapper(res));
    console.log(l);
    // mapper(res);
})()

//? Camera code
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Request access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // Display the video stream in a video element
            var video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            document.body.appendChild(video);
        })
        .catch(function(error) {
            console.error('Error accessing the camera: ', error);
        });
} else {
    console.error('getUserMedia is not supported');
}

document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    
})

//? change tab

let chtab  ;
document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      chtab = "tab is active";
      console.log("tab is active");
    } else {
       chtab = "tab is inactive";
       console.log("tab is inactive");
       location.href = "./another.html";
       localStorage.setItem("chtab","true");
    }
  });

  if(localStorage.getItem("chtab")){
    location.href = "./another.html";
  }