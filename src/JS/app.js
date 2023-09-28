
var navLinks = document.querySelectorAll('.nav-link');
var sections = document.querySelectorAll('.sections');

      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
          e.preventDefault();

          var targetSectionId = this.getAttribute('href');
          var targetSection = document.querySelector(targetSectionId);

          for (var j = 0; j < sections.length; j++) {
            sections[j].style.transform = 'translateX(100%)'; // Masque toutes les sections
          }

          targetSection.style.transform = 'translateX(0)'; // Affiche la section cible
        });
      }

var themeButton = document.getElementById('theme');
    //   var body = document.querySelector('body');
      themeButton.addEventListener('click', function() {
        for (var j = 0; j < sections.length; j++) {
            sections[j].classList.toggle('dark-mode'); // Masque toutes les sections
          }
        
      });
