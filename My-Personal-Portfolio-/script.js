document.addEventListener('DOMContentLoaded', function() {
  const connectBtn = document.querySelector('.connect-btn');
  const dropdownContent = document.querySelector('.dropdown-content');

  connectBtn.addEventListener('click', function() {
    console.log('Connect button clicked!');
    if (dropdownContent.style.display === 'flex') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'flex';
    }
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.connect-btn') && !event.target.closest('.dropdown-content')) {
      if (dropdownContent.style.display === 'flex') {
        dropdownContent.style.display = 'none';
      }
    }
  });
});