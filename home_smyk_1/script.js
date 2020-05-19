 function cleanerOfStyles() {
     var cleanStyles = document.getElementById('List').childNodes;
     for (var i = 0; i < cleanStyles.length; i++) {
         cleanStyles[i].style.fontWeight = 'normal';
     }
 }

 function selectItem() {
     var allItems = document.getElementById('List').childNodes;
     var selectedItem;
     for (var i = 0; i < allItems.length; i++) {
         if (allItems[i].style.fontWeight == 'bold') {
             selectedItem = allItems[i];
         }
     }
     return selectedItem;
 }

 function getFirst() {
     cleanerOfStyles();
     var firstChild = document.getElementById('List').firstChild;
     firstChild.style.fontWeight = 'bold';
 }

 function getLast() {
     cleanerOfStyles();
     var lastChild = document.getElementById('List').lastChild;
     lastChild.style.fontWeight = 'bold';
 }

 function getNext() {
     var selectedItem = selectItem();
     cleanerOfStyles();
     var nextItem = selectedItem.nextSibling;
     nextItem.style.fontWeight = 'bold'
 }

 function getPrevious() {
     var selectedItem = selectItem();
     cleanerOfStyles();
     var previousItem = selectedItem.previousSibling;
     previousItem.style.fontWeight = 'bold'
 }

 function addElement() {
     cleanerOfStyles();
     var newItem = document.createElement("li");
     newItem.innerHTML = 'Новый элемент';
     document.getElementById('List').appendChild(newItem);
 }

 function delElement() {
     cleanerOfStyles();
     var allItems = document.getElementById('List');
     var lastChild = allItems.lastChild;
     allItems.removeChild(lastChild);
 }

 function addOnTopElement() {
     cleanerOfStyles();
     var newItem = document.createElement("li");
     newItem.innerHTML = 'Новый элемент';
     document.getElementById('List').insertBefore(newItem, document.getElementById('List').firstChild);
 }