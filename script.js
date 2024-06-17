document.addEventListener("DOMContentLoaded", function() {
    const langToggle = document.querySelector('.lang-toggle');
    const headlines = {
        en: {
            headline1: "Dive into Metaverse + AI",
            headline2: "A New Paradigm in Offline Marketing"
        },
        kr: {
            headline1: "메타버스 + AI로의 다이빙",
            headline2: "오프라인 마케팅의 새로운 패러다임"
        }
    };
    let currentLang = "en";

    langToggle.addEventListener("click", function() {
        currentLang = currentLang === "en" ? "kr" : "en";
        document.getElementById("headline-text-1").textContent = headlines[currentLang].headline1;
        document.getElementById("headline-text-2").textContent = headlines[currentLang].headline2;
        langToggle.textContent = currentLang === "en" ? "EN/KR" : "한/영";
    });

    const contactBtn = document.querySelector('.contact-section button');

    contactBtn.addEventListener('click', function() {
        const emailAddress = 'star2n.official@gmail.com';
        const subject = 'Question from STAR2N Metaverse Store';
        const body = 'Hello STAR2N team,';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});
