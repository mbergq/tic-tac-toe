const container = document.getElementById('container');
//Collect all boxes
const divElements = container.querySelectorAll('div');

let box = document.querySelector('.box');

console.log(divElements.length);

//Added eventListener by using the event target data and checking if it contains .box class
container.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.classList.contains('box')) {
    e.target.style.backgroundColor = 'black';
  };
});
