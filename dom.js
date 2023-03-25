headerTitle = document.getElementById('header-title')
header = document.getElementById('main-header')
headerTitle.style.border =  " solid 3px #000";

var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

for(let i = 0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
    // items[i].style.color = 'green';
}

var li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = '#f4f4f4';
}





