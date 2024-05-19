dice = document.querySelector('.dies');
roll_btn = document.querySelector('.roll');

const rolling = (random) => {
 
    dice.style.animation = 'move 4s';

    setTimeout(() => {
        
        switch (random){
            case 1 : 
            dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
            break;
            case 2 : 
            dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
            break;
            case 3 : 
            dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
            break;
            case 4 : 
            dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
            break;
            case 5 : 
            dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
            break;
            case 6 : 
            dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
            break;
            default:
                break;
        }
        dice.style.animation = 'none';
    }, 4040);
}

const random_gen = () => {
    let random = Math.round(Math.random() * 10);

    if(random > 0 && random < 7){
        rolling(random);
        // console.log(random);
    }
    else
    {
        random_gen();
    }
}

roll_btn.addEventListener('click',random_gen);