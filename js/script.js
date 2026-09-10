document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ru: {
            nav_home: 'Главная',
            nav_about: 'Обо мне',
            nav_skills: 'Навыки',
            nav_projects: 'Проекты',
            nav_journey: 'Путь',
            nav_contact: 'Контакты',
            hero_status: 'Открыт к стажировкам и junior позициям',
            hero_first_name: 'Георгий',
            hero_last_name: 'Бериашвили',
            hero_role: 'Junior Backend разработчик',
            hero_desc: 'Создаю backend системы, изучаю чистую архитектуру и двигаюсь к fullstack разработке.',
            hero_cta_projects: 'Смотреть проекты',
            hero_cta_contact: 'Связаться',
            about_title: '<span class="section__title-accent">Строю</span> свой путь к Fullstack',
            about_age: 'Возраст',
            about_backend: 'Backend',
            about_fullstack: 'Fullstack',
            about_text1: 'Мне 18 лет. Моя цель — стать международным Fullstack-разработчиком (Python / Aiogram / Django + JS ).',
            about_text2: 'Я учусь, работаю и всё свободное время отдаю коду. Этот сайт — моя публичная точка А и часть пути от Junior-разработчика к Senior.',
            about_text3: 'Я развиваю технические навыки, изучаю архитектуру приложений, базы данных, clean code и постепенно двигаюсь к международному рынку.',
            skills_title: '<span class="section__title-accent">Технические</span> навыки',
            skills_backend: 'Backend',
            skills_frontend: 'Frontend',
            skills_db: 'Базы данных и инструменты',
            skills_backend_dev: 'Backend разработка',
            projects_title: '<span class="section__title-accent">Избранные</span> проекты',
            project1_name: '🛡️ Aden Codex — Lineage 2 Class Database',
            project1_desc: 'Backend core for a community-maintained Lineage 2 class catalogue built with Python and Django.',
            project1_f1: 'Relational Data Architecture — модели Races, Classes, Roles (Many-to-Many) и User Comments.',
            project1_f2: 'ORM Optimization — select_related и prefetch_related для устранения N+1 query bottlenecks.',
            project1_f3: 'Rich Django Admin — кастомная админ-панель с approval workflows, Horizontal Filter для M2M, date hierarchies и calculated metadata columns.',
            project1_f4: 'Database Indexing — composite database indexes для высоконагруженных запросов комментариев.',
            project2_name: 'Voltify — Telegram Shop Bot',
            project2_desc: 'A Telegram bot for an electronics store, built with aiogram.',
            project2_f1: 'Product catalog with categories',
            project2_f2: 'Order placement flow (FSM-based)',
            project2_f3: 'Customer provides phone number or username for contact',
            project2_f4: 'Admin receives a notification when a new order is placed',
            journey_title: '<span class="section__title-accent">Мой</span> путь',
            journey_now: 'Сейчас',
            journey_desc1: 'Начало пути с страстью и решимостью.',
            journey_step1: 'Шаг 1',
            journey_step1_title: 'Изучение Backend',
            journey_step1_desc: 'Глубокое погружение в основы backend разработки.',
            journey_step2: 'Шаг 2',
            journey_step2_title: 'Python / Django',
            journey_step2_desc: 'Создание реальных приложений на Python и Django.',
            journey_step3: 'Шаг 3',
            journey_step3_title: 'Реальные проекты',
            journey_step3_desc: 'Создание и деплой проектов для реальных задач.',
            journey_step4: 'Шаг 4',
            journey_step4_title: 'Fullstack разработка',
            journey_step4_desc: 'Расширение в JavaScript, React/Vue и полные веб-приложения.',
            journey_goal: 'Цель',
            journey_goal_title: 'Международный разработчик',
            journey_goal_desc: 'Стать международным Fullstack разработчиком над глобальными проектами.',
            journey_quote: 'Я не пытаюсь сразу стать Senior. Я постепенно строю фундамент: пишу проекты, изучаю архитектуру, разбираю свои ошибки и постоянно улучшаю код.',
            diary_title: '<span class="section__title-accent">Публичный</span> дневник разработчика',
            diary_subtitle: 'Мой публичный путь от точки А до международной разработки.',
            diary_card1_title: 'Технические навыки',
            diary_card1_desc: 'Реальный опыт, ошибки, код и разбор собственных решений.',
            diary_card2_title: 'Дисциплина',
            diary_card2_desc: 'Учёба, работа, кодинг и управление своим временем.',
            diary_card3_title: 'Международный вектор',
            diary_card3_desc: 'Путь к иностранным заказам, компаниям и международному Fullstack-рынку.',
            contact_title: '<span class="section__title-accent">Давайте</span> свяжемся',
            contact_subtitle: 'Открыт к стажировкам и junior позициям',
            contact_email: 'Email',
            contact_telegram: 'Telegram',
            contact_whatsapp: 'WhatsApp',
            contact_telegram_channel: 'Telegram канал',
            footer_name: 'Георгий Бериашвили',
            footer_role: 'Junior Backend разработчик',
            footer_rights: 'Георгий Бериашвили. Все права защищены.',
            footer_crafted: 'Создано на HTML, CSS и Vanilla JavaScript.',
            nav_aria: 'Основная навигация',
            hamburger_open: 'Открыть меню',
            hamburger_close: 'Закрыть меню',
            meta_desc: 'Георгий Бериашвили — Junior Backend разработчик, специализирующийся на Python, Django, JavaScript и пути к Fullstack разработке.',
            meta_kw: 'Георгий Бериашвили, Python, Django, JavaScript, Backend разработчик, Fullstack, Портфолио разработчика',
            meta_author: 'Георгий Бериашвили',
            og_title: 'Георгий Бериашвили — Junior Backend разработчик',
            og_desc: 'Георгий Бериашвили — Junior Backend разработчик, специализирующийся на Python, Django, JavaScript и пути к Fullstack разработке.',
            page_title: 'Георгий Бериашвили — Junior Backend разработчик',
            journey_age: '18 лет',
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_journey: 'Journey',
            nav_contact: 'Contact',
            hero_status: 'Open for internships and junior positions',
            hero_first_name: 'Georgiy',
            hero_last_name: 'Beriashvili',
            hero_role: 'Junior Backend Developer',
            hero_desc: 'Building backend systems, studying clean architecture, and moving toward fullstack development.',
            hero_cta_projects: 'View Projects',
            hero_cta_contact: 'Get in Touch',
            about_title: '<span class="section__title-accent">Building</span> my path to Fullstack',
            about_age: 'Age',
            about_backend: 'Backend',
            about_fullstack: 'Fullstack',
            about_text1: 'I am 18 years old. My goal is to become an international Fullstack developer (Python / Aiogram / Django + JS).',
            about_text2: 'I study, work, and devote all my free time to coding. This site is my public starting point A and part of the journey from Junior to Senior developer.',
            about_text3: 'I am developing technical skills, studying application architecture, databases, clean code, and gradually moving toward the international market.',
            skills_title: '<span class="section__title-accent">Technical</span> skills',
            skills_backend: 'Backend',
            skills_frontend: 'Frontend',
            skills_db: 'Databases & Tools',
            skills_backend_dev: 'Backend Development',
            projects_title: '<span class="section__title-accent">Featured</span> projects',
            project1_name: '🛡️ Aden Codex — Lineage 2 Class Database',
            project1_desc: 'Backend core for a community-maintained Lineage 2 class catalogue built with Python and Django.',
            project1_f1: 'Relational Data Architecture — Races, Classes, Roles (Many-to-Many) and User Comments models.',
            project1_f2: 'ORM Optimization — select_related and prefetch_related to eliminate N+1 query bottlenecks.',
            project1_f3: 'Rich Django Admin — custom admin panel with approval workflows, Horizontal Filter for M2M, date hierarchies, and calculated metadata columns.',
            project1_f4: 'Database Indexing — composite database indexes for high-load comment queries.',
            project2_name: 'Voltify — Telegram Shop Bot',
            project2_desc: 'A Telegram bot for an electronics store, built with aiogram.',
            project2_f1: 'Product catalog with categories',
            project2_f2: 'Order placement flow (FSM-based)',
            project2_f3: 'Customer provides phone number or username for contact',
            project2_f4: 'Admin receives a notification when a new order is placed',
            journey_title: '<span class="section__title-accent">My</span> journey',
            journey_now: 'Now',
            journey_desc1: 'Starting the path with passion and determination.',
            journey_step1: 'Step 1',
            journey_step1_title: 'Learning Backend',
            journey_step1_desc: 'Deep dive into the fundamentals of backend development.',
            journey_step2: 'Step 2',
            journey_step2_title: 'Python / Django',
            journey_step2_desc: 'Building real-world applications with Python and Django.',
            journey_step3: 'Step 3',
            journey_step3_title: 'Real Projects',
            journey_step3_desc: 'Building and deploying projects for real-world tasks.',
            journey_step4: 'Step 4',
            journey_step4_title: 'Fullstack Development',
            journey_step4_desc: 'Expanding into JavaScript, React/Vue, and full web applications.',
            journey_goal: 'Goal',
            journey_goal_title: 'International Developer',
            journey_goal_desc: 'Become an international Fullstack developer working on global projects.',
            journey_quote: 'I am not trying to become a Senior overnight. I am gradually building a foundation: writing projects, studying architecture, learning from my mistakes, and constantly improving my code.',
            diary_title: '<span class="section__title-accent">Public</span> developer diary',
            diary_subtitle: 'My public journey from point A to international development.',
            diary_card1_title: 'Technical Skills',
            diary_card1_desc: 'Real experience, mistakes, code, and analysis of my own decisions.',
            diary_card2_title: 'Discipline',
            diary_card2_desc: 'Study, work, coding, and managing my time.',
            diary_card3_title: 'International Direction',
            diary_card3_desc: 'Path to foreign clients, companies, and the international Fullstack market.',
            contact_title: '<span class="section__title-accent">Let\'s</span> connect',
            contact_subtitle: 'Open for internships and junior positions',
            contact_email: 'Email',
            contact_telegram: 'Telegram',
            contact_whatsapp: 'WhatsApp',
            contact_telegram_channel: 'Telegram Channel',
            footer_name: 'Georgiy Beriashvili',
            footer_role: 'Junior Backend Developer',
            footer_rights: 'Georgiy Beriashvili. All rights reserved.',
            footer_crafted: 'Built with HTML, CSS, and Vanilla JavaScript.',
            nav_aria: 'Main navigation',
            hamburger_open: 'Open menu',
            hamburger_close: 'Close menu',
            meta_desc: 'Georgiy Beriashvili — Junior Backend developer specializing in Python, Django, JavaScript, and the path to Fullstack development.',
            meta_kw: 'Georgiy Beriashvili, Python, Django, JavaScript, Backend developer, Fullstack, Developer portfolio',
            meta_author: 'Georgiy Beriashvili',
            og_title: 'Georgiy Beriashvili — Junior Backend Developer',
            og_desc: 'Georgiy Beriashvili — Junior Backend developer specializing in Python, Django, JavaScript, and the path to Fullstack development.',
            page_title: 'Georgiy Beriashvili — Junior Backend Developer',
            journey_age: 'Age 18',
        }
    };

    let currentLang = localStorage.getItem('site-lang') || 'ru';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site-lang', lang);
        document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = dict[key];
            if (text) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = text;
                } else if (el.hasAttribute('data-i18n-html')) {
                    el.innerHTML = text;
                } else {
                    if (text.includes('<')) {
                        el.innerHTML = text;
                    } else {
                        el.textContent = text;
                    }
                }
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const text = dict[key];
            if (text) {
                el.setAttribute('aria-label', text);
            }
        });

        document.querySelectorAll('[data-i18n-meta]').forEach(el => {
            const key = el.getAttribute('data-i18n-meta');
            const text = dict[key];
            if (text) {
                if (el.tagName === 'TITLE') {
                    document.title = text;
                } else {
                    el.setAttribute('content', text);
                }
            }
        });

        const switcher = document.getElementById('langSwitcher');
        const knob = switcher.querySelector('.lang-switcher__knob');
        if (lang === 'en') {
            knob.textContent = 'EN';
            knob.classList.add('lang-switcher__knob--en');
            const ogLocale = document.querySelector('meta[property="og:locale"]');
            if (ogLocale) ogLocale.setAttribute('content', 'en_US');
        } else {
            knob.textContent = 'RU';
            knob.classList.remove('lang-switcher__knob--en');
            const ogLocale = document.querySelector('meta[property="og:locale"]');
            if (ogLocale) ogLocale.setAttribute('content', 'ru_RU');
        }

        renderProjects(lang);
    }

    function initLangSwitcher() {
        const switcher = document.getElementById('langSwitcher');
        if (!switcher) return;
        switcher.addEventListener('click', () => {
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            applyLanguage(newLang);
        });
    }

    const CONFIG = {
        particles: {
            desktop: {
                dots: 100,
                small: 50,
                medium: 25,
                circles: 15,
                squares: 15,
                blobs: 8,
                lines: 12,
                rings: 10,
                stars: 15,
                diamonds: 10,
                crosses: 10,
                hexagons: 8,
                triangles: 25,
                orbits: 6,
                glowSmall: 10,
                glowMedium: 5,
            },
            mobile: {
                dots: 40,
                small: 20,
                medium: 10,
                circles: 5,
                squares: 5,
                blobs: 3,
                lines: 5,
                rings: 4,
                stars: 8,
                diamonds: 5,
                crosses: 5,
                hexagons: 4,
                triangles: 15,
                orbits: 2,
                glowSmall: 4,
                glowMedium: 2,
            },
        },
        thresholds: {
            mobile: 768,
            tablet: 1024,
        },
    };
    const isMobile = window.innerWidth <= CONFIG.thresholds.mobile;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId = null;
    const particles = [];

    function initParticles() {
        const container = document.getElementById('particles-bg');
        if (!container) return;
        const cfg = prefersReducedMotion
            ? { dots: 10, small: 5, medium: 0, circles: 0, squares: 0, blobs: 0, lines: 0, rings: 0, stars: 0, diamonds: 0, crosses: 0, hexagons: 0, triangles: 0, orbits: 0, glowSmall: 0, glowMedium: 0 }
            : (isMobile ? CONFIG.particles.mobile : CONFIG.particles.desktop);
        const totalParticles = Object.values(cfg).reduce((a, b) => a + b, 0);
        if (totalParticles === 0) return;
        const w = window.innerWidth;
        const h = window.innerHeight;

        function createParticle(type) {
            const el = document.createElement('div');
            const pClass = `particle particle--${type}`;
            el.className = pClass;
            const particle = {
                el,
                type,
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * (type === 'blob' || type === 'glow' ? 0.15 : 0.4),
                vy: (Math.random() - 0.5) * (type === 'blob' || type === 'glow' ? 0.15 : 0.4),
                opacity: Math.random() * 0.6 + 0.1,
                baseOpacity: Math.random() * 0.6 + 0.1,
                scale: 1,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 0.5,
                pulseSpeed: Math.random() * 0.02 + 0.005,
                pulsePhase: Math.random() * Math.PI * 2,
                floatType: Math.random() > 0.66 ? 'slow' : (Math.random() > 0.5 ? 'medium' : 'fast'),
            };
            switch (type) {
                case 'dot':
                    el.style.width = '2px';
                    el.style.height = '2px';
                    el.style.background = `rgba(255, 255, 255, ${particle.opacity})`;
                    break;
                case 'small':
                    el.style.width = '4px';
                    el.style.height = '4px';
                    el.style.background = `rgba(255, 255, 255, ${particle.opacity * 0.6})`;
                    break;
                case 'medium':
                    el.style.width = '6px';
                    el.style.height = '6px';
                    el.style.background = `rgba(0, 212, 255, ${particle.opacity * 0.4})`;
                    break;
                case 'circle':
                    el.style.width = `${30 + Math.random() * 30}px`;
                    el.style.height = el.style.width;
                    el.style.border = `1px solid rgba(255, 255, 255, ${particle.opacity * 0.3})`;
                    break;
                case 'square':
                    el.style.width = `${6 + Math.random() * 6}px`;
                    el.style.height = el.style.width;
                    el.style.border = `1px solid rgba(255, 255, 255, ${particle.opacity * 0.25})`;
                    break;
                case 'blob':
                    el.style.width = `${100 + Math.random() * 80}px`;
                    el.style.height = el.style.width;
                    el.style.background = `radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 70%)`;
                    el.style.filter = 'blur(40px)';
                    break;
                case 'line':
                    el.style.width = `${40 + Math.random() * 40}px`;
                    el.style.height = '1px';
                    el.style.background = `linear-gradient(90deg, transparent, rgba(255,255,255,${particle.opacity * 0.3}), transparent)`;
                    break;
                case 'ring':
                    el.style.width = `${60 + Math.random() * 40}px`;
                    el.style.height = el.style.width;
                    el.style.border = `1px solid rgba(0, 212, 255, ${particle.opacity * 0.2})`;
                    break;
                case 'star':
                    el.style.width = `${8 + Math.random() * 8}px`;
                    el.style.height = el.style.width;
                    el.style.opacity = particle.opacity * 0.8;
                    break;
                case 'diamond':
                    el.style.width = `${6 + Math.random() * 6}px`;
                    el.style.height = el.style.width;
                    el.style.border = `1px solid rgba(255, 255, 255, ${particle.opacity * 0.3})`;
                    break;
                case 'cross':
                    el.style.width = `${10 + Math.random() * 6}px`;
                    el.style.height = el.style.width;
                    el.style.opacity = particle.opacity * 0.4;
                    break;
                case 'hexagon':
                    el.style.width = `${12 + Math.random() * 8}px`;
                    el.style.height = el.style.width;
                    el.style.opacity = particle.opacity * 0.5;
                    break;
                case 'triangle':
                    el.style.width = `${10 + Math.random() * 8}px`;
                    el.style.height = el.style.width;
                    break;
                case 'orbit':
                    el.style.width = `${40 + Math.random() * 30}px`;
                    el.style.height = el.style.width;
                    break;
                case 'glowSmall':
                    el.style.width = `${60 + Math.random() * 40}px`;
                    el.style.height = el.style.width;
                    el.style.background = `radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)`;
                    el.style.filter = 'blur(20px)';
                    break;
                case 'glowMedium':
                    el.style.width = `${120 + Math.random() * 60}px`;
                    el.style.height = el.style.width;
                    el.style.background = `radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)`;
                    el.style.filter = 'blur(45px)';
                    break;
            }
            container.appendChild(el);
            return particle;
        }

        for (let i = 0; i < cfg.dots; i++) particles.push(createParticle('dot'));
        for (let i = 0; i < cfg.small; i++) particles.push(createParticle('small'));
        for (let i = 0; i < cfg.medium; i++) particles.push(createParticle('medium'));
        for (let i = 0; i < cfg.circles; i++) particles.push(createParticle('circle'));
        for (let i = 0; i < cfg.squares; i++) particles.push(createParticle('square'));
        for (let i = 0; i < cfg.blobs; i++) particles.push(createParticle('blob'));
        for (let i = 0; i < cfg.lines; i++) particles.push(createParticle('line'));
        for (let i = 0; i < cfg.rings; i++) particles.push(createParticle('ring'));
        for (let i = 0; i < cfg.stars; i++) particles.push(createParticle('star'));
        for (let i = 0; i < cfg.diamonds; i++) particles.push(createParticle('diamond'));
        for (let i = 0; i < cfg.crosses; i++) particles.push(createParticle('cross'));
        for (let i = 0; i < cfg.hexagons; i++) particles.push(createParticle('hexagon'));
        for (let i = 0; i < cfg.triangles; i++) particles.push(createParticle('triangle'));
        for (let i = 0; i < cfg.orbits; i++) particles.push(createParticle('orbit'));
        for (let i = 0; i < cfg.glowSmall; i++) particles.push(createParticle('glowSmall'));
        for (let i = 0; i < cfg.glowMedium; i++) particles.push(createParticle('glowMedium'));

        if (!prefersReducedMotion) {
            let time = 0;
            function animate() {
                time += 1;
                w = window.innerWidth;
                h = window.innerHeight;
                for (const p of particles) {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.rotation += p.rotSpeed;
                    const pad = 150;
                    if (p.x < -pad) p.x = w + pad;
                    if (p.x > w + pad) p.x = -pad;
                    if (p.y < -pad) p.y = h + pad;
                    if (p.y > h + pad) p.y = -pad;
                    const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase);
                    const currentOpacity = p.baseOpacity + pulse * 0.2;
                    let transform = '';
                    switch (p.floatType) {
                        case 'slow':
                            transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scale(${p.scale})`;
                            break;
                        case 'medium':
                            transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scale(${p.scale})`;
                            break;
                        case 'fast':
                            const fastScale = 1 + Math.sin(time * 0.03 + p.pulsePhase) * 0.3;
                            transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scale(${fastScale})`;
                            break;
                        default:
                            transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scale(${p.scale})`;
                    }
                    if (p.type === 'orbit') {
                        const orbitAngle = time * 0.01 + p.pulsePhase;
                        const orbitX = Math.cos(orbitAngle) * 20;
                        const orbitY = Math.sin(orbitAngle) * 20;
                        transform = `translate(${p.x + orbitX}px, ${p.y + orbitY}px) rotate(${p.rotation}deg)`;
                    }
                    if (p.type === 'star' || p.type === 'diamond') {
                        const twinkle = 0.3 + Math.abs(Math.sin(time * 0.05 + p.pulsePhase)) * 0.7;
                        p.el.style.opacity = twinkle;
                    }
                    p.el.style.transform = transform;
                    p.el.style.opacity = Math.max(0, Math.min(1, currentOpacity));
                }
                animationFrameId = requestAnimationFrame(animate);
            }
            animationFrameId = requestAnimationFrame(animate);
        } else {
            for (const p of particles) {
                p.el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`;
                p.el.style.opacity = p.baseOpacity;
            }
        }
    }

    function initNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        let lastScroll = 0;
        const onScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            lastScroll = scrollY;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initMobileNav() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        if (!hamburger || !navLinks) return;
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
        navLinks.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                hamburger.focus();
            }
        });
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (!href || href === '#') return;
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                const navHeight = 60;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            });
        });
    }

    function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const links = document.querySelectorAll('.nav__link');
        if (sections.length === 0 || links.length === 0) return;
        const observerOptions = { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    links.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, observerOptions);
        sections.forEach(section => observer.observe(section));
    }

    function initReveal() {
        const reveals = document.querySelectorAll('.reveal');
        if (reveals.length === 0) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
        );
        reveals.forEach(el => observer.observe(el));
    }

    function renderProjects(lang) {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;
        const dict = translations[lang] || translations.ru;
        const projects = [
            {
                name: dict.project1_name,
                description: dict.project1_desc,
                features: [
                    dict.project1_f1,
                    dict.project1_f2,
                    dict.project1_f3,
                    dict.project1_f4,
                ],
                stack: ['Python', 'Django', 'PostgreSQL', 'SQLite'],
                github: 'https://github.com/GeorgiyWeb/aden-codex',
                demo: null,
            },
            {
                name: dict.project2_name,
                description: dict.project2_desc,
                features: [
                    dict.project2_f1,
                    dict.project2_f2,
                    dict.project2_f3,
                    dict.project2_f4,
                ],
                stack: ['Python', 'aiogram', 'SQLite', 'SQLAlchemy'],
                github: 'https://github.com/GeorgiyWeb/Voltify-Telegram-shop-bot-',
                demo: null,
            },
        ];
        const githubIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
        const externalIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
        const folderIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
        const ariaLabelRu = 'GitHub репозиторий';
        const ariaLabelEn = 'GitHub repository';
        grid.innerHTML = projects
            .map((p) => `
        <article class="project-card">
            <div class="project-card__header">
                <span class="project-card__icon" aria-hidden="true">${folderIcon}</span>
                <div class="project-card__links">
                    <a href="${p.github}" class="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="${lang === 'ru' ? ariaLabelRu : ariaLabelEn} ${p.name}">
                        ${githubIcon}
                    </a>
                    ${p.demo ? `<a href="${p.demo}" class="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="Demo of ${p.name}">${externalIcon}</a>` : ''}
                </div>
            </div>
            <h3 class="project-card__title">${p.name}</h3>
            <p class="project-card__desc">${p.description}</p>
            ${p.features ? `
            <div class="project-card__features">
                ${p.features.map((f) => `<span class="project-card__feature">• ${f}</span>`).join('')}
            </div>` : ''}
            <div class="project-card__stack">
                ${p.stack.map((t) => `<span class="project-card__tag">${t}</span>`).join('')}
            </div>
        </article>
        `)
            .join('');
    }

    function setYear() {
        const el = document.getElementById('currentYear');
        if (el) el.textContent = new Date().getFullYear();
    }

    initParticles();
    initNavbar();
    initMobileNav();
    initSmoothScroll();
    initActiveNav();
    initReveal();
    initLangSwitcher();
    applyLanguage(currentLang);
    setYear();
});
