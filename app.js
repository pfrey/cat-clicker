/*
 * Cat Clicker
 * Track and display the number of clicks on the cat photo
*/

document.addEventListener("DOMContentLoaded", function() {

  let catList = document.getElementById("catList");
  let catArea = document.getElementById("catArea");
  let catNames = ["Sherbert", "Melon", "Bombpop", "Donut", "Wonton"];

  let catNameHeader = document.createElement('h2');
    catNameHeader.setAttribute("id", "catHeader");

  catArea.appendChild(catNameHeader);

  for (let name = 0; name < catNames.length; name++) {
    let catName = catNames[name];

    let catButton = document.createElement('button');
        catButton.innerHTML = catName;
        catButton.className = "catNameListItem";
        catButton.setAttribute("id", "cat" + catName);
        catButton.setAttribute("onclick", "showCat('"+catName+"');");

    catList.appendChild(catButton);
  }

})



function showCat(nameofcat){
  document.getElementById('catHeader').innerHTML = nameofcat;

  document.getElementById('catPhotoArea').src='cat' + nameofcat + '.jpg';
  document.getElementById('catPhotoArea').className ='cat' + nameofcat;
}





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

