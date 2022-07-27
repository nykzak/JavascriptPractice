import radioPlayerInit from './radioPlayer.js';
import videoPlayerInit from './videoPlayer.js';
import musicPlayerInit from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
playerBlock = document.querySelectorAll('.player-block'),
temp = document.querySelector('.temp');

const deactivationPlayer = () => {
    temp.style.display= 'none';
    playerBtn.forEach(item=> {
    item.classList.remove('active')});
    playerBlock.forEach(item=> {
    item.classList.remove('active')});
    musicPlayerInit.d();
    videoPlayerInit.d();
    radioPlayerInit.d();

};


playerBtn.forEach((btn,i)=>{
    btn.addEventListener('click',() =>{
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })
});




radioPlayerInit();
videoPlayerInit();
musicPlayerInit();