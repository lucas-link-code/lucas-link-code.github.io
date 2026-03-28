document.addEventListener('DOMContentLoaded', () => {

    const titles = [
        'VP, Information Security',
        'Senior Malware Defense Analyst',
        'Reverse Engineer',
        'GenAI Security Innovator'
    ];
    const typingEl = document.getElementById('typingText');
    let titleIdx = 0, charIdx = 0, deleting = false;

    function typeLoop() {
        const current = titles[titleIdx];
        if (deleting) {
            charIdx--;
            typingEl.textContent = current.substring(0, charIdx);
        } else {
            charIdx++;
            typingEl.textContent = current.substring(0, charIdx);
        }

        if (!deleting && charIdx === current.length) {
            setTimeout(() => { deleting = true; typeLoop(); }, 2200);
            return;
        }
        if (deleting && charIdx === 0) {
            deleting = false;
            titleIdx = (titleIdx + 1) % titles.length;
        }
        setTimeout(typeLoop, deleting ? 40 : 80);
    }
    if (typingEl) typeLoop();

    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
        lastScroll = window.scrollY;
    }, { passive: true });

    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 2000;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * eased).toLocaleString();
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navAnchors.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(s => sectionObserver.observe(s));
});
