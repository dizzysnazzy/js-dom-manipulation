//-DOM MANIPULATION
//-Event Delegation
//-It allows users to append a SINGLE event listener
// -to a parent element that adds it to all of its
// -present and future descendants that match a selector.

document.querySelector('#sports').addEventListener("click", function(e) {
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target =e.target;
    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
    // alert(e.target.getAttribute('id') + ' is clicked');
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby'); //-id="rugby"
newSport.setAttribute('class', 'games'); //-class="games"
sports.appendChild(newSport);