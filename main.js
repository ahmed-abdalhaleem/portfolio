// Projects Slider
const projectSlider = document.getElementById('projectSlider');
const projectSlides = document.querySelectorAll('.project-slide');
let projectIndex = 0;

function showProjectSlide(index) {
  projectSlider.style.transform = `translateX(-${index * 100}%)`;
}
function previousSlide() {
  projectIndex = (projectIndex === 0) ? projectSlides.length - 1 : projectIndex - 1;
  showProjectSlide(projectIndex);
}
function nextSlide() {
  projectIndex = (projectIndex === projectSlides.length - 1) ? 0 : projectIndex + 1;
  showProjectSlide(projectIndex);
}

// Testimonials Slider
const testimonialsSlider = document.getElementById('testimonialsSlider');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDotsContainer = document.getElementById('testimonialDots');
let testimonialIndex = 0;

function showTestimonialSlide(index) {
  testimonialsSlider.style.transform = `translateX(-${index * 100}%)`;
  updateTestimonialDots();
}
function previousTestimonial() {
  testimonialIndex = (testimonialIndex === 0) ? testimonialSlides.length - 1 : testimonialIndex - 1;
  showTestimonialSlide(testimonialIndex);
}
function nextTestimonial() {
  testimonialIndex = (testimonialIndex === testimonialSlides.length - 1) ? 0 : testimonialIndex + 1;
  showTestimonialSlide(testimonialIndex);
}
function updateTestimonialDots() {
  testimonialDotsContainer.innerHTML = '';
  testimonialSlides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'testimonial-dot' + (i === testimonialIndex ? ' active' : '');
    dot.onclick = () => {
      testimonialIndex = i;
      showTestimonialSlide(testimonialIndex);
    };
    testimonialDotsContainer.appendChild(dot);
  });
}

// Auto-slide for testimonials
setInterval(() => {
  nextTestimonial();
}, 6000);

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  showProjectSlide(projectIndex);
  showTestimonialSlide(testimonialIndex);

  // Contact form logic
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      formStatus.textContent = "Sending...";
      setTimeout(() => {
        formStatus.textContent = "Thank you for reaching out! I'll get back to you soon.";
        contactForm.reset();
      }, 1200);
    });
  }
});
