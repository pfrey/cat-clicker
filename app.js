/*
 * Cat Clicker
 * Track and display the number of clicks on the cat photo
*/


/*--Model--*/
var model = {
  selectedCat: null,
  allCats: [
    {
      name: 'Sherbert',
      imgSrc: 'catSherbert.jpg',
      catClickCount: 0
    },
    {
      name: 'Melon',
      imgSrc: 'catMelon.jpg',
      catClickCount: 0
    },
    {
      name: 'Bombpop',
      imgSrc: 'catBombpop.jpg',
      catClickCount: 0
    },
    {
      name: 'Donut',
      imgSrc: 'catDonut.jpg',
      catClickCount: 0
    },
    {
      name: 'Wonton',
      imgSrc: 'catWonton.jpg',
      catClickCount: 0
    },
  ],
  adminAreaActive: false
};

/*--Octopus--*/
var octopus = {
  init: function() {
    model.selectedCat = model.allCats[0];

    catList.init();
    catDisplayArea.init();
    editCatInfoArea.init();
    editCatInfoArea.hide();
  },

  getAllCats: function() {
    return model.allCats;
  },

  getSelectedCatData: function() {
    return model.selectedCat;
  },

  setCatView: function(nameofcat) {
    model.selectedCat = nameofcat;
  },

  increaseCount: function() {
    model.selectedCat.catClickCount++;
    catDisplayArea.render();
  },

  displayAdminArea: function(){
    if (model.adminAreaActive === false) {
      model.adminAreaActive = true;
      editCatInfoArea.show();
    } else if (model.adminAreaActive === true) {
      model.adminAreaActive = false;
      editCatInfoArea.hide();
    }
  },
  
  adminCancel: function(){
    editCatInfoArea.hide();
  },
  
  adminSave: function(){
    model.currentCat.name = editName.value;
    model.currentCat.imgSrc = editSource.value;
    model.currentCat.catClickCount = editCount.value;
    catDisplayArea.render();
    catList.render();
    editCatInfoArea.hide();
  }
};

/*--Views--*/
var catDisplayArea = {
  init: function() {
    this.catElement = document.getElementById('allCats');
    this.catNameElement = document.getElementById('catHeader');
    this.catPhotoElement = document.getElementById('catPhotoArea');
    this.clickCountElement = document.getElementById('catCounter');

    this.catPhotoElement.addEventListener('click', function() {
      octopus.increaseCount();
    });

    this.render();
  },

  render: function() {
    var selectedCat = octopus.getSelectedCatData();
    this.clickCountElement.textContent = "Clicked: " + selectedCat.catClickCount;
    this.catNameElement.textContent = selectedCat.name;
    this.catPhotoElement.src = selectedCat.imgSrc;
  }
};

var catList = {
  init: function() {
    this.catListElement = document.getElementById('catList');

    this.render();
  },

  render: function() {
    var cat, element, i;
    var allCats = octopus.getAllCats();

    this.catListElement.innerHTML = '';

    for (i = 0; i < allCats.length; i++) {
      cat = allCats[i];

      element = document.createElement('button');
      element.innerHTML = cat.name;

      element.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCatView(catCopy);
          catDisplayArea.render();
          editCatInfoArea.render();
        };
      }) (cat));

      this.catListElement.appendChild(element);
    }
  }
};

var editCatInfoArea = {
  init: function() {
    this.editNameElement = document.getElementById('editName');
    this.editSourceElement = document.getElementById('editSource');
    this.editCountElement = document.getElementById('editCount');

    var adminArea = document.getElementById('adminArea');
    this.adminModeButton = document.getElementById('adminModeButton');
    this.cancelButton = document.getElementById('cancelButton');
    this.saveButton = document.getElementById('saveButton');

    this.adminModeButton.addEventListener('click', function() {
      octopus.displayAdminArea();
    });

    this.cancelButton.addEventListener('click', function() {
      octopus.adminCancel();
    });

    this.saveButton.addEventListener('click', function() {
      octopus.adminSave();
    });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getSelectedCatData();
    this.editNameElement.value = currentCat.name;
    this.editSourceElement.value = currentCat.imgSrc;
    this.editCountElement.value = currentCat.catClickCount;
  },

  show: function() {
    adminArea.setAttribute("style", "display:block;");
    editCatInfoArea.render();
  },

  hide: function() {
    adminArea.setAttribute("style", "display:none;");
  }
};

octopus.init();
