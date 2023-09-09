//scroll animation
const lenis = new Lenis({
  duration: 1.2,
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 1,
  infinite: false,
  autoResize: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//nav
let navButton = document.querySelector('nav .navbar-toggler');
let icon = navButton.querySelector('i');
let list = document.querySelector('nav ul');

navButton.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    list.style.borderTop = '2px solid white';
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    list.style.borderTop = 'none';
    icon.classList.add('fa-bars');
  }
});
//background animation
var granimInstance = new Granim({
  element: '#body',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#005d8f', '#29b1e7'],
        ['#6c8498', '#005d8f'],
        ['#29b1e7', '#6c8498'],
      ],
      transitionSpeed: 4000,
    },
  },
});
