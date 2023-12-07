const container = document.getElementById('container');
const box = document.querySelector('.box');

const getNodeList = container.querySelectorAll('.box');

// Computer-selection function

const getComputerMark = () => {
  const n = Math.floor(Math.random() * 9);

  console.log(n);
  if (getNodeList[n].getAttribute("tag") === "false") {
    getNodeList[n].style.backgroundColor = 'red';
    getNodeList[n].setAttribute("tag", "true");
  }

};

//Set states
for (let i = 0; i < getNodeList.length; i++) {

  getNodeList[i].setAttribute("tag", "false");
}

for (let i = 0; i < getNodeList.length; i++) {
  getNodeList[i].addEventListener('click', (e) => {


    if (e.target.getAttribute("tag") === "false") {
      e.target.setAttribute("tag", "true");
      e.target.style.backgroundColor = 'blue';
      getComputerMark();
    }
    else {
      return;
    }
    getEmptyBoxes();
    resetArray();
  })
}

//Put nodelist in an array
let arrayOfNodes = Array.prototype.slice.call(getNodeList);

console.log(getNodeList[0].attributes[1].nodeValue === "false"); //This condition works

let arrayOfIndexes = [];

function resetArray() {
  arrayOfIndexes = [];
}

let uniqueArray;
const getEmptyBoxes = () => {


  for (let i = 0; i < 9; i++) {

    if (arrayOfNodes[i].attributes[1].nodeValue === "false") {
      let index = arrayOfNodes.indexOf(getNodeList[i]);

      arrayOfIndexes.push(index);
      uniqueArray = Array.from(new Set(arrayOfIndexes));



    }
    if (arrayOfNodes[i].attributes[1].nodeValue === "false") {
      // console.log(arrayOfNodes[i]);
      console.log(arrayOfNodes.indexOf(getNodeList[i]));
    }
  }
  console.log(uniqueArray);
}
