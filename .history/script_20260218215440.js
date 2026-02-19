const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = navLinks.querySelectorAll('a');

function toggleMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    // trava o scroll quando menu estiver aberto
    document.body.classList.toggle('no-scroll');

    // animação em sequência dos links
    navItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `fadeSlide 0.5s ease forwards ${index / 10 + 0.2}s`;
        }
    });
}

hamburger.addEventListener('click', toggleMenu);

// fechar menu ao clicar em qualquer link
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('no-scroll');
        navItems.forEach(item => item.style.animation = '');
    });
});

// fechar clicando fora
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('no-scroll');
        navItems.forEach(item => item.style.animation = '');
    }
});
