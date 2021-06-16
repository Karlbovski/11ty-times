window.addEventListener('DOMContentLoaded', () => {

  const track = document.querySelector('.headline__track');
  const slides = Array.from(track.children)
  const nav = document.querySelector('.headline__nav');
  const navItems = Array.from(nav.children);
  var timer = new Timer(function () {
    changeSlide();
  }, 6000);

  timer.start();

  const moveToSlide = (track, currentSlide, targetSlide) => {
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }
  nav.addEventListener('click', e => {
    timer.reset();
    const targetNavItem = e.target.closest('button');
    if (!targetNavItem) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentNavItem = nav.querySelector('.current-slide');
    const targetIndex = navItems.findIndex(item => item === targetNavItem);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentNavItem.classList.remove('current-slide');
    targetNavItem.classList.add('current-slide');
  });

  function changeSlide() {
    let currentSlide = track.querySelector('.current-slide');
    let currentNavItem = nav.querySelector('.current-slide');
    let targetNavItem = currentNavItem.nextElementSibling;
    if (!targetNavItem) {
      targetNavItem = navItems[0];
    }

    let targetIndex = navItems.findIndex(item => item === targetNavItem);
    let targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentNavItem.classList.remove('current-slide');
    targetNavItem.classList.add('current-slide');
  }

  function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function () {
      if (timerObj) {
        clearInterval(timerObj);
        timerObj = null;
      }
      return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function () {
      if (!timerObj) {
        this.stop();
        timerObj = setInterval(fn, t);
      }
      return this;
    }

    // start with new or original interval, stop current interval
    this.reset = function (newT = t) {
      t = newT;
      return this.stop().start();
    }
  }

});