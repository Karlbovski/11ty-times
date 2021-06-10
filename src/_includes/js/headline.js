window.addEventListener('DOMContentLoaded', () => {

  const track = document.querySelector('.headline__track');
  const slides = Array.from(track.children)
  const nav = document.querySelector('.headline__nav');
  const navItems = Array.from(nav.children);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }
  nav.addEventListener('click', e => {
    const targetItem = e.target.closest('button');
    if (!targetItem) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentNavItem = nav.querySelector('.current-slide');
    const targetIndex = navItems.findIndex(item => item === targetItem);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentNavItem.classList.remove('current-slide');
    targetItem.classList.add('current-slide');
  });

});