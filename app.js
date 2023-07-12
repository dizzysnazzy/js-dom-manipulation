//-DOCUMENTS MANIPULATION

//-GetElementById()
const title = document.getElementById('main-heading'); 
console.log(title);

//-GetElementByClassName()
const listItems = document.getElementsByClassName('list-items');
console.log(listItems)

//-GetElementByTagName()
const listItem = document.getElementsByTagName('li');
console.log(listItem)

//-querySelector
const container = document.querySelector('div');
console.log(container);  //selects first div

//-querySelectorAll
const containers = document.querySelectorAll('div');
console.log(containers);  //selects all divs