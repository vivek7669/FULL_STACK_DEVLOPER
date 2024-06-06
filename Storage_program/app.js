// let count = localStorage.getItem('count');

// document.querySelector('.pill_box1').innerText = count;

// const counter = (e) => {
//     console.log(e);
//     count++;
//     localStorage.setItem(`${e}`, count);
//     document.querySelector(`.pill_box${e}`).innerText = count;
// }

// let alli = Object.entries(document.querySelectorAll('i')); // convert json to array
// console.log(alli[0][0]);

//     let like = document.querySelector('.fa-thumbs-up');
//     like.addEventListener('click',()=> counter(alli[0][0]));

//     let dislike = document.querySelector('.fa-thumbs-down');
//     dislike.addEventListener('click',()=> counter(alli[1][0]));

//     let comment = document.querySelector('.fa-comments');
//     comment.addEventListener('click',()=> counter(alli[2][0]));

//     let share = document.querySelector('.fa-share');
//     share.addEventListener('click',()=> counter(alli[3][0]));

//     let subscribe = document.querySelector('.fa-bell');
//     subscribe.addEventListener('click',()=> counter(alli[4][0]));

// document.querySelector(`.pill_box${index}`).innerText = count;

let count0 = localStorage.getItem('count_0');
let count1 = localStorage.getItem('count_1');
let count2 = localStorage.getItem('count_2');
let count3 = localStorage.getItem('count_3');
let count4 = localStorage.getItem('count_4');
document.querySelector(`.pill_box0`).innerText = count0;
document.querySelector(`.pill_box1`).innerText = count1;
document.querySelector(`.pill_box2`).innerText = count2;
document.querySelector(`.pill_box3`).innerText = count3;
document.querySelector(`.pill_box4`).innerText = count4;

const getCount = (index) => {
    return localStorage.getItem(`count_${index}`) ? parseInt(localStorage.getItem(`count_${index}`)) : 0;
}

const setCount = (index, count) => {
    localStorage.setItem(`count_${index}`, count);
}

const updatePillBox = (index, count) => {
    document.querySelector(`.pill_box${index}`).innerText = count;
}

const counter = (index) => {
    let count = getCount(index);
    count++;
    setCount(index, count);
    updatePillBox(index, count);
}

let alli = Object.entries(document.querySelectorAll('i')); // convert NodeList to array
console.log(alli[0][0]);

let like = document.querySelector('.fa-thumbs-up');
like.addEventListener('click', () => counter(0));

let dislike = document.querySelector('.fa-thumbs-down');
dislike.addEventListener('click', () => counter(1));

let comment = document.querySelector('.fa-comments');
comment.addEventListener('click', () => counter(2));

let share = document.querySelector('.fa-share');
share.addEventListener('click', () => counter(3));

let subscribe = document.querySelector('.fa-bell');
subscribe.addEventListener('click', () => counter(4));
