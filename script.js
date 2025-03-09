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
  
  // Projects slider navigation
  let currentPosition = 0;
  const slider = document.getElementById('projectsSlider');
  const projectWidth = 33.333; // Width of each project in percentage
  
  // Function to move the slider
  window.moveSlider = function(direction) {
    // Pause the automatic animation
    slider.style.animationPlayState = 'paused';
    
    if (direction === 'next') {
      currentPosition -= projectWidth;
      // If we've gone too far right, loop back to start
      if (currentPosition < -66.666) {
        currentPosition = 0;
      }
    } else {
      currentPosition += projectWidth;
      // If we've gone too far left, loop to end
      if (currentPosition > 0) {
        currentPosition = -66.666;
      }
    }
    
    // Apply the transform
    slider.style.transform = `translateX(${currentPosition}%)`;
    
    // After a delay, resume the animation from the new position
    setTimeout(() => {
      slider.style.animation = 'none';
      slider.offsetHeight; // Trigger reflow
      slider.style.animation = `slideProjects 20s linear infinite`;
      slider.style.animationPlayState = 'running';
      slider.style.transform = '';
    }, 5000); // Resume automatic animation after 5 seconds
  };
});