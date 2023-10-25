const container = document.getElementById('container');
const box = document.querySelector('.box');

//Collect all boxes
const divElements = container.querySelectorAll('div');
console.log(divElements.length);

//Added eventListener by using the event target data and checking if it contains .box class
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    e.target.style.backgroundColor = 'black';
  };

});

//Computer-selection function
const getComputerMark = () => {
  const n = Math.floor(Math.random() * 9);
  return divElements[n].style.backgroundColor = 'red';

};

getComputerMark();
