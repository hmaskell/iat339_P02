"use strict";

      window.onresize = setMenu;
      var menu = document.getElementById('menuToggle');
      if (menu != null) menu.style.display = 'none';

      /* inspired by https://only.beaverjunction.com/animated-hamburger-icon-for-the-beaver-builder-theme/ */
        function ham_menu(x) {
            x.classList.toggle("change");
            if (menu.style.display == null || menu.style.display == 'none'){
              menu.style.display = 'block';
            }
            else {
              menu.style.display = 'none';
            }
        }

        function setMenu() {
          if ((window.innerWidth > 776) && (menu.style.display == "block")){
            menu.style.display = "none";
            var x = document.getElementById('hamburger');
            x.classList.toggle("change");
          }
        }