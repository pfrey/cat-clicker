/*
 * Cat Clicker
 * Track and display the number of clicks on the cat photo
*/

var count = 0;
var cat1 = document.getElementById('catPic1');
var cat2 = document.getElementById('catMelon');


var catNames = ["Sherbert", "Melon"]

for (let n = 0; n < catNames.length; n++) {
  var newName = document.createElement('h2');
      newName.innerHTML = catNames[n];
      newName.className = "catName";
  
  document.getElementsByTagName('img')[n].before(newName);
}



var allCats = document.getElementById('allCats');
var catPics = allCats.getElementsByClassName('catpic');

for (let m = 0; m < catPics.length; m++) {
  var newCounter = document.createElement('div');
      newCounter.setAttribute("id", "clickCounter" + m);
  
  document.getElementsByTagName('img')[m].before(newCounter);

}

/*for (let e = 0; e < catPics.length; e++) {
  var img = document.getElementById('allCats' + e);
  var count0 = 0;
  var count1 = 0;

  allCats[e].addEventListener('click', function() {
    count[e]++
    var clickCount = document.getElementById('clickCounter' + e);
    clickCount.innerHTML = "Number of clicks: " + count[e];
  }, false);
}*/



var count0 = 0;
allCats0.addEventListener('click', function() {
  count0++
  var clickCount = document.getElementById('clickCounter' + 0);
  clickCount.innerHTML = "Number of clicks: " + count0;
}, false);

var count1 = 0;
allCats1.addEventListener('click', function() {
  count1++
  var clickCount = document.getElementById('clickCounter' + 1);
  clickCount.innerHTML = "Number of clicks: " + count1;
}, false);



/*

cat1.addEventListener('click', function(){
  count++;
  var clickCount = document.getElementById('counter');
  clickCount.innerHTML = "Number of clicks: " + count;
}, false);

cat2.addEventListener('click', function(){
  count++;
  var clickCount = document.getElementById('counter');
  clickCount.innerHTML = "Number of clicks: " + count;
}, false);
*/

/*

function createfn(){
    //debugger;
  var element = document.createElement("div");
    element.setAttribute("id", "clickCount");
  document.getElementsByTagName('div')[0].before(element);

  }
window.onload=createfn();

var count = 0;

document.getElementById("catSherbert").onclick = function () {
  count++;

  document.getElementById('clickCount');
  counter.innerHTML = "Number of clicks: " + count;
};*/


/*

  var rows = document.getElementById('sizePicker').elements.namedItem('height').value;
  var cols = document.getElementById('sizePicker').elements.namedItem('width').value;

  var curRow, curCol;

  for (let n = 0; n < rows; n++) {
    curRow = document.createElement('tr');
    table.appendChild(curRow);

    for (let m = 0; m < cols; m++) {
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