// Промяна на header при скрол
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#f88';
  } else {
    header.style.backgroundColor = '#ffcccb';
  }
});

// Анимация при скрол – fade-in (примерно)
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Поръчката е изпратена успешно!");
  this.reset();
});
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
// Контактна форма
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Благодарим за съобщението! Ще се свържем с теб скоро.");
  this.reset();
});

// Финализиране
document.getElementById("checkoutForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Поръчката е финализирана! Очаквай потвърждение на имейл.");
  this.reset();
});
