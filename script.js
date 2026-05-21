// navigation
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('stuck', window.scrollY > 50);
});

// scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('on');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.r').forEach(el => revealObserver.observe(el));

// contact
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'sent ✓';
    btn.style.background = '#3a7d5c';
    btn.style.borderColor = '#3a7d5c';
    btn.disabled = true;
});