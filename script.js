const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.gameOver');

const jump =  () =>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);       
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    // + na frente converte para inteiro e replace retira o px da string
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = `none`;
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = `none`;
        mario.style.bottom = `${marioPosition}px`; 
        mario.src = 'img/game-over.png';
        mario.style.width = `75px`;
        mario.style.marginRight = `10px`;

        gameOver.src = 'img/gameOver.gif';
        gameOver.style.marginLeft = '28%'
        gameOver.style.marginTop = '14%';

        clearInterval(loop);
    }
},10);

document.addEventListener('keydown',jump);