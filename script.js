document.addEventListener('DOMContentLoaded', () => {
  const menuToggleBtn = document.getElementById('menuToggle');
  const offCanvasMenu = document.getElementById('offCanvasMenu');
  const closeMenuBtn = document.getElementById('closeMenu');
  const body = document.body;

    // Function to open/close the side menu
  function toggleOffCanvas(){
      if(!offCanvasMenu) return;
      const isOpen = offCanvasMenu.classList.toggle('is-open');
      body.classList.toggle('menu-open', isOpen);
      if(menuToggleBtn){
          menuToggleBtn.setAttribute('aria-expanded', String(isOpen));
      }
  }

  // Open menu on button click or keyboard (Enter/Space)
  if(menuToggleBtn){
      menuToggleBtn.addEventListener('click', toggleOffCanvas);
      menuToggleBtn.addEventListener('keydown', (e) => {
          if(e.key === 'Enter' || e.key === ' '){
              e.preventDefault();
              toggleOffCanvas();
          }
      });
  }

    // Close menu when close button is clicked
  if(closeMenuBtn){
      closeMenuBtn.addEventListener('click', toggleOffCanvas);
  }

   // Close menu if a link inside the menu is clicked
  if(offCanvasMenu){
      offCanvasMenu.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => {
              if(offCanvasMenu.classList.contains('is-open')){
                  toggleOffCanvas();
              }
          });
      });
  }

  // Dark Mode toggle Button 
  const themeBtn = document.getElementById('themeBtn');
  function toggleTheme(){
    const root = document.documentElement;
    root.classList.toggle('theme-dark'); // add/remove dark theme class
    sessionStorage.setItem('themeDark', root.classList.contains('theme-dark') ? '1' : '0'); // Save preference in session storage

  
    // Adjusted stat numbers so they remain visible in both themes
    document.querySelectorAll('.stat-number').forEach(num => {
      if(root.classList.contains('theme-dark')){
        num.style.color = '#fff';
      } else {
        num.style.color = '#000';
      }
    });
  }

  // Attached theme toggle to button
  if(themeBtn){
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Applied saved theme on page load
  if(sessionStorage.getItem('themeDark') === '1'){
    document.documentElement.classList.add('theme-dark');
  }

});
