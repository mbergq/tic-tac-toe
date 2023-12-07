const container = document.getElementById('container');
const box = document.querySelector('.box');

const getNodeList = container.querySelectorAll('.box');


//Set false state on boxes
for (let i = 0; i < getNodeList.length; i++) {

  getNodeList[i].setAttribute("tag", "false");
}

//Game function
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
    resetArray();
  })
}

//Put nodelist in an array / turn array-like into array
let arrayOfNodes = Array.prototype.slice.call(getNodeList);

let arrayOfIndexes = [];

//Function to run after each click to reset array of possible indexes
function resetArray() {
  arrayOfIndexes = [];
}

let uniqueArray;

const putAvailableIndexesInArray = () => {


  for (let i = 0; i < 9; i++) {

    if (arrayOfNodes[i].attributes[1].nodeValue === "false") {

      let index = arrayOfNodes.indexOf(getNodeList[i]);

      arrayOfIndexes.push(index);
      uniqueArray = Array.from(new Set(arrayOfIndexes));

    }

  }

  //Computer select
  const n = Math.floor(Math.random() * uniqueArray.length);
  let num = uniqueArray[n];

  if (getNodeList[num].getAttribute("tag") === "false") {

    getNodeList[num].style.backgroundColor = 'red';
    getNodeList[num].setAttribute("tag", "true");

  }


  console.log(uniqueArray);
}
