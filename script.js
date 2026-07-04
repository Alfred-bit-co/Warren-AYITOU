/* ═══════════════════════════════════════════
   InHabit — script.js
   NOTE : la logique de traduction (FR/EN) vit desormais
   dans i18n.js — voir applyLanguage() / TRANSLATIONS la-bas.
   Ce fichier gere : nav, theme, header scroll, preloader,
   scroll progress, curseur personnalise, bouton retour accueil,
   boutons magnetiques, lecteur de pages, filtres portfolio,
   modale projet (bilingue), formulaire de contact, YouTube lazy
   load, animations GSAP, compteurs animes.
═══════════════════════════════════════════ */

const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const themeToggle = document.querySelector(".theme-toggle");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("main section[id]");

/* ═══════════════════════════════════════════
   Preloader
═══════════════════════════════════════════ */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.setTimeout(() => {
      preloader.classList.add("is-hidden");
    }, 400);
  }
});

/* ═══════════════════════════════════════════
   Navigation mobile
═══════════════════════════════════════════ */
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ═══════════════════════════════════════════
   Theme clair / sombre
═══════════════════════════════════════════ */
const savedTheme = localStorage.getItem("inhabit-theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("inhabit-theme", body.classList.contains("dark") ? "dark" : "light");
});

/* ═══════════════════════════════════════════
   Header au scroll + barre de progression
═══════════════════════════════════════════ */
const scrollProgressBar = document.getElementById("scrollProgressBar");
const backToHomeBtn = document.getElementById("backToHome");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);

  const doc = document.documentElement;
  const scrollTop = window.scrollY;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  if (scrollProgressBar) scrollProgressBar.style.width = progress + "%";

  if (backToHomeBtn) {
    backToHomeBtn.classList.toggle("is-visible", scrollTop > 500);
  }
}, { passive: true });

/* ═══════════════════════════════════════════
   Bouton flottant — retour a l'accueil
═══════════════════════════════════════════ */
if (backToHomeBtn) {
  backToHomeBtn.addEventListener("click", () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

/* ═══════════════════════════════════════════
   Curseur personnalise
═══════════════════════════════════════════ */
(function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  // Desactive sur ecrans tactiles (pas de vraie souris)
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
  let mouseX = 0, mouseY = 0;
  let isVisible = false;

  function showCursor() {
    if (!isVisible) {
      isVisible = true;
      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");
    }
  }

  function hideCursor() {
    isVisible = false;
    dot.classList.add("is-hidden");
    ring.classList.add("is-hidden");
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    showCursor();
  });

  // Deux methodes combinees pour une detection fiable dans tous les
  // navigateurs (Firefox notamment peut manquer un mouseleave rapide) :
  document.documentElement.addEventListener("mouseleave", hideCursor);
  document.addEventListener("mouseleave", hideCursor);
  window.addEventListener("blur", hideCursor);

  function raf() {
    dotX += (mouseX - dotX) * 0.9;
    dotY += (mouseY - dotY) * 0.9;
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    requestAnimationFrame(raf);
  }
  raf();

  const interactiveSelector = "a, button, .project-card, .book-card-front, .filter, input, textarea, .yt-thumb";
  document.querySelectorAll(interactiveSelector).forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
  });
})();

/* ═══════════════════════════════════════════
   Boutons magnetiques
═══════════════════════════════════════════ */
(function initMagneticButtons() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  document.querySelectorAll(".button").forEach((btn) => {
    btn.classList.add("is-magnetic");

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${relX * 0.18}px, ${relY * 0.35}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
})();

/* ═══════════════════════════════════════════
   Lecteur de pages (Preview)
═══════════════════════════════════════════ */
const pageButtons = document.querySelectorAll("[data-page-action]");
const pages = Array.from(document.querySelectorAll(".sample-page"));
const pageIndicator = document.querySelector("[data-current-page]");
let activePage = 0;

function setPage(index) {
  activePage = (index + pages.length) % pages.length;
  pages.forEach((page, pageIndex) => {
    page.classList.toggle("active", pageIndex === activePage);
  });
  if (pageIndicator) {
    pageIndicator.textContent = String(activePage + 1).padStart(2, "0");
  }
}

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.pageAction === "next" ? 1 : -1;
    setPage(activePage + direction);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setPage(activePage + 1);
  if (event.key === "ArrowLeft") setPage(activePage - 1);
});

/* ═══════════════════════════════════════════
   Filtres Portfolio
═══════════════════════════════════════════ */
const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = category === "all" || card.dataset.category === category;
      if (shouldShow) {
        card.style.display = "";
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        requestAnimationFrame(() => {
          card.style.transition = "opacity 0.45s ease, transform 0.45s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(12px)";
        window.setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

/* ═══════════════════════════════════════════
   Formulaire de contact — EmailJS
═══════════════════════════════════════════ */
const contactForm = document.querySelector("#contactForm");
const contactStatus = document.querySelector("#contactStatus");

const EMAILJS_PUBLIC_KEY  = "INtZifFaMD80O403k";   // Account > API Keys
const EMAILJS_SERVICE_ID  = "service_4oywrlt";   // Email Services > Service ID
const EMAILJS_TEMPLATE_ID = "template_52smbl8";  // Email Templates > Template ID

emailjs.init(EMAILJS_PUBLIC_KEY);

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Anti-spam : si le champ piège invisible a été rempli, c'est un robot.
  // On simule un succès sans jamais appeler EmailJS (evite de gaspiller le quota
  // et de spammer la boite mail de Warren).
  const honeypot = document.getElementById("contactWebsite");
  if (honeypot && honeypot.value.trim() !== "") {
    contactForm.reset();
    return;
  }

  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  const lang = typeof getCurrentLang === "function" ? getCurrentLang() : "en";
  contactStatus.textContent = lang === "fr" ? "Envoi en cours..." : "Sending...";

  const templateParams = {
    from_name:  document.getElementById("contactName").value.trim().slice(0, 100),
    from_email: document.getElementById("contactEmail").value.trim().slice(0, 150),
    message:    document.getElementById("contactMessage").value.trim().slice(0, 2000),
    to_email:   "warren2000ayi@gmail.com"
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    contactForm.reset();
    contactStatus.textContent = lang === "fr"
      ? "Votre message a bien été reçu. Merci."
      : "Your message has been received. Thank you.";
  } catch (error) {
    console.error("EmailJS error:", error);
    contactStatus.textContent = lang === "fr"
      ? "Le message n'a pas pu être envoyé. Veuillez réessayer plus tard."
      : "The message could not be sent. Please try again later.";
  } finally {
    submitButton.disabled = false;
  }
});

const newsletterForm = document.querySelector(".newsletter");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });
}

/* ═══════════════════════════════════════════
   Nav active au scroll (IntersectionObserver)
═══════════════════════════════════════════ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const relatedLink = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting && relatedLink) {
        navLinks.forEach((link) => link.classList.remove("active"));
        relatedLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -40% 0px" }
);

sections.forEach((section) => observer.observe(section));

/* ═══════════════════════════════════════════
   Animations GSAP / ScrollTrigger
═══════════════════════════════════════════ */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-content > *", {
    y: 44,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    delay: 0.15
  });

  gsap.from(".hero-img", {
    y: 50,
    opacity: 0,
    duration: 1.1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.35
  });

  gsap.from(".hero-arch-frame span", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.6
  });

  gsap.utils.toArray(".hero-img").forEach((img) => {
    gsap.to(img, {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.2
      }
    });
  });

  gsap.utils.toArray(".section-reveal").forEach((section) => {
    if (section.classList.contains("hero")) return;

    gsap.from(section.querySelector(".container, .philosophy-inner") || section.children, {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 82%"
      }
    });
  });

  gsap.utils.toArray(".project-card, .yt-card, .teaser-grid article").forEach((el, i) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay: (i % 4) * 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%"
      }
    });
  });

  gsap.from(".yt-featured", {
    y: 36,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".youtube-layout",
      start: "top 82%"
    }
  });

  gsap.from(".quote-line", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".philosophy",
      start: "top 70%"
    }
  });

  gsap.from(".book-chapters li", {
    x: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".book-chapters",
      start: "top 85%"
    }
  });

  gsap.to(".book-mockup", {
    rotateY: -12,
    ease: "none",
    scrollTrigger: {
      trigger: ".book-visual",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    }
  });

  // Compteurs animes des book-specs (apparition en pop)
  gsap.utils.toArray(".spec-num").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 14,
      duration: 0.6,
      delay: i * 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".book-specs",
        start: "top 88%"
      },
      onComplete: () => el.classList.add("is-counted")
    });
  });
} else {
  // Fallback sans GSAP : simple classe visible pour ne pas rester invisible
  document.querySelectorAll(".section-reveal, .project-card, .yt-card").forEach((el) => {
    el.style.opacity = "1";
  });
}

/* ═══════════════════════════════════════════
   Project Modal (bilingue)
═══════════════════════════════════════════ */
const projectModal = document.getElementById("projectModal");
const pmOverlay    = document.querySelector(".pm-overlay");
const pmCloseBtn   = document.querySelector(".pm-close");
const pmImage      = document.getElementById("pmImage");
const pmMeta       = document.getElementById("pmMeta");
const pmTitle      = document.getElementById("pmTitle");
const pmDesc       = document.getElementById("pmDesc");
const pmCategory   = document.getElementById("pmCategory");

let activeModalCard = null;

function renderModalContent(card) {
  const lang = typeof getCurrentLang === "function" ? getCurrentLang() : "en";
  const isFr = lang === "fr";

  pmImage.src = card.getAttribute("data-img");
  pmImage.alt = isFr
    ? (card.getAttribute("data-title-fr") || card.getAttribute("data-title"))
    : card.getAttribute("data-title");

  pmMeta.textContent = isFr
    ? (card.getAttribute("data-meta-fr") || card.getAttribute("data-meta"))
    : card.getAttribute("data-meta");

  pmTitle.textContent = isFr
    ? (card.getAttribute("data-title-fr") || card.getAttribute("data-title"))
    : card.getAttribute("data-title");

  pmDesc.textContent = isFr
    ? (card.getAttribute("data-desc-fr") || card.getAttribute("data-desc"))
    : card.getAttribute("data-desc");

  const cat = card.getAttribute("data-category");
  const catLabels = (typeof PROJECT_CATEGORY_LABELS !== "undefined" && PROJECT_CATEGORY_LABELS[lang])
    ? PROJECT_CATEGORY_LABELS[lang]
    : null;
  pmCategory.textContent = catLabels && catLabels[cat]
    ? catLabels[cat]
    : cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ");
}

function openProjectModal(card) {
  activeModalCard = card;
  renderModalContent(card);

  projectModal.hidden          = false;
  document.body.style.overflow = "hidden";
  pmCloseBtn.focus();
}

function closeProjectModal() {
  projectModal.hidden          = true;
  document.body.style.overflow = "";
  activeModalCard = null;
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => openProjectModal(card));
});

pmCloseBtn.addEventListener("click", closeProjectModal);
pmOverlay.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !projectModal.hidden) closeProjectModal();
});

// Si la modale est ouverte pendant un changement de langue, on la retraduit en direct
document.addEventListener("languagechange", () => {
  if (activeModalCard && !projectModal.hidden) {
    renderModalContent(activeModalCard);
  }
});

/* ═══════════════════════════════════════════
   YouTube — Lazy thumbnail loading
═══════════════════════════════════════════ */
document.querySelectorAll(".yt-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const ytId  = thumb.getAttribute("data-ytid") || "";
    const title = thumb.getAttribute("data-title") || "";
    const wrap  = thumb.closest(".yt-embed-wrap");

    // Defense en profondeur : un ID YouTube valide est toujours 11
    // caracteres alphanumeriques (+ - et _). On refuse tout le reste
    // plutot que d'injecter une valeur inattendue dans une URL d'iframe.
    if (!/^[a-zA-Z0-9_-]{11}$/.test(ytId)) {
      console.error("ID YouTube invalide, chargement annule.");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
    iframe.title = title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0;";

    wrap.innerHTML = "";
    wrap.appendChild(iframe);
  });
});
