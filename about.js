let naslov = document.querySelector('#why h3.naslov');
let text = document.querySelector('#why p.text');

let progress = document.querySelector('.progress');
let circles = document.querySelectorAll('.circle');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let i = 0;
circles[0].classList.add('active');
text.style.opacity = 0;
naslov.style.opacity = 0;
next.addEventListener('click', (e) => {
  i++;
  text.style.opacity = 0;
  naslov.style.opacity = 0;
  if (i === 0) {
    progress.style.width = '0';
    circles[0].classList.add('active');
    valueCheck(i);
    prev.disabled = true;
  }
  if (i === 1) {
    progress.style.width = '32%';
    circles[1].classList.add('active');
    valueCheck(i);
    prev.disabled = false;
  }
  if (i === 2) {
    progress.style.width = '63%';
    circles[2].classList.add('active');
    valueCheck(i);
    prev.disabled = false;
  }
  if (i === 3) {
    progress.style.width = '92.1%';
    circles[3].classList.add('active');
    valueCheck(i);
    e.target.disabled = true;
  }
  if (i > 3) {
    i = 3;
  }
});
prev.addEventListener('click', (e) => {
  text.style.opacity = 0;
  naslov.style.opacity = 0;
  i--;
  if (i === 0) {
    progress.style.width = '0';

    circles[1].classList.remove('active');
    circles[2].classList.remove('active');
    circles[3].classList.remove('active');
    valueCheck(i);
    e.target.disabled = true;
    next.disabled = false;
  }
  if (i === 1) {
    progress.style.width = '32%';
    circles[2].classList.remove('active');
    circles[3].classList.remove('active');
    valueCheck(i);
    prev.disabled = false;
    next.disabled = false;
  }
  if (i === 2) {
    progress.style.width = '63%';
    circles[3].classList.remove('active');
    valueCheck(i);
    prev.disabled = false;
    next.disabled = false;
  }

  if (i < 0) {
    i = 1;
  }
});
function valueCheck(i) {
  if (i === 0) {
    setTimeout(() => {
      naslov.innerText = 'Diverse Portfolio';
      text.innerText =
        'My portfolio features a wide range of photography styles and subjects, from portraits and events to landscapes and product shots. ';
      text.style.opacity = 1;
      naslov.style.opacity = 1;
    }, 300);
  }
  if (i === 1) {
    setTimeout(() => {
      text.style.opacity = 1;
      naslov.style.opacity = 1;
      naslov.innerText = 'Professional Equipment';
      text.innerText =
        'I invest in top-tier photography equipment and stay updated with the latest technology to ensure that I can deliver high-quality, crisp, and visually appealing images.';
    }, 200);
  }
  if (i === 2) {
    setTimeout(() => {
      text.style.opacity = 1;
      naslov.style.opacity = 1;
      naslov.innerText = 'Client Testimonials';
      text.innerText =
        'Positive feedback and testimonials from previous clients can provide reassurance to potential clients about the quality of my work, professionalism, and client satisfaction.';
    }, 200);
  }
  if (i === 3) {
    setTimeout(() => {
      text.style.opacity = 1;
      naslov.style.opacity = 1;
      naslov.innerText = 'Timely Delivery';
      text.innerText =
        'I have a track record of delivering final images within the agreed-upon timelines, ensuring that clients can promptly use their photographs for their intended purposes. ';
    }, 200);
  }
}
valueCheck(0);
