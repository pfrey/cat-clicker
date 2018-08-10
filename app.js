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

  let catCounterContainer = document.createElement('p');
      catCounterContainer.setAttribute("id", "catCounter");

  catArea.appendChild(catNameHeader);
  catArea.appendChild(catCounterContainer);

  for (let name = 0; name < catNames.length; name++) {
    let catName = catNames[name];

    let catButton = document.createElement('button');
        catButton.innerHTML = catName;
        catButton.className = "catNameListItem";
        catButton.setAttribute("id", "cat" + catName);
        catButton.setAttribute("onclick", "showCat('" + catName + "');");

    catList.appendChild(catButton);
  }

})


let sherbertCount = 0;
let melonCount = 0;
let bombpopCount = 0;
let donutCount = 0;
let wontonCount = 0;

function showCat(nameofcat){
  switch (nameofcat) {
    case "Sherbert":
      sherbertCount++;
      displayCatCount = sherbertCount;
      break;
    case "Melon":
      melonCount++;
      displayCatCount = melonCount;
      break;
    case "Bombpop":
      bombpopCount++;
      displayCatCount = bombpopCount;
      break;
    case "Donut":
      donutCount++;
      displayCatCount = donutCount;
      break;
    case "Wonton":
      wontonCount++;
      displayCatCount = wontonCount;
      break;
  }
  
  
  document.getElementById('catPhotoArea').src='cat' + nameofcat + '.jpg';
  document.getElementById('catPhotoArea').className ='cat' + nameofcat;

  document.getElementById('catHeader').innerHTML = nameofcat;

  document.getElementById('catCounter').innerHTML = "Number of clicks: " + displayCatCount;
}
