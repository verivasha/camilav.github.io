const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
navLinks.forEach(link => {
 link.addEventListener('click', () => {
 const targetId = link.getAttribute('href').substring(1);
 sections.forEach(section => {
 if (section.id === targetId) {
 section.classList.add('active');
 } else {
 section.classList.remove('active');
 }
 });
 });
});
