headerTitle = document.getElementById('header-title')
header = document.getElementById('main-header')
headerTitle.style.border =  " solid 3px #000";

var items = document.getElementsByClassName('list-group-item');
for(let i = 0; i<=items.length; i++){
    items[i].style.fontWeight = "bold";
    items[i].style.color = 'green'
}
