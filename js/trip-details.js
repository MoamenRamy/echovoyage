const carousel = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
  scrollAmount += 310; // width of image + margin
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= 310;
  if (scrollAmount < 0) scrollAmount = 0;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});
