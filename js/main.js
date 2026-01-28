// BENTO CARD GLOW EFFECT
const bentoCards = document.querySelectorAll('.bento-card');

bentoCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    bentoCards.forEach(c => {
      if(c !== card) {
        c.style.opacity = '0.3'; // dim others
      }
    });
  });
  
  card.addEventListener('mouseleave', () => {
    bentoCards.forEach(c => {
      c.style.opacity = '1'; // restore all
    });
  });
});
// HERO TEXT ANIMATION
window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-text h1');
  const heroSubtitle = document.querySelector('.hero-text p');
  
  // Initial state
  heroTitle.style.transform = 'scale(0.9)';
  heroTitle.style.opacity = '0';
  heroSubtitle.style.transform = 'translateY(20px)';
  heroSubtitle.style.opacity = '0';
  
  // Animate in
  setTimeout(() => {
    heroTitle.style.transition = 'all 1s ease';
    heroTitle.style.transform = 'scale(1)';
    heroTitle.style.opacity = '1';
    
    heroSubtitle.style.transition = '
