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
  })
}

console.log(getNodeList);

console.log(getNodeList[0].attributes[1].nodeValue === "false"); //This condition works
