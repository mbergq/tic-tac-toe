const container = document.getElementById('container');
const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box');
//Collect all boxes
const computerSelector = container.querySelectorAll('.box');

// Computer-selection function

const getComputerMark = () => {
  const n = Math.floor(Math.random() * 9);

  console.log(n);
  if (computerSelector[n].getAttribute("tag") === "false") {
    computerSelector[n].style.backgroundColor = 'red';
    computerSelector[n].setAttribute("tag", "true");
  }

};

//Add event listeners to every box
for (let i = 0; i < boxes.length; i++) {
  //Set att state to false
  boxes[i].setAttribute("tag", "false");
  boxes[i].addEventListener('click', (e) => {

    if (e.target.getAttribute("tag") === "false") {
      e.target.setAttribute("tag", "true");
      e.target.style.backgroundColor = 'blue';
      getComputerMark();
    }
    else {
      return;
    }
  })
}

//If e.target.getattribute tag = true
//
