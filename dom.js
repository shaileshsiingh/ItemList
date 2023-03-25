// headerTitle = document.getElementById('header-title')
// header = document.getElementById('main-header')
// headerTitle.style.border =  " solid 3px #000";

// var items = document.getElementsByClassName('list-group-item');
// // items[2].style.backgroundColor = 'green';

// for(let i = 0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     // items[i].style.color = 'green';
// }

// var li = document.getElementsByTagName('li');
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// var header = document.querySelector('#main-header');
// header.style.border = 'solid 4px blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display = 'none';


// var item = document.querySelectorAll('.list-group-item');
// item[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd')
// var even = document.querySelectorAll('li:nth-child(even')
// for(let i = 0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green'
//     even[i].style.backgroundColor = '#f4f4f4'
// }

//Travesing the DOM
//parentNode
let itemList = document.querySelector('#items')
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

//parentElement
// let itemList = document.querySelector('#items')
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'

//childNode
// console.log(itemList.childNodes)

//children
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'yellow'

// firstChild
// console.log(itemList.firstChild)
// firstElementChild
// console.log(itemList.firstElementChild);

// lastChild
// console.log(itemList.lastChild)
// //lastElementChild
// console.log(itemList.lastElementChild);


//nextSibling
// console.log(itemList.nextSibling)
// //prevSibling
// console.log(itemList.previousSibling)

//nextElementSibling
// console.log(itemList.nextElementSibling)
//prevElementSibling

// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green';

//create an element
//create a div
let newDiv = document.createElement('div')
//addClass
newDiv.claasName = 'hello';
//addId
newDiv.id ='hello1'
//addAtr
newDiv.setAttribute('title', 'hello');

//create text div
let newDivText = document.createTextNode('Hello world')

//add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
console.log(newDiv);
newDiv.style.fontSize ='30px'
container.insertBefore(newDiv,h1)

let listItem = document.querySelector('#items')
const newListItem = document.createElement('li');
newListItem.innerHTML = 'Hello World';
listItem.insertBefore(newListItem,itemList.firstChild)



