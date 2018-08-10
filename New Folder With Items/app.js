/*

Cat Clicker
Track and display the number of clicks on the cat photo

*/

var count = 0;
var cat1 = document.getElementById('catSherbert');
var cat2 = document.getElementById('catMelon');

var catNames = ["Sherbert", "Melon"]


var allCats = document.getElementById('allCats')
var cats = allCats.getElementsByClassName('catpic');


    
  for (var n = 0; n < catNames.length; n++) {
    var newName = document.createElement('span');
        newName.innerHTML = catNames[n];
        newName.className = "catName";

    for (var c = 0; c < cats.length; c++) {
      var cat = document.getElementById('allCats' + c);
      cat.parentNode.insertBefore(newName, cat) 
    }
    

}



/*

  var rows = document.getElementById('sizePicker').elements.namedItem('height').value;
  var cols = document.getElementById('sizePicker').elements.namedItem('width').value;

  var curRow, curCol;

  for (var n = 0; n < rows; n++) {
    curRow = document.createElement('tr');
    table.appendChild(curRow);

    for (var m = 0; m < cols; m++) {
      curCol = document.createElement('td');
      curRow.appendChild(curCol);

      // Listen for click on each td
      // Once clicked, call squareClick to apply color
      curCol.addEventListener('click', squareClick, false);
    }
  }
  event.preventDefault();
};




  
cat1.addEventListener('click', function(){
  count++;
  var clickCount = document.getElementById('counter');
  clickCount.innerHTML = "Number of clicks: " + count;
}, false);

cat2.addEventListener('click', function(){
  count++;
  var clickCount = document.getElementById('counter');
  clickCount.innerHTML = "Number of clicks: " + count;
}, false);*/