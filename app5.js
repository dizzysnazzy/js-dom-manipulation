//-DOM MANIPULATION
//-Event Probagation

window.addEventListener("click", function() {
    console.log('Window');
},true);

document.addEventListener("click", function() {
    console.log('Document');
},true);

document.querySelector(".div2").addEventListener("click", function(e) {
    // e.stopPropagation(); //this line stops the propergation here at DIV 2
    console.log('DIV 2');
},true);

document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
},true);

document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText = 'clicked!');
},true);


// //-CHANGE ALL THE ABOVE TO false EXCEPT DIV 2 WHICH WILL BE AS BELOW
// document.querySelector(".div2").addEventListener("click", function() {
//     console.log('DIV 2');
// },{once: true}); //-This line means it will probergate once


// //-preventDefault prevents the <a> from its default of redirecting when clicked
// document.querySelector(".but").addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log(e.target.innerText = 'clicked!');
// },false);