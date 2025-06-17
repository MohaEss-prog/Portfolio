// Gestion du thème sombre avec mémoire dans le localStorage
const toggle = document.getElementById('darkToggle');
const body = document.body;

function setDarkMode(on) {
  if (on) {
    body.classList.add('bg-gray-900', 'text-white');
    body.classList.remove('bg-white', 'text-black');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.add('bg-white', 'text-black');
    body.classList.remove('bg-gray-900', 'text-white');
    localStorage.setItem('theme', 'light');
  }
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const dark = body.classList.contains('bg-gray-900');
    setDarkMode(!dark);
  });
}

// Au chargement du DOM, on applique le thème sauvegardé
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  setDarkMode(saved !== 'light');
});

// Texte à afficher avec effet machine à écrire
const texts = [
  "Étudiant en cybersécurité & développement logiciel",
  "Passionné par l'IA",
  "Explorateur de réseaux"
];

let i = 0;

function typeWriterEffect() {
  const el = document.getElementById("typingText");
  if (!el) return; // sécurité si élément non trouvé

  let charIndex = 0;
  const text = texts[i];
  el.innerHTML = "";

  const type = setInterval(() => {
    if (charIndex < text.length) {
      el.innerHTML += text.charAt(charIndex++);
    } else {
      clearInterval(type);
      setTimeout(() => {
        i = (i + 1) % texts.length;
        typeWriterEffect();
      }, 2000);
    }
  }, 100);
}

// Observer pour l'animation fade-in-up quand les éléments entrent dans la viewport
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in-up").forEach(el => observer.observe(el));
});

// Barre de progression au scroll
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  if (!progress) return; // sécurité si élément non trouvé

  const h = document.documentElement;
  const scrolled = (h.scrollTop || h.scrollY) / (h.scrollHeight - h.clientHeight);
  progress.style.width = `${scrolled * 100}%`;
  if (scrolled > 0.02) {
    progress.classList.add('active');
  } else {
    progress.classList.remove('active');
  }
});

// Preloader : on cache le loader quand la page est complètement chargée
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Lancement de l'effet machine à écrire au chargement du DOM
document.addEventListener("DOMContentLoaded", typeWriterEffect);

// Toggle menu mobile (burger menu)
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    if (nav) nav.classList.toggle('hidden');
  });
}

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});
