// Text reveal animation setup
document.querySelectorAll(".reveal")
    .forEach(function(elem){
        let spanParent = document.createElement("span")
        let spanChild = document.createElement("span")
    
        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        spanChild.textContent = elem.textContent;
        spanParent.appendChild(spanChild);

        elem.innerHTML = "";
        elem.appendChild(spanParent);
    });

// Initialize GSAP animations
window.addEventListener('DOMContentLoaded', () => {
    // Hero text animation
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    heroTimeline
        .to(".child", { y: 0, duration: 1.2, stagger: 0.2 })
        .from(".hero p", { opacity: 0, y: 20, duration: 0.8 }, "-=0.8")
        .from(".cta-buttons", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6");
    
    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);
    
    // About section animation
    gsap.from("#about .about-content", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
    
    // Project cards animation
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".project-grid",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
    });
    
    // Contact form animation
    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.getElementById('project-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const formValues = {};
        
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a thank you message
        form.innerHTML = `
            <div class="form-success">
                <p>👌 Thank You! Your response has been recorded, I will get back to you as soon as possible. Have a nice day!</p>
            </div>
        `;
        
        // Log form data to console (for demonstration)
        console.log('Form submitted with values:', formValues);
    });
}