let outer_part = document.querySelector('.outer');
let inner_part = document.querySelector('.inner');
let number = [];
let second_number = [];
let ampm ;


for(let i=1;i<=12;i++){
    number.push( `<span style="--index:${i}"> <p> ${i} </p> </span>` );
}
for(let i=2;i<=61;i++){
    second_number.push( `<span class="till" style="--sindex:${i}"><p></p></span>` );
}
inner_part.insertAdjacentHTML('beforeend',number.join(''));
outer_part.insertAdjacentHTML('beforeend',second_number.join(''));

const time = () =>{
    let date = new Date();
    let hours = date.getHours() * 30;
    let minutes = date.getMinutes() * 6;
    let seconds = date.getSeconds() *6;

    let hourp = document.querySelector('.had-hour'); 
    let minutep = document.querySelector('.had-minute'); 
    let secondp = document.querySelector('.had-second'); 

    hourp.style.transform = `rotate( calc( ${hours + minutes / 12}deg )  ) `;
    minutep.style.transform = `rotate( calc(${minutes}deg ) ) `;
    secondp.style.transform = `rotate( calc(${seconds}deg) ) `;

}
const timetext = () =>{
    let date = new Date();
    let hours = date.getHours();
    let dates = date.getDate();
    let day = date.getDay();

    switch(day){
        case 0 : 
        day = 'Sun';
        break;
        case 1 : 
        day = 'Mon';
        break;
        case 2 : 
        day = 'Tue';
        break;
        case 3 : 
        day = 'Wed';
        break;
        case 4 : 
        day = 'Thu';
        break;
        case 5 : 
        day = 'Fri';
        break;
        case 6 : 
        day = 'Sat';
        break;

    }

    if(hours >= 12){
        hours = hours - 12;
        ampm = 'PM';
    }
    else{
        ampm = 'AM';
    }
    if(hours == 0){ hours=12} ;
    
    inner_part.insertAdjacentHTML("afterbegin",`<div class='day-date'>${dates} | ${day}</div>`);
    inner_part.insertAdjacentHTML("afterbegin",`<div class='ampm'>${ampm}</div>`);
}

timetext()
setInterval((()=>{
    time();
}),1000)

