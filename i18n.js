/* ═══════════════════════════════════════════════════════════
   InHabit — Traduction complète FR / EN
   Toutes les chaines visibles de la page sont couvertes ici.
   Pour ajouter un nouveau texte traduisible :
     1. Ajoute data-i18n="ma_cle" sur l'element HTML
     2. Ajoute "ma_cle" dans les deux objets ci-dessous (en / fr)
   Pour un attribut (placeholder, title...) :
     data-i18n-attr="placeholder:ma_cle"
═══════════════════════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    // Nav
    nav_home: "Home", nav_books: "Books", nav_youtube: "YouTube",
    nav_portfolio: "Portfolio", nav_about: "About", nav_contact: "Contact",

    // Hero
    hero_eyebrow: "Architecture / Publishing / Thought",
    hero_h1_0: "In questioning", hero_h1_1: "space,", hero_h1_2: "we redefine habit.",
    hero_subtitle: "Architect • Author",
    hero_btn1: "Discover The Book", hero_btn2: "View Portfolio",
    hero_scroll: "Scroll",

    // Book launch
    book_eyebrow: "CONCEPT : The creation of concept in architecture",
    book_h2: "InHabit: Questioning Space",
    book_lead: "A premium architectural essay on space, identity and the rituals of dwelling.",
    book_kicker: "Volume I — InHabit Studio Press",
    book_pullquote: "« Architecture is not what we build. It is what we become through building. »",
    book_lead2: "A cinematic and intimate exploration of architecture as a living dialogue between place, memory, body and transformation — written for designers, students, thinkers and readers who believe that space shapes the way we become.",
    book_ch1: "Introduction",
    book_ch2: "Inspiration & references",
    book_ch3: "The design process",
    book_ch4: "Guided & miniproject",
    book_ch5: "Interview series",
    book_ch6: "Commented case studies",
    book_btn1: "Pre-Order",
    book_btn2: "Read Sample Pages",
    book_spec_tag: "240 pp · 200×240 mm · Hardcover · EN/FR",
    spec_release_label: "Release",
    spec_release_value: "8 June — 2026",
    spec_publisher_label: "Publisher",
    spec_formats_label: "Formats",
    spec_formats_value: "Hardcover · Digital · Limited Edition",

    // Preview
    preview_eyebrow: "Book Preview",
    preview_h2: "Explore selected pages before reserving your copy.",
    preview_hint: "Use arrows to navigate pages",
    page1_title: "+20 Architects around the world",
    page2_title: "Walls as memory",
    page3_title: "Dwelling as becoming",
    page4_title: "The human scale",
    page5_title: "Material silence",

    // Preorder
    preorder_eyebrow: "Pre-Order",
    preorder_h2: "Reserve your copy directly from the InHabit platform.",
    preorder_lead: "Join the first readers. Limited hardcover editions with signed bookplate available upon launch.",
    preorder_perk1: "Early access to sample chapters",
    preorder_perk2: "Launch event invitation",
    preorder_perk3: "Exclusive author note",
    preorder_badge: "Available Now",
    preorder_cta_specs: "240 pp · Hardcover · EN/FR<br>First Print — Limited Edition · Signed Bookplate",
    preorder_edition_label: "Edition",
    preorder_edition_value: "First Print — Limited",
    preorder_formats_label: "Formats",
    preorder_formats_value: "Hardcover · Digital",
    preorder_delivery_label: "Delivery",
    preorder_delivery_value: "International Shipping",
    preorder_btn: "Reserve My Copy",
    preorder_note: "Secure reservation · No payment required now",

    // YouTube
    youtube_eyebrow: "YouTube",
    youtube_h2: "Architecture talks & spatial thinking.",
    youtube_lead: "The most watched videos from the channel",
    youtube_channel_btn: "View Channel",
    yt1_badge: "Most Popular · 31K+ views",
    yt1_title: "Africa is drifting away from its own architectural logic",
    yt1_desc: "A reflection on African spatial identity and the need to reconnect with rooted architecture.",
    yt2_badge: "8.9K views",
    yt2_title: "The future of architecture is in ASIA",
    yt3_badge: "7.3K views",
    yt3_title: "The solution Africa, Japan and Latin America all found on their own",
    youtube_channel_desc: "InHabit_Archi explores architecture, cities and spatial thinking every week through short, accessible videos — between Africa and the rest of the world.",

    // Portfolio
    portfolio_eyebrow: "Portfolio",
    portfolio_h2: "Selected architectural studies and spatial propositions.",
    filter_all: "All",
    filter_residential: "Residential",
    filter_commercial: "Commercial",
    filter_urban: "Urban Design",
    filter_concept: "Concept Projects",
    project_view: "View Project",
    project1_meta: "Residential / Cotonou / 2026",
    project1_title: "Ivory Courtyard House",
    project1_desc: "A quiet residential composition structured by filtered light and inward gardens.",
    project2_meta: "Commercial / Abidjan / 2025",
    project2_title: "Bronze Retail Pavilion",
    project2_desc: "A refined commercial shell with warm material rhythm and porous frontage.",
    project3_meta: "Urban Design / Lome / 2025",
    project3_title: "Linear Civic Spine",
    project3_desc: "A public sequence linking movement, shade, civic pause and collective life.",
    project4_meta: "Concept / 2026",
    project4_title: "House of Quiet Light",
    project4_desc: "An experimental study on shadow, compression and the ceremonial entry.",

    // Featured case study
    case_tag: "Featured",
    case_eyebrow: "Featured Project",
    case_h2: "The Inward House",
    case_desc: "A case study in restraint, material calm and spatial introspection. The project uses bronze-toned screens, quiet masonry and framed sky views to build a measured domestic rhythm.",
    case_l1_label: "Concept",
    case_l1_value: "Ritual, shade and inwardness",
    case_l2_label: "Materials",
    case_l2_value: "Stone, timber, bronze, lime plaster",
    case_l3_label: "Studies",
    case_l3_value: "Sketches, renderings, section diagrams",

    // Philosophy
    philosophy_l1: "We do not merely occupy spaces.",
    philosophy_l2: "We become them.",

    // About
    about_eyebrow: "About The Author",
    about_lead: "Architect, author and visionary thinker, Warren Riad AYITOU develops an architectural language rooted in clarity, human presence and intellectual depth.",
    about_p2: "His work approaches design as a disciplined act of listening: to context, to material, to silence, and to the ways people inhabit the world.",

    // Future / coming soon
    future_eyebrow: "Coming Soon",
    future_h2: "Future products for designers, readers and spatial thinkers.",
    future1_title: "Design Guides",
    future1_desc: "Concise references for architectural thinking.",
    future2_title: "Workshops",
    future2_desc: "Immersive sessions on concept, form and storytelling.",
    future3_title: "Masterclasses",
    future3_desc: "Premium lessons for architecture and creative practice.",
    future4_title: "Resources",
    future4_desc: "Curated tools, readings and visual references.",

    // Contact
    contact_eyebrow: "Contact",
    contact_h2: "Start a conversation.",
    contact_lead: "For collaborations, speaking engagements, or press inquiries — reach out directly.",
    form_name_label: "Name",
    form_name_placeholder: "Your name",
    form_email_label: "Email",
    form_message_label: "Message",
    form_message_placeholder: "Your message...",
    form_submit_btn: "Send Message",

    // Footer
    footer_tagline: "Architect • Author • Creator",
    newsletter_label: "Stay informed",
    newsletter_btn: "Subscribe",
    footer_copyright: "© 2026 InHabit. All rights reserved.",
    footer_crafted: "Crafted with intention",
    footer_legal_link: "Legal Notice",
    footer_privacy_link: "Privacy Policy",

    // Divers UI
    back_to_home: "Back to home",
  },

  fr: {
    nav_home: "Accueil", nav_books: "Livre", nav_youtube: "YouTube",
    nav_portfolio: "Portfolio", nav_about: "À propos", nav_contact: "Contact",

    hero_eyebrow: "Architecture / Édition / Pensée",
    hero_h1_0: "En questionnant", hero_h1_1: "l'espace,", hero_h1_2: "nous redéfinissons l'habitude.",
    hero_subtitle: "Architecte • Auteur",
    hero_btn1: "Découvrir le Livre", hero_btn2: "Voir le Portfolio",
    hero_scroll: "Défiler",

    book_eyebrow: "CONCEPT : La création du concept en architecture",
    book_h2: "InHabit: Questioning Space",
    book_lead: "Un essai architectural de premier plan sur l'espace, l'identité et les rituels du logement.",
    book_kicker: "Volume I — InHabit Studio Press",
    book_pullquote: "« L'architecture n'est pas ce que nous construisons. C'est ce que nous devenons en construisant. »",
    book_lead2: "Une exploration cinématographique et intime de l'architecture comme dialogue vivant entre le lieu, la mémoire, le corps et la transformation — écrite pour les designers, étudiants, penseurs et lecteurs qui croient que l'espace façonne ce que nous devenons.",
    book_ch1: "Introduction",
    book_ch2: "Inspiration & références",
    book_ch3: "Le processus de conception",
    book_ch4: "Projet guidé & miniprojet",
    book_ch5: "Série d'entretiens",
    book_ch6: "Études de cas commentées",
    book_btn1: "Pré-commander",
    book_btn2: "Lire des pages",
    book_spec_tag: "240 pp · 200×240 mm · Relié · EN/FR",
    spec_release_label: "Sortie",
    spec_release_value: "8 juin — 2026",
    spec_publisher_label: "Éditeur",
    spec_formats_label: "Formats",
    spec_formats_value: "Relié · Numérique · Édition Limitée",

    preview_eyebrow: "Aperçu du Livre",
    preview_h2: "Explorez des pages sélectionnées avant de réserver votre exemplaire.",
    preview_hint: "Utilisez les flèches pour naviguer",
    page1_title: "+20 architectes à travers le monde",
    page2_title: "Les murs comme mémoire",
    page3_title: "Habiter, c'est devenir",
    page4_title: "L'échelle humaine",
    page5_title: "Le silence des matériaux",

    preorder_eyebrow: "Pré-commande",
    preorder_h2: "Réservez votre exemplaire directement sur la plateforme InHabit.",
    preorder_lead: "Rejoignez les premiers lecteurs. Éditions cartonnées limitées avec ex-libris signé disponibles au lancement.",
    preorder_perk1: "Accès anticipé aux chapitres échantillons",
    preorder_perk2: "Invitation à l'événement de lancement",
    preorder_perk3: "Note exclusive de l'auteur",
    preorder_badge: "Disponible maintenant",
    preorder_cta_specs: "240 pp · Relié · EN/FR<br>Premier tirage — Édition limitée · Ex-libris signé",
    preorder_edition_label: "Édition",
    preorder_edition_value: "Premier tirage — Limitée",
    preorder_formats_label: "Formats",
    preorder_formats_value: "Relié · Numérique",
    preorder_delivery_label: "Livraison",
    preorder_delivery_value: "Expédition internationale",
    preorder_btn: "Réserver mon exemplaire",
    preorder_note: "Réservation sécurisée · Aucun paiement requis maintenant",

    youtube_eyebrow: "YouTube",
    youtube_h2: "Conférences d'architecture et pensée spatiale.",
    youtube_lead: "Les vidéos les plus regardées de la chaîne",
    youtube_channel_btn: "Voir la chaîne",
    yt1_badge: "Le plus populaire · 31K+ vues",
    yt1_title: "L'Afrique s'éloigne de sa propre logique architecturale",
    yt1_desc: "Une réflexion sur l'identité spatiale africaine et la nécessité de retrouver une architecture enracinée.",
    yt2_badge: "8,9K vues",
    yt2_title: "Le futur de l'architecture est en ASIE",
    yt3_badge: "7,3K vues",
    yt3_title: "La solution que l'Afrique, le Japon et l'Amérique latine ont tous trouvée seuls",
    youtube_channel_desc: "InHabit_Archi explore, chaque semaine, l'architecture, la ville et la pensée spatiale à travers des vidéos courtes et accessibles — entre l'Afrique et le reste du monde.",

    portfolio_eyebrow: "Portfolio",
    portfolio_h2: "Études architecturales sélectionnées et propositions spatiales.",
    filter_all: "Tous",
    filter_residential: "Résidentiel",
    filter_commercial: "Commercial",
    filter_urban: "Design Urbain",
    filter_concept: "Projets Concept",
    project_view: "Voir le Projet",
    project1_meta: "Résidentiel / Cotonou / 2026",
    project1_title: "Maison Cour d'Ivoire",
    project1_desc: "Une composition résidentielle apaisée structurée par une lumière filtrée et des jardins intérieurs.",
    project2_meta: "Commercial / Abidjan / 2025",
    project2_title: "Pavillon Commercial Bronze",
    project2_desc: "Une enveloppe commerciale raffinée avec un rythme de matériaux chaleureux et une façade poreuse.",
    project3_meta: "Design Urbain / Lomé / 2025",
    project3_title: "Colonne Civique Linéaire",
    project3_desc: "Une séquence publique reliant mouvement, ombre, pause civique et vie collective.",
    project4_meta: "Concept / 2026",
    project4_title: "Maison de la Lumière Silencieuse",
    project4_desc: "Une étude expérimentale sur l'ombre, la compression et l'entrée cérémoniale.",

    case_tag: "En Vedette",
    case_eyebrow: "Projet en Vedette",
    case_h2: "The Inward House",
    case_desc: "Une étude de cas sur la retenue, le calme des matériaux et l'introspection spatiale. Le projet utilise des écrans aux tons bronze, une maçonnerie silencieuse et des vues cadrées sur le ciel pour construire un rythme domestique mesuré.",
    case_l1_label: "Concept",
    case_l1_value: "Rituel, ombre et introspection",
    case_l2_label: "Matériaux",
    case_l2_value: "Pierre, bois, bronze, enduit à la chaux",
    case_l3_label: "Études",
    case_l3_value: "Croquis, rendus, coupes",

    philosophy_l1: "Nous n'occupons pas simplement les espaces.",
    philosophy_l2: "Nous devenons eux.",

    about_eyebrow: "À propos de l'auteur",
    about_lead: "Architecte, auteur et penseur visionnaire, Warren Riad AYITOU développe un langage architectural enraciné dans la clarté, la présence humaine et la profondeur intellectuelle.",
    about_p2: "Son travail aborde la conception comme un acte d'écoute disciplinée : du contexte, du matériau, du silence, et de la manière dont les gens habitent le monde.",

    future_eyebrow: "Bientôt disponible",
    future_h2: "Futurs produits pour designers, lecteurs et penseurs de l'espace.",
    future1_title: "Guides de conception",
    future1_desc: "Références concises pour la pensée architecturale.",
    future2_title: "Ateliers",
    future2_desc: "Sessions immersives sur le concept, la forme et le récit.",
    future3_title: "Masterclasses",
    future3_desc: "Cours premium pour l'architecture et la pratique créative.",
    future4_title: "Ressources",
    future4_desc: "Outils, lectures et références visuelles sélectionnés.",

    contact_eyebrow: "Contact",
    contact_h2: "Commençons une conversation.",
    contact_lead: "Pour les collaborations, interventions ou demandes presse — contactez directement.",
    form_name_label: "Nom",
    form_name_placeholder: "Votre nom",
    form_email_label: "Email",
    form_message_label: "Message",
    form_message_placeholder: "Votre message...",
    form_submit_btn: "Envoyer",

    footer_tagline: "Architecte • Auteur • Créateur",
    newsletter_label: "Restez informé",
    newsletter_btn: "S'abonner",
    footer_copyright: "© 2026 InHabit. Tous droits réservés.",
    footer_crafted: "Conçu avec intention",
    footer_legal_link: "Mentions légales",
    footer_privacy_link: "Politique de confidentialité",

    back_to_home: "Retour à l'accueil",
  },
};

/* ─── Traductions specifiques aux cartes projet (modale) ─── */
const PROJECT_CATEGORY_LABELS = {
  en: {
    residential: "Residential",
    commercial: "Commercial",
    urban: "Urban Design",
    concept: "Concept Projects",
  },
  fr: {
    residential: "Résidentiel",
    commercial: "Commercial",
    urban: "Design Urbain",
    concept: "Projets Concept",
  },
};

let currentLang = localStorage.getItem("inhabit-lang") || "en";

function getCurrentLang() {
  return currentLang;
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Texte visible standard
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Attributs (placeholder, title, etc.) — format: "attr:cle"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key && t[key] !== undefined) {
        el.setAttribute(attr, t[key]);
      }
    });
  });

  // title / aria-label traduits (ex: bouton flottant retour accueil)
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (t[key] !== undefined) {
      el.setAttribute("title", t[key]);
      el.setAttribute("aria-label", t[key]);
    }
  });

  const langLabel = document.querySelector(".lang-label");
  if (langLabel) langLabel.textContent = lang === "en" ? "FR" : "EN";

  document.documentElement.lang = lang;
  localStorage.setItem("inhabit-lang", lang);
  currentLang = lang;

  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.querySelector(".lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "fr" : "en");
    });
  }
  // Appliquer la langue sauvegardee au chargement
  applyLanguage(currentLang);
});
