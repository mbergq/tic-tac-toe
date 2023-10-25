const container = document.getElementById('container');
const box = document.querySelector('.box');

//Collect all boxes
const divElements = container.querySelectorAll('div');


//Added eventListener by using the event target data and checking if it contains .box class
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    e.target.style.backgroundColor = 'black';
  };
});

//Computer mark-selection function

function getRandomNum() {
  return Math.floor(Math.random() * 10);
};

console.log(getRandomNum());
console.log(divElements[getRandomNum()]);
/*This works but sometimes it outputs
'undefined', i might have to run this in a more focused area to prevent it ever
"not seeing" the array.*/

//The getRandomNum function runs 2 slow sometimes which leaves the index undefined
