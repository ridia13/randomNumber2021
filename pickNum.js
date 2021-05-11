'use strict';

const RANGE_NUM = 9;
const pickBtn = document.querySelector('.js-pick');
const numbers = document.querySelector('.js-numbers'),
  allNum = numbers.querySelectorAll('li');

function makeRandom() {
  const random = Math.round(Math.random() * RANGE_NUM);
  return random;
}

function printNum() {
  allNum.forEach((value) => {
    value.innerText = makeRandom();
  })
}

function init() {
  pickBtn.addEventListener('click',printNum);
}

init();