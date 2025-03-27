
// Observer for scroll animations
export const createScrollObserver = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach(element => observer.observe(element));

  return observer;
};
