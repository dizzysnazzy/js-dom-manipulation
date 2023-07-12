//-DOM MANIPULATION
//1. Styling Elements

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');
// for(i=0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '5rem';
// }

//2.Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');
//-adding Elements
ul.append(li)
//-Modifying the text
const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = 'X-men';
//-Modifying Attributes & Classes
li.setAttribute('id', 'main-heading');

li.removeAttribute('id');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));

li.classList.add('list-items');
console.log(li.classList.contains('list-items'));

li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));

//-Remove Elements 
li.remove();