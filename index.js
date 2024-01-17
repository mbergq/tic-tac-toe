const container = document.getElementById('container');
const box = document.querySelector('.box');

const getNodeList = container.querySelectorAll('.box');


//Set false state on boxes
for (let i = 0; i < getNodeList.length; i++) {

  getNodeList[i].setAttribute("tag", "false");
}

//Code to let user mark upon click
for (let i = 0; i < getNodeList.length; i++) {
  getNodeList[i].addEventListener('click', (e) => {


    if (e.target.getAttribute("tag") === "false") {
      e.target.setAttribute("tag", "true");
      e.target.style.backgroundColor = 'blue';
    }
    else {
      return;
    }
    putAvailableIndexesInArray();
    //Reset array to avoid having duplicates
    resetArray();

    checkWinUser();
    checkWinComputer();
  })
}

//Put nodelist in an array / turn array-like into array
let arrayOfNodes = Array.prototype.slice.call(getNodeList);

let arrayOfIndexes = [];

//Function to run after each click to reset array of possible indexes
function resetArray() {
  arrayOfIndexes = [];
}

//Declare variable to hold only unique numbers
let uniqueArray;

const putAvailableIndexesInArray = () => {


  for (let i = 0; i < 9; i++) {

    if (arrayOfNodes[i].attributes[1].nodeValue === "false") {

      let index = arrayOfNodes.indexOf(getNodeList[i]);

      arrayOfIndexes.push(index);
      //Filter out duplicate numbers and put them into an array
      uniqueArray = Array.from(new Set(arrayOfIndexes));

    }

  }


  const n = Math.floor(Math.random() * uniqueArray.length);
  let num = uniqueArray[n];

  //Computer selection function
  function runComputerMark() {
    if (getNodeList[num].getAttribute("tag") === "false") {

      getNodeList[num].style.backgroundColor = 'red';
      getNodeList[num].setAttribute("tag", "true");

    }
  }

  runComputerMark();

  console.log(uniqueArray);
}

//Conditions to check for winner
function checkWinUser() {

  if (
    getNodeList[0].style.backgroundColor === 'blue'
    && getNodeList[1].style.backgroundColor === 'blue'
    && getNodeList[2].style.backgroundColor === 'blue'
  ) {
    console.log("Top row is blue");
  }

  if (
    getNodeList[3].style.backgroundColor === 'blue'
    && getNodeList[4].style.backgroundColor === 'blue'
    && getNodeList[5].style.backgroundColor === 'blue'
  ) {
    console.log("Middle row is blue");
  }

  if (
    getNodeList[6].style.backgroundColor === 'blue'
    && getNodeList[7].style.backgroundColor === 'blue'
    && getNodeList[8].style.backgroundColor === 'blue'
  ) {
    console.log("Bottom row is blue");
  }

  if (
    getNodeList[0].style.backgroundColor === 'blue'
    && getNodeList[3].style.backgroundColor === 'blue'
    && getNodeList[6].style.backgroundColor === 'blue'
  ) {
    console.log("Left column is blue");
  }

  if (
    getNodeList[1].style.backgroundColor === 'blue'
    && getNodeList[4].style.backgroundColor === 'blue'
    && getNodeList[7].style.backgroundColor === 'blue'
  ) {
    console.log("Middle column is blue");
  }

  if (
    getNodeList[2].style.backgroundColor === 'blue'
    && getNodeList[5].style.backgroundColor === 'blue'
    && getNodeList[8].style.backgroundColor === 'blue'
  ) {
    console.log("Right column is blue");
  }

  if (
    getNodeList[0].style.backgroundColor === 'blue'
    && getNodeList[4].style.backgroundColor === 'blue'
    && getNodeList[8].style.backgroundColor === 'blue'
  ) {
    console.log("Top left to bottom right is blue");
  }

  if (
    getNodeList[2].style.backgroundColor === 'blue'
    && getNodeList[4].style.backgroundColor === 'blue'
    && getNodeList[6].style.backgroundColor === 'blue'
  ) {
    console.log("Top right to bottom left is blue");
  }

}

function checkWinComputer() {

  if (
    getNodeList[0].style.backgroundColor === 'red'
    && getNodeList[1].style.backgroundColor === 'red'
    && getNodeList[2].style.backgroundColor === 'red'
  ) {
    console.log("Top row is red");
  }

  if (
    getNodeList[3].style.backgroundColor === 'red'
    && getNodeList[4].style.backgroundColor === 'red'
    && getNodeList[5].style.backgroundColor === 'red'
  ) {
    console.log("Middle row is red");
  }

  if (
    getNodeList[6].style.backgroundColor === 'red'
    && getNodeList[7].style.backgroundColor === 'red'
    && getNodeList[8].style.backgroundColor === 'red'
  ) {
    console.log("Bottom row is red");
  }

  if (
    getNodeList[0].style.backgroundColor === 'red'
    && getNodeList[3].style.backgroundColor === 'red'
    && getNodeList[6].style.backgroundColor === 'red'
  ) {
    console.log("Left column is red");
  }

  if (
    getNodeList[1].style.backgroundColor === 'red'
    && getNodeList[4].style.backgroundColor === 'red'
    && getNodeList[7].style.backgroundColor === 'red'
  ) {
    console.log("Middle column is red");
  }

  if (
    getNodeList[2].style.backgroundColor === 'red'
    && getNodeList[5].style.backgroundColor === 'red'
    && getNodeList[8].style.backgroundColor === 'red'
  ) {
    console.log("Right column is red");
  }

  if (
    getNodeList[0].style.backgroundColor === 'red'
    && getNodeList[4].style.backgroundColor === 'red'
    && getNodeList[8].style.backgroundColor === 'red'
  ) {
    console.log("Top left to bottom right is red");
  }

  if (
    getNodeList[2].style.backgroundColor === 'red'
    && getNodeList[4].style.backgroundColor === 'red'
    && getNodeList[6].style.backgroundColor === 'red'
  ) {
    console.log("Top right to bottom left is red");
  }

}
