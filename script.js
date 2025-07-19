document.addEventListener('DOMContentLoaded', function() {
  const phrases = [
    'Web developer',
    'Front-End Developer',
    'Marketing and PR handler'
  ];
  let i = 0;
  let j = 0;
  let currentPhrase = '';
  let isDeleting = false;
  const typewriterTextElement = document.getElementById('typewriter-text');

  function typeWriter() {
    if (i < phrases.length) {
      if (!isDeleting) {
        currentPhrase = phrases[i].substring(0, j + 1);
        j++;
        typewriterTextElement.innerHTML = `<strong>${currentPhrase}</strong>`;
        if (j === phrases[i].length) {
          isDeleting = true; 
          setTimeout(typeWriter, 500);
        } else {
          setTimeout(typeWriter, 50);
        }
      } else {
        currentPhrase = phrases[i].substring(0, j - 1);
        j--;
        typewriterTextElement.textContent = currentPhrase;
        if (j === 0) {
          isDeleting = false;
          i++;
          setTimeout(typeWriter, 250);
        } else {
          setTimeout(typeWriter, 25);
        }
      }
    } else {
      i = 0; 
      setTimeout(typeWriter, 500); 
    }
  }

  typeWriter();

  // Smooth scrolling for "Know More About Me" button
  document.querySelector('a[href="#languages-known"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      );
  });
});
