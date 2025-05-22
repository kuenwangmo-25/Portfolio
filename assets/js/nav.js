  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const body = document.body;
    const dropdownToggles = document.querySelectorAll('.navmenu .dropdown > a');

    // Toggle mobile nav open/close
    navToggle.addEventListener('click', function () {
      body.classList.toggle('mobile-nav-active');
    });

    // Toggle dropdowns in mobile view
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        if (window.innerWidth < 1200) {
          e.preventDefault();
          const dropdownMenu = this.nextElementSibling;

          if (dropdownMenu.classList.contains('dropdown-active')) {
            dropdownMenu.classList.remove('dropdown-active');
          } else {
            // Close other open dropdowns
            document.querySelectorAll('.dropdown .dropdown-active').forEach(el => {
              el.classList.remove('dropdown-active');
            });
            dropdownMenu.classList.add('dropdown-active');
          }
        }
      });
    });
  });
