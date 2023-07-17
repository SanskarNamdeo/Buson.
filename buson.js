var menu = document.getElementById('menu');
// var row = document.getElementById('row-2');
menu.style.maxHeight = '0px';
// row.style.maxHeight = '100%';

function menutoggle() {
  if (menu.style.maxHeight == '0px') {
    menu.style.maxHeight = '650px';  
  } else { 
    menu.style.maxHeight = '0px';
  } 
}  

