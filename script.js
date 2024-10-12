// About 링크 클릭 시 Vision과 Portfolio 섹션 보이기/숨기기 기능
document.querySelector('.about-link').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 방지
    const aboutContent = document.querySelector('#about-content'); // Vision과 Portfolio가 있는 섹션
    if (aboutContent.style.display === 'none' || !aboutContent.style.display) {
        aboutContent.style.display = 'block'; // 섹션 보이기
        aboutContent.scrollIntoView({ behavior: 'smooth' }); // 부드럽게 스크롤
    } else {
        aboutContent.style.display = 'none'; // 섹션 숨기기
    }
});

// 언어 전환 기능 유지
const langToggleBtn = document.querySelector('.lang-toggle');
const textElements = document.querySelectorAll('[data-lang-en]');

langToggleBtn.addEventListener('click', () => {
    const lang = langToggleBtn.textContent.includes('EN') ? 'kr' : 'en';
    textElements.forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${lang}`);
    });
    langToggleBtn.textContent = lang === 'en' ? 'EN ⬤' : 'KR ⬤';
});
