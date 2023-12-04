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

//Add event listeners to every box
for (let i = 0; i < getNodeList.length; i++) {
  //Set attribute state to false
  getNodeList[i].setAttribute("tag", "false");
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
  })
}

//Put nodelist in an array
let arrayOfNodes = Array.prototype.slice.call(getNodeList);

console.log(getNodeList[0].attributes[1].nodeValue === "false"); //This condition works

let arrayOfIndexes = [];
let uniqueArray;
const getEmptyBoxes = () => {

  for (let i = 0; i < 9; i++) {

    if (arrayOfNodes[i].attributes[1].nodeValue === "false") {
      let index = arrayOfNodes.indexOf(getNodeList[i]);

      arrayOfIndexes.push(index);
      uniqueArray = Array.from(new Set(arrayOfIndexes));



    }
  }//Do i have to wrap this into a function to reiterate?
  console.log(arrayOfIndexes);
  console.log(uniqueArray);
}


// function removeDuplicates(arrayOfIndexes) {
//   return arrayOfIndexes.filter((item, ind) => arrayOfIndexes.indexOf(item) === ind);
// }
// arrayOfIndexes = removeDuplicates(arrayOfIndexes);
