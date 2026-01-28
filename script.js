// Subtle entrance animation
document.querySelector('.hero').style.opacity = 0;

window.addEventListener('load', () => {
  document.querySelector('.hero').style.transition = 'opacity 1s ease';
  document.querySelector('.hero').style.opacity = 1;
});
