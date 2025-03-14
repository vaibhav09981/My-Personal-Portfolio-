function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Typewriter effect
document.addEventListener('DOMContentLoaded', function() {
  const typewriterElement = document.querySelector('.typewriter');
  const roles = [
    'Frontend Developer',
    'Coder',
    'Graphic Designer',
    'UI UX Designer',
    'Video Editor'
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100; // Base typing speed in ms
  
  function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Removing characters
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Faster when deleting
    } else {
      // Adding characters
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal speed when typing
    }
    
    // If we've completed typing the current role
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at the end of typing
    } 
    // If we've deleted the entire role
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // Move to next role
      typingSpeed = 500; // Pause before starting new role
    }
    
    setTimeout(typeEffect, typingSpeed);
  }
  
  // Start the typing effect
  typeEffect();
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the data to a server
      // For now, we'll just show an alert
      alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
      
      // Reset the form
      contactForm.reset();
    });
  }
  
  // Projects slider functionality
  const slider = document.getElementById('projectsSlider');
  const projects = document.querySelectorAll('.color-container');
  let currentIndex = 0;
  let isAnimating = false;

  function updateSlider() {
    const translateX = -currentIndex * 33.333;
    slider.style.transform = `translateX(${translateX}%)`;
    slider.style.transition = 'transform 0.5s ease';
  }

  window.moveSlider = function(direction) {
    if (isAnimating) return;
    isAnimating = true;

    // Stop the automatic animation
    slider.style.animationPlayState = 'paused';
    slider.style.animation = 'none';

    if (direction === 'next') {
      currentIndex++;
      if (currentIndex >= 3) { // Number of unique projects
        currentIndex = 0;
      }
    } else {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = 2; // Number of unique projects - 1
      }
    }

    updateSlider();

    // Re-enable automatic animation after transition
    setTimeout(() => {
      isAnimating = false;
      slider.style.animation = 'slideProjects 20s linear infinite';
      slider.style.animationPlayState = 'running';
    }, 500);
  };

  // Add touch support for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        moveSlider('prev');
      } else {
        moveSlider('next');
      }
    }
  }

  // Pause animation on hover
  slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
  });

  slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
  });
});
