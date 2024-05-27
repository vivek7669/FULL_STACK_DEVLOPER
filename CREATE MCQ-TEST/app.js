let data = [];
let count = 0;

const putdata = () => {
    let questions = document.querySelector('.cards');
    questions.innerText = '';

    data.map((elem, ind, arr) => {
        let box = document.createElement('div');
        box.classList.add('card', 'd1');
        let question = document.createElement('div');
        question.classList.add('card-title');
        let a = document.createElement('div');
        a.classList.add('card-text');
        let b = document.createElement('div');
        b.classList.add('card-text');
        let c = document.createElement('div');
        c.classList.add('card-text');
        let d = document.createElement('div');
        d.classList.add('card-text');

        question.innerText = ind+1 +'. ' +  elem.ques;
        a.innerText = 'A. '+ elem.A;
        b.innerText = 'B. '+ elem.B;
        c.innerText = 'C. '+ elem.C;
        d.innerText = 'D. '+ elem.D;

        box.append(question, a, b, c, d);
        questions.append(box);

        a.onclick = function () {
            
            if (elem.right == elem.A) {
                count++;
                document.querySelector('.h3').innerHTML = 'Correct Awnser : ' + count;
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elem.right == elem.B) {
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elem.right == elem.C) {
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elem.right == elem.D) {
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
            if (elem.right == elem.A) {
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elem.right == elem.B) {
                    count++;
                    document.querySelector('.h3').innerHTML = 'Correct Awnser : ' + count;
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elem.right == elem.C) {
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elem.right == elem.D) {
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
            if (elem.right == elem.A) {
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elem.right == elem.B) {
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elem.right == elem.C) {
                        count++;
                        document.querySelector('.h3').innerHTML = 'Correct Awnser : ' + count;
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elem.right == elem.D) {
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
            if (elem.right == elem.A) {
                a.classList.add('right');
                b.classList.add('wrong');
                c.classList.add('wrong');
                d.classList.add('wrong');
            } else {
                if (elem.right == elem.B) {
                    a.classList.add('wrong');
                    b.classList.add('right');
                    c.classList.add('wrong');
                    d.classList.add('wrong');
                }
                else {
                    if (elem.right == elem.C) {
                        a.classList.add('wrong');
                        b.classList.add('wrong');
                        c.classList.add('right');
                        d.classList.add('wrong');
                    }
                    else{
                        if (elem.right == elem.D) {
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

}


const getdata = (e) => {
    e.preventDefault();
    let que = document.querySelector("#que").value;
    let one = document.querySelector("#one").value;
    let two = document.querySelector("#two").value;
    let three = document.querySelector("#three").value;
    let four = document.querySelector("#four").value;
    let tru = document.querySelector("#True").value;

    const obj1 = {
        ques: que,
        A: one,
        B: two,
        C: three,
        D: four,
        right: tru,
    }
    data.push(obj1);
    putdata();
}

let f_data = document.querySelector("#formdata");
f_data.addEventListener("submit", getdata);

