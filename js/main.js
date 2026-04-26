document.addEventListener('DOMContentLoaded', () => {

    const greetingEl = document.getElementById('greetingText');
    const greetingCursor = document.querySelector('.greeting-cursor');
    const greetingText = "Welcome, I am";
    let greetIdx = 0;

    function typeGreeting() {
        if (greetIdx < greetingText.length) {
            greetIdx++;
            greetingEl.textContent = greetingText.substring(0, greetIdx);
            setTimeout(typeGreeting, 70);
        } else {
            if (greetingCursor) greetingCursor.style.display = 'none';
            setTimeout(startTitleLoop, 400);
        }
    }

    const titles = [
        'Information Security Professional',
        'Malware Defense Researcher',
        'Reverse Engineer',
        'GenAI/LLM Security Researcher'
    ];
    const typingEl = document.getElementById('typingText');
    let titleIdx = 0, charIdx = 0, deleting = false;

    function typeLoop() {
        const current = titles[titleIdx];
        if (deleting) {
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                titleIdx = (titleIdx + 1) % titles.length;
                setTimeout(typeLoop, 300);
                return;
            }
            typingEl.textContent = current.substring(0, charIdx);
        } else {
            charIdx++;
            typingEl.textContent = current.substring(0, charIdx);
        }

        if (!deleting && charIdx === current.length) {
            setTimeout(() => { deleting = true; typeLoop(); }, 2200);
            return;
        }
        setTimeout(typeLoop, deleting ? 20 : 80);
    }

    function startTitleLoop() {
        if (typingEl) typeLoop();
    }

    if (greetingEl) setTimeout(typeGreeting, 600);
    else if (typingEl) typeLoop();

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

    document.querySelectorAll('.share-btn[data-share]').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(document.title);
            const targets = {
                linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`
            };
            const target = targets[btn.dataset.share];
            if (target) window.open(target, '_blank', 'width=600,height=400');
        });
    });

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

    // Animated network constellation background
    const canvas = document.getElementById('networkBg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, particles;
        const PARTICLE_COUNT = 120;
        const CONNECT_DIST = 200;
        const MOUSE_DIST = 250;
        let mouseX = -9999, mouseY = -9999;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    r: Math.random() * 2.2 + 0.8
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            const scrollY = window.scrollY;
            const viewH = window.innerHeight;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                const dmx = p.x - mouseX;
                const dmy = p.y - mouseY;
                const dm = Math.sqrt(dmx * dmx + dmy * dmy);
                const glow = dm < MOUSE_DIST ? 1 - dm / MOUSE_DIST : 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r + glow * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = glow > 0
                    ? `rgba(139, 92, 246, ${0.45 + glow * 0.45})`
                    : `rgba(139, 92, 246, 0.35)`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECT_DIST) {
                        const alpha = (1 - dist / CONNECT_DIST) * 0.3;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
                        ctx.lineWidth = 0.9;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', () => { resize(); createParticles(); });
        window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });

        resize();
        createParticles();
        draw();
    }
});
