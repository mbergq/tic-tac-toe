const container = document.getElementById('container');
const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box');
//Collect all boxes
const computerSelector = container.querySelectorAll('.box');

//Computer-selection function
const getComputerMark = () => {
  const n = Math.floor(Math.random() * 9);
  return computerSelector[n].style.backgroundColor = 'red';
};

//Add event listeners to every box
for (let i = 0; i < boxes.length; i++) {
  //Set att state to false
  boxes[i].setAttribute("tag", "false");

  boxes[i].addEventListener('click', (e) => {
    e.target.setAttribute("tag", "true");
    console.log(e.target);

  })
}
