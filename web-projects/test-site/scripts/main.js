const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === '/Users/oguz/Documents/projects/mozilla-js/web-projects/test-site/images/demo.png') {
    myImage.setAttribute('src','/Users/oguz/Documents/projects/mozilla-js/web-projects/test-site/images/demo2.png');
  } else {
    myImage.setAttribute('src','/Users/oguz/Documents/projects/mozilla-js/web-projects/test-site/images/demo.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = () => {
    setUserName();
  } 
function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Giga is cool, ${myName}`;
    }
  }  
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  