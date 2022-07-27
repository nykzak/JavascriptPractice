var start = document.querySelector('#start');
var game = document.querySelector('#game');
var time = document.querySelector('#time');
var result = document.querySelector('#result');
var timeHeader = document.querySelector('#time-header');
var resultHeader = document.querySelector('#result-header');
var score = 0;
var isGameStarted = false;
var gameTime = document.querySelector('#game-time');

start.addEventListener('click', startGame);
game.addEventListener('click', handleBoxClick);
gameTime.addEventListener('input' , setGameTime);


function show (el){
	el.classList.remove('hide');

}

function hide(el){
	el.classList.add('hide');

}

function startGame() {
	score = 0;
	setGameTime()
	gameTime.setAttribute('disabled','true');
 
  isGameStarted = true;
  game.style.backgroundColor = '#fff';

 hide(start);

  const interval = setInterval(function(){
  	 var clock = parseFloat(time.textContent);

  	if(clock  <= 0){
  		clearInterval(interval);
  		endGame();
  	}else{
  		time.textContent = (clock - 0.1).toFixed(1);

  	}

  }, 100);

  renderBox();
};

function setGameScore(){
	result.textContent = score.toString();
}

function setGameTime(){
	var secs = +gameTime.value;
	time.textContent = secs.toFixed(1); 
 	show(timeHeader);
 	hide(resultHeader);
}

function endGame(){
 isGameStarted = false;
 setGameScore();
 gameTime.removeAttribute('disabled');
 show(start);
 game.innerHTML= '';
 game.style.backgroundColor = '#ccc';
hide(timeHeader);
show(resultHeader);
}

function handleBoxClick(event){
	if(!isGameStarted) {
		return 
	}

	if(event.target.dataset.box){
		score ++;
		renderBox();
	}

};
 function getRandomColor() {
                
                var letters = '0123456789ABCDEF'.split('');
    
                var color = '#';
    
                for (var i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;

            };

function renderBox() {
	game.innerHTML = '';

	const box = document.createElement('div');
	const boxSize = getRandom(30, 100);
	const gameSize = game.getBoundingClientRect();
	const maxTop = gameSize.height - boxSize;
	const maxLeft = gameSize.width - boxSize;

	box.style.backgroundColor = getRandomColor();
	box.style.height = box.style.width = boxSize + 'px';
	box.style.position = 'absolute';
	box.style.top = getRandom(0, maxTop) + 'px'
	box.style.left = getRandom(0, maxLeft) + 'px'
	box.style.cursor = 'pointer';
	box.setAttribute('data-box' , 'true');

	game.insertAdjacentElement('afterbegin' , box);
};


function getRandom(min , max){
	return Math.floor(Math.random() * (max - min) + min) ;

}