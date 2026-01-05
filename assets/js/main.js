/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active-link'))
    this.classList.add('active-link')

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 400 })
sr.reveal('.about__text', { delay: 400 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {})
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 600 })

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 })

/*===== SKILLS ANIMATION =====*/
const skillsSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.skills__bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.style.width;
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.width = value;
        }, 100);
    });
}

function hideProgress() {
    progressBars.forEach(p => (p.style.width = '0%'));
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

/*===== HOVER EFFECTS FOR SKILL CARDS =====*/
const skillCards = document.querySelectorAll('.skills__card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0px 4px 25px rgba(14, 36, 49, 0.15)';
    });
});

/*===== HOVER EFFECTS FOR SKILL ICONS =====*/
const skillIcons = document.querySelectorAll('.skills__icon-img');

skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(360deg) scale(1.1)';
        icon.style.transition = 'transform 0.5s ease';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});

/*===== STAGGERED FADE-IN FOR SKILL CARDS =====*/
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, observerOptions);

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
