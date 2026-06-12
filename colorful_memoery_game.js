const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectCards =[];
let score = 0;
let timeleft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getE("game-container");
const scoreElement = document.getElementById('score');
const timerElement = documet.getElementById('timer');
function generateCards() {
for (const color of cards) {
    const card =document.createElement('div');
    cards.classList.add('card');
    cards.dataset.color = color;
    cards.tetxtContent = '?';
    gameContainer.appendChild(card);
}
}
function shuffle(array) {
    for (let i = arr.length-1; i >0; i--) {
        const j = math.floor(math.random() *([array[i],arr[j]] = [array[j],arr[i]]));
    }
    return array;
}
function handleCardClick(event) {
    const card =event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor =card.dataset.color;
    selectCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checlMatch,500);
    }
}
function checkMatch () {
    const [card1, card2] = selectCards;
    if (card1.dataset === card2.dataset){
        card1.classList.add('matched');
        card2.classList.add('matched');
        scoren +=2;
    } else {
        card1.textContent ='?';
        card2.textContent ='?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectCards = [];
}
function startGame() {
    let timeleft = 30;
    startbtn.disabled = true;
    score = 0;
    scoreElement.textContent ='score: ${score}';
    startGameTimer(timeleft);
    cards = shuffle(colors.concat(colors));
    selectCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListner('click',handleCardClcik);
}
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}
startbtn.addEventListener('click', startGame);
