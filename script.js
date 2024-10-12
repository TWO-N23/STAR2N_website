const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const langToggleBtn = document.querySelector('.lang-toggle');
const sections = document.querySelectorAll('section[id]');

langToggleBtn.addEventListener('click', function() {
    const lang = langToggleBtn.textContent.trim();
    const oppositeLang = lang === 'EN' ? 'KR' : 'EN';

    langToggleBtn.textContent = oppositeLang;

    sections.forEach(section => {
        const headings = section.querySelectorAll('h2, h3, h4, p, a, button');
        headings.forEach(heading => {
            if (heading.textContent.includes('EN')) {
                heading.textContent = heading.textContent.replace('EN', oppositeLang);
            } else if (heading.textContent.includes('KR')) {
                heading.textContent = heading.textContent.replace('KR', oppositeLang);
            }
        });
    });
});
