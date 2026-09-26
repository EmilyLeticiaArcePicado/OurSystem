/* =========================================
   CONFIGURATION DATA
   Edit this section to personalize the website!
   ========================================= */
const CONFIG = {
    herName: "Hermosa",
    specialDate: "2019-09-26T00:00:00",

    timeline: [
        { date: "El Comienzo", title: "El día en que nos conocimos", description: "No sabía lo importante que llegarías a ser para mí.", label: "uno de mis favoritos" },
        { date: "Noches Largas", title: "Nuestra primera conversación larga", description: "Cuando las horas se sentían como minutos.", label: "esto todavía me hace sonreír ♡" },
        { date: "Un Momento Especial", title: "Uno de mis recuerdos favoritos", description: "Solo riéndonos juntos de absolutamente nada.", label: "pequeño momento, gran recuerdo" },
        { date: "El Cambio", title: "Cuando todo cambió", description: "El día en que todo empezó a sentirse diferente y más colorido.", label: "guardar este para siempre" },
        { date: "Presente", title: "Hoy 💗", description: "Sigues siendo mi persona favorita.", label: "♡" }
    ],

    gallery: [
        { src: "./assets/photos/gallery1.jpeg", caption: 'Mi Princesa 💕', alt: 'Foto de recuerdo 1' },
        { src: "./assets/photos/gallery2.jpeg", caption: 'Solo mi dulce corazón ✨', alt: 'Foto de recuerdo 2' },
        { src: "./assets/photos/gallery3.jpeg", caption: 'Esa sonrisa 🌸', alt: 'Foto de recuerdo 3' },
        { src: "./assets/photos/gallery4.jpeg", caption: 'Mi Todo 🤍', alt: 'Foto de recuerdo 4' },
        { src: "./assets/photos/gallery5.jpeg", caption: 'Tan hermosa 💗', alt: 'Foto de recuerdo 5' },
        { src: "./assets/photos/gallery6.jpeg", caption: 'Mi mundo 🌍', alt: 'Foto de recuerdo 6' }
    ],


    photoStrip: [
        { src: "./assets/photos/mini1.jpeg", caption: "Mi novia, mi persona favorita, y una de las mejores partes de mi vida 💗", alt: "Recuerdo especial uno" },
        { src: "./assets/photos/mini2.jpeg", caption: "Son las pequeñas cosas tuyas las que más adoro ✨", alt: "Recuerdo especial dos" },
        { src: "./assets/photos/mini3.jpeg", caption: "Mi hermosa mi vida, mi felicidad, mi pequeño mundo 🌷", alt: "Recuerdo especial tres" }
    ],

    littleThings: [
        { icon: "☀️", title: "Tu Sonrisa", desc: "Literalmente ilumina todo mi día." },
        { icon: "🌷", title: "Cómo Escuchas", desc: "Siempre me haces sentir escuchada y comprendida." },
        { icon: "💗", title: "Tu Bondad", desc: "La forma en que te preocupas por los demás es hermosa y te admiro por eso." },
        { icon: "💌", title: "Mensajes Sorpresa", desc: "Recibir un mensaje tuyo es la mejor sensación." },
        { icon: "✨", title: "Tu Energía", desc: "La forma en que mejoras los días comunes solo con estar ahí." },
        { icon: "🌸", title: "Tu Apoyo", desc: "Siempre crees en mí, incluso cuando yo no lo hago." }
    ],

    whyYouMatter: `
        <div class="matter-paragraphs">
            <p class="reveal" style="transition-delay: 0.1s;">Hola mi amor, hoy solo solo te quiero decir gracias, gracias por querer compartir la vida conmigo. 🤍<br>
            Gracias por tu tiempo, por tu antención, por tus consejos,gracias por cada desvelada juntas y por cada sonrisa compartida . 🥹✨</p>

            <p class="reveal" style="transition-delay: 0.2s;">Durante esto 7 años hemos cambiado, hemos crecido, y hemos avanzado, pero lo mejor de esto es que ha sido juntas.<br>
            Tu sonrisa 😊, tus pequeñas expresiones, tu risa, la forma en que te preocupas, la forma en que me hablas, hasta las cosas más pequeñas que haces son importantes para mí. 💕🫶</p>

            <p class="reveal" style="transition-delay: 0.3s;">Cuando veo hacia delante siempre estas tú y quiero que siga siendo así por muchos años más.<br>
            Eres una de las personas más valiosas de mi mundo hermosa y tiene muchos años en este lugar. 💗🌎</p>

            <p class="reveal" style="transition-delay: 0.4s;">Quiero estar ahí para tus días felices, tus días difíciles, tus momentos tontos, tus logros, y cada momento en tu vida, siempre quiero estar a tu lado. 🤗💞</p>

            <p class="reveal" style="transition-delay: 0.5s;">Mereces toda la felicidad, el amor, la paz y las pequeñas sonrisas tiernas que este mundo pueda darte. 🥰🌷<br>
            Y siempre que olvides lo especial que eres, espero que este pequeño rincón de internet te lo recuerde. 💌✨</p>

            <p class="reveal" style="transition-delay: 0.6s;">Gracias por ser tú, Mi vida. 💗</p>
        </div>

        <div class="final-note-card reveal" style="transition-delay: 0.8s;">
            <div class="tiny-heart-decor">♥</div>
            <p>Un gran abrazo para ti 🤗💗</p>
            <p>Un pequeño beso 😘</p>
            <p>Y una sonrisa extra porque me encanta verte feliz 😊💕🌙</p>
        </div>
        
        <div class="matter-sparkle reveal" style="top: 10%; left: 10%; transition-delay: 0.5s;">✨</div>
        <div class="matter-sparkle reveal" style="top: 40%; right: 5%; transition-delay: 0.7s; font-size: 1.5rem;">💕</div>
        <div class="matter-sparkle reveal" style="bottom: 20%; left: 5%; transition-delay: 0.9s;">🌸</div>
    `,

    openWhen: [
        { title: "necesites una sonrisa", body: "Solo recuerda que alguien allá afuera está sonriendo justo ahora solo de pensar en ti. (Soy yo.)", image: "./assets/photos/d1.jpeg", imageCaption: "una pequeña razón para sonreír ♡" },
        { title: "tengas un día difícil", body: "Respira profundo. Eres muy fuerte, y este día no te define. Siempre estoy aquí para ti, pase lo que pase.", image: "./assets/photos/d2.jpeg" },
        { title: "extrañes nuestras conversaciones", body: "¡Yo también las extraño! Hablemos pronto. Mi parte favorita del día es saber de ti.", image: "./assets/photos/d3.jpeg" },
        { title: "estés orgullosa de ti misma", body: "¡ESTOY MUY ORGULLOSO DE TI! Trabajaste duro para esto, y mereces celebrarlo. Sigue brillando ✨", image: "./assets/photos/d4.jpeg" },
        { title: "necesites motivación", body: "Eres capaz de hacer cosas increíbles. No dudes de ti misma. Tú puedes con esto, y creo en ti al 100%.", image: "./assets/photos/d5.jpeg" }
    ],

    surpriseMessage: "Solo quería recordarte cuánto significas para mí. Eres verdaderamente especial, y estoy muy agradecido por ti. 💗"
};

/* =========================================
   DOM ELEMENTS & INITIALIZATION
   ========================================= */
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupIntroEffects() {
    if (prefersReducedMotion) return;
    
    // Background floating hearts
    const bgContainer = document.getElementById("intro-bg-hearts");
    if (bgContainer) {
        const heartsCount = isTouchDevice ? 5 : 10;
        const heartShapes = ["♡", "♥"];
        for (let i = 0; i < heartsCount; i++) {
            const heart = document.createElement("div");
            heart.className = "intro-floating-heart";
            heart.textContent = heartShapes[Math.floor(Math.random() * heartShapes.length)];
            heart.style.left = `${Math.random() * 100}%`;
            
            // Random properties for natural look
            const duration = 8 + Math.random() * 6; // 8-14s
            const delay = Math.random() * 10;
            const size = 0.8 + Math.random() * 0.8;
            const opacity = 0.1 + Math.random() * 0.2;
            
            heart.style.animationDuration = `${duration}s`;
            heart.style.animationDelay = `-${delay}s`; // start midway
            heart.style.transform = `scale(${size})`;
            heart.style.setProperty('--max-opacity', opacity);
            
            // Colors: blush, rose, lavender, peach, soft red
            const colors = ['#f8bbd0', '#f06292', '#e1bee7', '#ffccbc', '#ff8a80'];
            heart.style.color = colors[Math.random() * colors.length | 0];
            
            bgContainer.appendChild(heart);
        }
    }

    // Light tilt effect on decorations (desktop only)
    if (!isTouchDevice) {
        const introScreen = document.getElementById("intro-screen");
        const decors = document.querySelectorAll(".intro-decor");
        
        introScreen.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10; // -5 to 5px
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            
            decors.forEach((decor, index) => {
                const factor = (index % 2 === 0) ? 0.6 : -0.5; // slight variance
                decor.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. INITIALIZE INTRO FIRST (CRITICAL)
    const introScreen = document.getElementById("intro-screen");
    const openButton = document.getElementById("open-letter-btn");
    const mainSite = document.getElementById("main-content");
    const envelope = document.getElementById("intro-envelope");

    console.log("Intro:", introScreen);
    console.log("Button:", openButton);
    console.log("Main site:", mainSite);

    if (!introScreen || !openButton || !mainSite) {
        console.error("Intro elements missing");
    } else {
        let isOpening = false;
        document.body.style.overflow = "hidden"; // Lock scrolling initially
        setupIntroEffects();

        openButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            console.log("OPEN BUTTON CLICKED");

            if (isOpening) return;
            isOpening = true;

            // Start background music softly
            const audio = document.getElementById("background-love-song");
            const floatingBtn = document.getElementById("floating-music-btn");
            if (audio) {
                try {
                    audio.volume = 0.05;
                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise.then(() => {
                            if (floatingBtn) floatingBtn.classList.remove("hidden");
                            
                            // Soft fade-in over ~2.5 seconds (0.05 to 0.35)
                            let vol = 0.05;
                            const fadeInterval = setInterval(() => {
                                if (vol < 0.35) {
                                    vol += 0.015;
                                    audio.volume = Math.min(vol, 0.35);
                                } else {
                                    clearInterval(fadeInterval);
                                }
                            }, 150);
                        }).catch(error => {
                            console.log("Audio playback unavailable:", error);
                            if (floatingBtn) floatingBtn.classList.remove("hidden");
                        });
                    }
                } catch (error) {
                    console.log("Audio playback error:", error);
                    if (floatingBtn) floatingBtn.classList.remove("hidden");
                }
            }

            openButton.disabled = true;
            introScreen.classList.add("intro-opening");

            // Spawn small hearts from the center
            if (envelope) {
                const rect = envelope.getBoundingClientRect();
                const hearts = ["💗", "💕", "♡", "🌸"];
                for (let i = 0; i < 5; i++) {
                    const heart = document.createElement("div");
                    heart.className = "intro-opening-heart";
                    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = `${rect.left + rect.width / 2 - 10 + (Math.random() * 40 - 20)}px`;
                    heart.style.top = `${rect.top + 30 + (Math.random() * 20)}px`;
                    heart.style.animationDelay = `${Math.random() * 0.2}s`;
                    introScreen.appendChild(heart);
                }
            }

            setTimeout(() => {
                introScreen.classList.add("intro-fade-out");
            }, 600);

            setTimeout(() => {
                introScreen.style.display = "none";
                mainSite.classList.add("site-visible");

                document.body.classList.remove("intro-active");
                document.body.style.overflow = "";

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
                window.dispatchEvent(new Event('scroll'));
            }, 1200);
        });
    }

    // 2. DEFENSIVELY INITIALIZE OTHER COMPONENTS
    try {
        const herNameEl = document.getElementById("her-name-display");
        if (herNameEl) herNameEl.textContent = CONFIG.herName;

        const matterTextEl = document.getElementById("matter-text");
        if (matterTextEl) matterTextEl.innerHTML = CONFIG.whyYouMatter;

        if (typeof injectTimeline === 'function') injectTimeline();
        if (typeof injectGallery === 'function') injectGallery();
        if (typeof injectLittleThings === 'function') injectLittleThings();
        if (typeof injectOpenWhen === 'function') injectOpenWhen();

        if (typeof setupCounter === 'function') setupCounter();
        if (typeof setupScrollReveal === 'function') setupScrollReveal();
        if (typeof setupFloatingMusicPlayer === 'function') setupFloatingMusicPlayer();
        if (typeof setupModals === 'function') setupModals();

        if (!isTouchDevice && !prefersReducedMotion) {
            if (typeof setupParallax === 'function') setupParallax();
            if (typeof setupCursorTrail === 'function') setupCursorTrail();
        }

        if (typeof setupBackgroundHearts === 'function') setupBackgroundHearts();
        if (typeof setupMemoryViewer === 'function') setupMemoryViewer();
    } catch (e) {
        console.error("Error initializing non-critical features:", e);
    }
});

/* =========================================
   IMAGE FALLBACKS
   ========================================= */
function loadFallbackImage(elementId, src, isMini = false) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const img = new Image();
    img.onload = () => {
        el.style.backgroundImage = `url('${src}')`;
    };
    img.onerror = () => {
        const svgContent = isMini ?
            `<svg viewBox="0 0 100 100" width="100%" height="100%">
                <rect width="100" height="100" fill="#fdeef4"/>
                <text x="50" y="55" font-size="40" text-anchor="middle" fill="#b85c72">📸</text>
            </svg>` :
            `<svg viewBox="0 0 100 100" width="100%" height="100%">
                <rect width="100" height="100" fill="#fdeef4"/>
                <text x="50" y="45" font-size="30" text-anchor="middle" fill="#b85c72">👫</text>
                <text x="50" y="65" font-size="12" text-anchor="middle" fill="#b85c72" font-family="'Dancing Script', cursive">nuestro pequeño recuerdo ♡</text>
            </svg>`;
        el.innerHTML = svgContent;
    };
    img.src = src;
}


/* =========================================
   2. INJECT CONTENT FUNCTIONS
   ========================================= */
function injectTimeline() {
    const container = document.getElementById("timeline-container");
    CONFIG.timeline.forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-card reveal";
        const rot = (Math.random() * 2) - 1; // -1 to 1 degree
        div.innerHTML = `
            <div class="timeline-content scrap-note" style="transform: rotate(${rot}deg); transition: transform 0.3s ease;">
                <div class="scrap-tape top-center tape-light"></div>
                <div class="timeline-date">${item.date}</div>
                <h3 class="dancing-text">${item.title}</h3>
                <p>${item.description}</p>
                <span class="timeline-label">${item.label || '♡'}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function injectGallery() {
    const container = document.getElementById("gallery-container");
    CONFIG.gallery.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "polaroid reveal staggered-reveal";
        const rot = Math.random() * 4 - 2;
        div.style.setProperty('--rot', `${rot}deg`);
        div.style.transitionDelay = `${index * 90}ms`;

        // Clear delay after reveal to prevent hover lag
        setTimeout(() => div.style.transitionDelay = '0ms', 1000 + (index * 90));

        div.innerHTML = `
            <div class="scrap-tape top-center"></div>
            <div class="polaroid-img" data-index="${index}">
                <img src="${item.src}" class="gallery-photo photo-${index + 1}" alt="${item.alt || 'Foto de la galería'}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="gallery-fallback" style="display: none;">
                    <div style="font-size: 1.5rem; margin-bottom: 5px;">♡</div>
                    <div style="font-size: 0.8rem;">recuerdo esperando aquí</div>
                </div>
            </div>
            <div class="polaroid-caption">${item.caption}</div>
        `;

        div.addEventListener("click", () => openLightbox(index));
        container.appendChild(div);
    });
}

function injectLittleThings() {
    const container = document.getElementById("little-things-container");
    CONFIG.littleThings.forEach(item => {
        const div = document.createElement("div");
        div.className = "thing-card scrap-note reveal";
        div.innerHTML = `
            <div class="thing-icon">${item.icon}</div>
            <h3 class="thing-title">${item.title}</h3>
            <p>${item.desc}</p>
            <div class="scrap-heart bottom-right">♡</div>
        `;
        container.appendChild(div);
    });
}

function injectOpenWhen() {
    const container = document.getElementById("open-when-container");
    const envelopeColors = ['env-pink', 'env-lavender', 'env-peach', 'env-cream', 'env-rose'];

    CONFIG.openWhen.forEach((item, index) => {
        const colorClass = envelopeColors[index % envelopeColors.length];
        const div = document.createElement("div");
        div.className = `env-card ${colorClass} reveal`;
        div.innerHTML = `
            <div class="env-icon">💌</div>
            <p class="env-label">abre cuando...</p>
            <p class="env-title">${item.title}</p>
            <div class="scrap-heart" style="bottom: -10px; right: 50%; transform: translateX(50%);">💗</div>
        `;
        div.addEventListener("click", (e) => {
            // Prevent double clicks
            if (div.classList.contains("env-opening")) return;
            
            div.classList.add("env-opening");
            spawnClickHearts(e.clientX, e.clientY);
            
            setTimeout(() => {
                openLetter(index);
                // Remove class so it resets when modal closes
                setTimeout(() => div.classList.remove("env-opening"), 500);
            }, 380);
        });
        container.appendChild(div);
    });
}

/* =========================================
   4. COUNTER
   ========================================= */
function setupCounter() {
    const targetDate = new Date(CONFIG.specialDate).getTime();
    
    let lastVals = { d: -1, h: -1, m: -1, s: -1 };
    
    function animateDigit(elId) {
        const el = document.getElementById(elId);
        if(!el) return;
        el.classList.remove("counter-pop");
        void el.offsetWidth; // trigger reflow
        el.classList.add("counter-pop");
    }

    function updateCounter() {
        const now = new Date().getTime();
        const difference = Math.abs(now - targetDate);

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (days !== lastVals.d) { document.getElementById("count-days").textContent = days; animateDigit("count-days"); lastVals.d = days; }
        if (hours !== lastVals.h) { document.getElementById("count-hours").textContent = hours; animateDigit("count-hours"); lastVals.h = hours; }
        if (minutes !== lastVals.m) { document.getElementById("count-mins").textContent = minutes; animateDigit("count-mins"); lastVals.m = minutes; }
        if (seconds !== lastVals.s) { document.getElementById("count-secs").textContent = seconds; animateDigit("count-secs"); lastVals.s = seconds; }
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

/* =========================================
   5. LIGHTBOX
   ========================================= */
let currentGalleryIndex = 0;
function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightbox();
    document.getElementById("lightbox").classList.remove("hidden");
    const sp = document.getElementById("scroll-love-path");
    if(sp) sp.classList.add("hidden");
}

function updateLightbox() {
    const item = CONFIG.gallery[currentGalleryIndex];
    const imgEl = document.getElementById("lightbox-img");
    const capEl = document.getElementById("lightbox-caption");

    if (item.src) {
        imgEl.style.backgroundImage = `url('${item.src}')`;
    } else {
        imgEl.style.backgroundImage = '';
        imgEl.style.backgroundColor = 'var(--peach)';
    }
    capEl.textContent = item.caption;
}

document.querySelector(".prev-btn").addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
    updateLightbox();
});

document.querySelector(".next-btn").addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % CONFIG.gallery.length;
    updateLightbox();
});

/* =========================================
   6. MUSIC PLAYER
   ========================================= */
function setupFloatingMusicPlayer() {
    const audio = document.getElementById("background-love-song");
    const floatingBtn = document.getElementById("floating-music-btn");
    
    if (!audio || !floatingBtn) return;

    floatingBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => {
                floatingBtn.textContent = "🎵";
            }).catch(e => console.log("Audio play error:", e));
        } else {
            audio.pause();
            floatingBtn.textContent = "🔇";
        }
    });
}

/* =========================================
   7. MODALS
   ========================================= */
function openLetter(index) {
    const item = CONFIG.openWhen[index];
    document.getElementById("letter-title").textContent = item.title;
    document.getElementById("letter-body").textContent = item.body;
    
    const photoContainer = document.getElementById("letter-photo-container");
    const imgEl = document.getElementById("letter-img");
    const capEl = document.getElementById("letter-photo-caption");
    
    // Reset state
    photoContainer.style.opacity = '0';
    photoContainer.style.transform = 'translateY(10px)';
    
    if (item.image) {
        imgEl.src = item.image;
        
        imgEl.onload = () => {
            photoContainer.style.opacity = '1';
            photoContainer.style.transform = 'translateY(0)';
            // Tiny hearts around photo
            setTimeout(() => {
                const rect = photoContainer.getBoundingClientRect();
                spawnClickHearts(rect.left + rect.width / 2, rect.top + rect.height / 2);
            }, 300);
        };
        imgEl.onerror = () => {
            photoContainer.style.display = 'none';
        };
        
        if (item.imageCaption) {
            capEl.textContent = item.imageCaption;
            capEl.style.display = 'block';
        } else {
            capEl.style.display = 'none';
        }
        
        photoContainer.style.display = 'flex';
        
        // Tap photo to open in memory viewer
        imgEl.onclick = () => {
            if (window.openLightboxWithArray) {
                window.openLightboxWithArray([{ src: item.image, caption: item.imageCaption || '', alt: item.title }], 0);
            }
        };
    } else {
        photoContainer.style.display = 'none';
    }

    document.getElementById("letter-modal").classList.remove("hidden");
    const sp = document.getElementById("scroll-love-path");
    if(sp) sp.classList.add("hidden");
}

function setupModals() {
    function onModalClose() {
        const sp = document.getElementById("scroll-love-path");
        if(sp) sp.classList.remove("hidden");
    }

    document.querySelectorAll(".close-lightbox").forEach(el => {
        el.addEventListener("click", () => { document.getElementById("lightbox").classList.add("hidden"); onModalClose(); });
    });

    document.querySelectorAll(".close-letter").forEach(el => {
        el.addEventListener("click", () => { document.getElementById("letter-modal").classList.add("hidden"); onModalClose(); });
    });

    const surpriseBtn = document.getElementById("surprise-btn");
    const surpriseModal = document.getElementById("surprise-modal");

    document.getElementById("surprise-message").textContent = CONFIG.surpriseMessage;

    surpriseBtn.addEventListener("click", (e) => {
        surpriseModal.classList.remove("hidden");
        const sp = document.getElementById("scroll-love-path");
        if(sp) sp.classList.add("hidden");
        spawnClickHearts(e.clientX, e.clientY);
    });

    document.querySelectorAll(".close-surprise").forEach(el => {
        el.addEventListener("click", () => { surpriseModal.classList.add("hidden"); onModalClose(); });
    });
}

/* =========================================
   8. VISUAL EFFECTS (Scroll Reveal)
   ========================================= */
function setupScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => observer.observe(reveal));

    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                
                // 1. Navigation Active State
                let current = '';
                sections.forEach(section => {
                    if (scrollY >= section.offsetTop - 250) {
                        current = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(current)) link.classList.add('active');
                });

                // 2. Timeline Progress
                const timeline = document.getElementById("timeline-container");
                const timeProgress = document.querySelector(".timeline-progress");
                if (timeline && timeProgress) {
                    const rect = timeline.getBoundingClientRect();
                    const start = window.innerHeight * 0.5; // Starts drawing when timeline reaches mid-screen
                    if (rect.top < start) {
                        const maxDraw = rect.height;
                        const drawAmount = Math.min(Math.max(start - rect.top, 0), maxDraw);
                        timeProgress.style.transform = `translateX(-50%) scaleY(${drawAmount / maxDraw})`;
                    } else {
                        timeProgress.style.transform = `translateX(-50%) scaleY(0)`;
                    }
                }

                // 3. Global Scroll Love Path
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = Math.min(Math.max(scrollY / maxScroll, 0), 1);
                
                const loveProgress = document.getElementById("scroll-love-progress");
                const loveHeart = document.getElementById("scroll-love-heart");
                
                if (loveProgress && loveHeart) {
                    loveProgress.style.transform = `scaleY(${scrollPercent})`;
                    loveHeart.style.top = `${scrollPercent * 100}%`;
                }
                
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
}

/* =========================================
   9. INTERACTIVE PARTICLES & PARALLAX
   ========================================= */
function spawnClickHearts(x, y) {
    if (prefersReducedMotion) return;

    const count = Math.floor(Math.random() * 3) + 4; // 4 to 6 hearts
    const hearts = ["💗", "✨", "🌸", "💕", "♡"];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.className = "click-heart";
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

        const offsetX = (Math.random() * 60) - 30;
        heart.style.left = `${x + offsetX}px`;
        heart.style.top = `${y}px`;

        // Randomize float speed and direction slightly via inline animation override if needed, 
        // but CSS class handles the general float up.
        heart.style.animationDuration = `${0.8 + Math.random() * 0.5}s`;

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

function setupParallax() {
    if (isTouchDevice || prefersReducedMotion) return; // Skip on mobile/touch entirely
    
    const parallaxEls = document.querySelectorAll('.parallax-el');
    const hero = document.getElementById('hero');

    if (!hero) return;

    hero.addEventListener('mousemove', (e) => {
        window.requestAnimationFrame(() => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;

            parallaxEls.forEach(el => {
                const speed = el.getAttribute('data-speed') || 0.1;
                // Limit max movement to 5px for subtlety
                const moveX = Math.min(Math.max(x * speed * 30, -5), 5);
                const moveY = Math.min(Math.max(y * speed * 30, -5), 5);
                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    });

    hero.addEventListener('mouseleave', () => {
        parallaxEls.forEach(el => {
            el.style.transform = `translate(0px, 0px)`;
        });
    });
}

function setupCursorTrail() {
    const container = document.getElementById("cursor-particles");
    if (!container) return;

    let particles = 0;
    const maxParticles = 5;
    let lastX = 0;
    let lastY = 0;

    document.addEventListener("mousemove", (e) => {
        // Only spawn if moved a reasonable distance
        const dist = Math.abs(e.clientX - lastX) + Math.abs(e.clientY - lastY);
        if (dist > 40 && particles < maxParticles) {
            lastX = e.clientX;
            lastY = e.clientY;

            const p = document.createElement("div");
            p.className = "cursor-particle";
            p.innerHTML = Math.random() > 0.5 ? "✨" : "♡";
            p.style.left = `${e.clientX + 5}px`;
            p.style.top = `${e.clientY + 5}px`;
            p.style.color = "var(--soft-rose)";

            container.appendChild(p);
            particles++;

            setTimeout(() => {
                p.remove();
                particles--;
            }, 1000);
        }
    });
}

function setupBackgroundHearts() {
    const container = document.getElementById("floating-hearts-container");
    if (!container) return;

    // Reduce density for mobile or reduced motion
    let numHearts = window.innerWidth < 768 ? 4 : 9; // 4 on phone, 9 on desktop max
    if (prefersReducedMotion) numHearts = 2;

    const hearts = ["💗", "💕", "♡", "🌸", "💖", "✨"];
    const colors = ["#FFD9E2", "#F7A8B8", "#E8D9FF", "#FFDCC8", "#fff", "#B85C72"];

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div");
        heart.className = "bg-floating-heart";
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

        // Randomize properties
        const left = Math.random() * 100;
        const size = 15 + Math.random() * 20; // 15px to 35px
        const duration = 8 + Math.random() * 7; // 8s to 15s
        const delay = Math.random() * 10;
        const drift = (Math.random() * 40 - 20) + 'px';
        const opacity = prefersReducedMotion ? 0.15 : (0.10 + Math.random() * 0.18); // max 0.28 opacity

        heart.style.left = `${left}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.setProperty('--drift', drift);
        heart.style.setProperty('--max-opacity', opacity);

        container.appendChild(heart);
    }
}

/* =========================================
   10. PHOTO STRIP MEMORY VIEWER (MOBILE FIRST)
   ========================================= */
function setupMemoryViewer() {
    const wrappers = document.querySelectorAll('.photo-strip .strip-wrapper');
    const modal = document.getElementById('memory-viewer-modal');
    const closeBtn = document.querySelector('.memory-viewer-close');
    const bg = document.querySelector('.memory-viewer-bg');

    const imgEl = document.getElementById('memory-viewer-img');
    const capEl = document.getElementById('memory-viewer-caption');
    const countEl = document.getElementById('memory-counter-text');
    const polaroidContainer = document.getElementById('memory-polaroid-container');
    const imageWrapper = document.querySelector('.memory-image-wrapper');

    const nextBtns = document.querySelectorAll('.next-memory');
    const prevBtns = document.querySelectorAll('.prev-memory');

    let currentIndex = 0;
    let isOpen = false;
    let ambientInterval = null;
    let currentArray = CONFIG.photoStrip;

    if (!modal) return; // Note: removed wrappers check so gallery can use it too

    // Preload images
    CONFIG.photoStrip.forEach(item => {
        if (item.src) {
            const img = new Image();
            img.src = item.src;
        }
    });
    CONFIG.gallery.forEach(item => {
        if (item.src) {
            const img = new Image();
            img.src = item.src;
        }
    });

    window.openLightbox = function (index) {
        currentArray = CONFIG.gallery;
        openViewer(index);
    };

    window.openLightboxWithArray = function(array, index = 0) {
        currentArray = array;
        openViewer(index);
    };

    function openViewer(index) {
        currentIndex = index;
        updateViewerContent(currentIndex, false);

        modal.classList.remove('hidden');
        modal.classList.add('viewer-opening');
        document.body.style.overflow = 'hidden';

        // Hide bottom navbar
        const navbar = document.getElementById('navbar');
        if (navbar) navbar.style.display = 'none';

        setTimeout(() => {
            modal.classList.remove('viewer-opening');
            if (!prefersReducedMotion) spawnHeartBurst();
        }, 550);

        isOpen = true;
        startAmbientHearts();
    }

    function closeViewer() {
        modal.classList.add('viewer-closing');
        stopAmbientHearts();

        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('viewer-closing');
            document.body.style.overflow = '';

            // Show bottom navbar
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.style.display = 'flex';

            isOpen = false;
        }, 400);
    }

    function updateViewerContent(index, animate = true, direction = 'next') {
        const item = currentArray[index];

        if (animate && !prefersReducedMotion) {
            polaroidContainer.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
            setTimeout(() => {
                imgEl.src = item.src;
                imgEl.alt = item.alt || "Recuerdo";
                capEl.textContent = item.caption;
                countEl.textContent = `${index + 1} / ${currentArray.length}`;

                polaroidContainer.className = 'memory-polaroid-container';
                polaroidContainer.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
                spawnSparkle();

                setTimeout(() => {
                    polaroidContainer.className = 'memory-polaroid-container';
                }, 350);
            }, 300);
        } else {
            imgEl.src = item.src;
            imgEl.alt = item.alt || "Recuerdo";
            capEl.textContent = item.caption;
            countEl.textContent = `${index + 1} / ${currentArray.length}`;
        }
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % currentArray.length;
        updateViewerContent(currentIndex, true, 'next');
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + currentArray.length) % currentArray.length;
        updateViewerContent(currentIndex, true, 'prev');
    }

    // Attach Clicks
    // Attach Clicks for photo strip
    if (wrappers && wrappers.length > 0) {
        wrappers.forEach((wrapper, idx) => {
            wrapper.addEventListener('click', () => {
                currentArray = CONFIG.photoStrip;
                // Slight visual tap feedback handled by css :active, then open
                setTimeout(() => openViewer(idx), 50);
            });
        });
    }

    closeBtn.addEventListener('click', closeViewer);
    bg.addEventListener('click', closeViewer);

    nextBtns.forEach(btn => btn.addEventListener('click', nextPhoto));
    prevBtns.forEach(btn => btn.addEventListener('click', prevPhoto));

    // Keyboard Accessibility
    document.addEventListener('keydown', (e) => {
        if (!isOpen) return;
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
    });

    // Mobile Swipe & Double Tap
    let touchStartX = 0;
    let touchStartY = 0;
    let lastTapTime = 0;

    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;

        // Swipe logic
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 60) {
            if (diffX > 0) nextPhoto(); // Swiped left
            else prevPhoto(); // Swiped right
            return; // Prevent double tap if it was a swipe
        }

        // Double tap logic on the image
        if (e.target === imgEl || e.target === imageWrapper) {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTapTime;
            if (tapLength < 500 && tapLength > 0) {
                spawnDoubleTapHeart(e);
                lastTapTime = 0;
                e.preventDefault();
            } else {
                lastTapTime = currentTime;
            }
        }
    });

    // Special Effects
    function spawnDoubleTapHeart(e) {
        if (prefersReducedMotion) return;

        // Large center heart
        const heart = document.createElement('div');
        heart.className = 'double-tap-heart';
        heart.innerHTML = '💗';

        // Try to position near tap, or center if not available
        if (e && e.changedTouches) {
            const rect = imageWrapper.getBoundingClientRect();
            heart.style.left = `${e.changedTouches[0].clientX - rect.left - 40}px`;
            heart.style.top = `${e.changedTouches[0].clientY - rect.top - 40}px`;
        } else {
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.marginLeft = '-40px';
            heart.style.marginTop = '-40px';
        }

        imageWrapper.appendChild(heart);
        setTimeout(() => heart.remove(), 800);

        // Mini burst
        for (let i = 0; i < 4; i++) {
            const mini = document.createElement('div');
            mini.innerHTML = '♡';
            mini.style.position = 'absolute';
            mini.style.color = 'white';
            mini.style.fontSize = '1.2rem';
            mini.style.left = heart.style.left;
            mini.style.top = heart.style.top;
            mini.style.animation = `burstFloat 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`;

            const angle = Math.random() * Math.PI * 2;
            const dist = 40 + Math.random() * 40;
            mini.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
            mini.style.setProperty('--ty', `${Math.sin(angle) * dist - 30}px`);

            imageWrapper.appendChild(mini);
            setTimeout(() => mini.remove(), 800);
        }
    }

    function spawnHeartBurst() {
        const hearts = ["💗", "♡", "🌸", "💕"];
        const colors = ["#FFD9E2", "#F7A8B8", "#E8D9FF", "#FFDCC8"];
        const count = isTouchDevice ? 5 : 8;

        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'burst-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.fontSize = `${1 + Math.random()}rem`;
            heart.style.left = '50%';
            heart.style.top = '50%';

            const angle = (Math.PI + (Math.random() * Math.PI)); // Upper half semi circle mostly
            const dist = 80 + Math.random() * 100;
            heart.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
            heart.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);

            polaroidContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }
    }

    function spawnSparkle() {
        if (prefersReducedMotion) return;
        const sparkle = document.createElement('div');
        sparkle.className = 'transition-sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.top = Math.random() > 0.5 ? '-20px' : 'auto';
        sparkle.style.bottom = sparkle.style.top === 'auto' ? '-20px' : 'auto';
        sparkle.style.left = Math.random() > 0.5 ? '-20px' : 'auto';
        sparkle.style.right = sparkle.style.left === 'auto' ? '-20px' : 'auto';

        polaroidContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
    }

    function startAmbientHearts() {
        if (prefersReducedMotion) return;
        const heartsContainer = document.getElementById('memory-viewer-hearts');

        function spawn() {
            if (!isOpen) return;
            const heart = document.createElement('div');
            heart.className = 'ambient-heart';
            heart.innerHTML = Math.random() > 0.5 ? '♡' : '✨';
            heart.style.color = 'rgba(255, 255, 255, 0.8)';
            heart.style.left = `${10 + Math.random() * 80}%`;
            heart.style.animationDuration = `${8 + Math.random() * 6}s`;
            heart.style.setProperty('--max-opacity', `${0.1 + Math.random() * 0.15}`);

            heartsContainer.appendChild(heart);
            setTimeout(() => { if (heart.parentNode) heart.remove(); }, 14000);
        }

        ambientInterval = setInterval(spawn, 3000);
        spawn(); // spawn one immediately
    }

    function stopAmbientHearts() {
        clearInterval(ambientInterval);
        document.getElementById('memory-viewer-hearts').innerHTML = '';
    }
}