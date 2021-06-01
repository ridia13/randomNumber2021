'use strict';

const $numbers = document.querySelector('.js-numbers'),
  $bonus = document.querySelector('.js-bonus');
let mixNumbers = [];

function shuffle(range, num) { //숫자 무작위 섞기
  const numbers = Array(range).fill().map((v, i) => i + num); //1~45
  while (numbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    mixNumbers.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
}

function numColor(number, $target) {
  if (number < 10) {
    $target.style.backgroundColor = "red";
    $target.style.color = "#fff";
  } else if (number < 20) {
    $target.style.backgroundColor = "gold";
  } else if (number < 30) {
    $target.style.backgroundColor = "green";
    $target.style.color = "#fff";
  } else if (number < 40) {
    $target.style.backgroundColor = "blue";
    $target.style.color = "#fff";
  } else {
    $target.style.backgroundColor = "#999";
  }
}

function paintNum(number, $target) { //숫자 그리기
  const $ball = document.createElement('div');
  $ball.textContent = number;
  numColor(number, $ball);
  $ball.className = 'ball';
  $target.appendChild($ball);
}

function result() { //결과 출력
  const pickNums = mixNumbers.slice(0, 6).sort((a, b) => a - b);
  const bonus = mixNumbers[6];
  for (let i = 0; i < pickNums.length; i++) {
    setTimeout(() => {
      paintNum(pickNums[i], $numbers)
    }, (i + 1) * 1000);
  }

  setTimeout(() => {
    paintNum(bonus, $bonus)
  }, 7000);

  console.log(pickNums);
  console.log(bonus);
}

function init() {
  shuffle(45, 1);
  result();
  console.log(mixNumbers);
}

init();