function adjustAOSAttributes() {
  let slike = document.querySelectorAll('#gallery .item');
  let nav = document.querySelector('nav');
  let portfolio = document.querySelector('#portfolio');
  let footer = document.querySelector('footer');

  if (document.documentElement.clientWidth > 768) {
    slike.forEach((slika) => {
      slika.setAttribute('data-aos', 'fade-up');
      slika.setAttribute('data-aos-offset', '-20');
    });
    nav.setAttribute('data-aos', 'fade-down');
    portfolio.setAttribute('data-aos', 'fade-right');
    footer.setAttribute('data-aos', 'fade-up');
    footer.setAttribute('data-aos-duration', '800');
    AOS.init(); // Initialize AOS when the screen size is larger
  } else {
    slike.forEach((slika) => {
      slika.removeAttribute('data-aos');
      slika.removeAttribute('data-aos-offset');
    });
    nav.removeAttribute('data-aos');
    portfolio.removeAttribute('data-aos');
    footer.removeAttribute('data-aos');
    footer.removeAttribute('data-aos-duration');
    AOS.refreshHard(); // Disable AOS when the screen size is smaller
  }
}

// Initial adjustment when the page loads
adjustAOSAttributes();

// Add an event listener for the "resize" event
window.addEventListener('resize', adjustAOSAttributes);
