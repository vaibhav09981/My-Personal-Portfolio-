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
          setTimeout(typeWriter, 500); // Pause at end of phrase
        } else {
          setTimeout(typeWriter, 50); // Typing speed
        }
      } else {
        currentPhrase = phrases[i].substring(0, j - 1);
        j--;
        typewriterTextElement.textContent = currentPhrase;
        if (j === 0) {
          isDeleting = false;
          i++;
          setTimeout(typeWriter, 250); // Pause before typing next phrase
        } else {
          setTimeout(typeWriter, 25); // Deleting speed
        }
      }
    } else {
      i = 0; // Loop back to the beginning
      setTimeout(typeWriter, 500); // Pause before restarting
    }
  }

  typeWriter();
});
