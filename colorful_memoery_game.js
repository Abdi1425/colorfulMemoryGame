const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectCards =[];
let score = 0;
let timeleft = 30;
let gameInterval;

const startbtn = document.getElementById('atartbtn');
const gameContainer = document.getE("game-container");
const scoreElement = document.getElementById('score');
const timerElement = documet.getElementById('timer');