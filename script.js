document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const navButtons = document.querySelectorAll('.sidebar button');
  
  // Toggle sidebar when hamburger is clicked
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebar.classList.toggle('open');
  });
  
  // Close sidebar when clicking outside of it
  document.addEventListener('click', function(e) {
    if (sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
  
  // Close sidebar when a navigation button is clicked (for mobile)
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
      }
    });
  });
  
  // Close sidebar when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('open');
    }
  });
});