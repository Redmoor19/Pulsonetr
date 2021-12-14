const slider = tns({
  container: '.carousel__inner',
  items: 1,
  autoplay: true,
  mouseDrag: true,
  nav: true,
  navPosition: 'bottom',
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    1200: {
      nav: false,
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});