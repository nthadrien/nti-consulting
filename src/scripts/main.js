// theme switch script;

const theme = (() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
})();

if (theme === 'light') {
  document.querySelector('body').classList.remove('dark');
} else {
  document.querySelector('body').classList.add('dark');
}

window.localStorage.setItem('theme', theme);

const handleToggleClick = () => {
  const element = document.querySelector('body');
  element.classList.toggle("dark");

  const isDark = element.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

document.getElementById("themeToggle").addEventListener("click", handleToggleClick);

// observers Scripts section;

const header = document.querySelector('header');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-left,.slide-top,.slide-right');
const navbar = document.querySelector('nav');

const navOption = {
  // root: header,
  rootMargin: "-90px",
  threshold: 0,
};

const navObserver = new IntersectionObserver(function (entries, navOption) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) navbar.classList.add('nav-scrolled');
    else navbar.classList.remove('nav-scrolled');
  })
}, navOption);

const faderOption = {
  threshold: 0.98,
  rootMargin: "0px 0px 190px 0px"
};

const faderObserver = new IntersectionObserver(function (entries, faderOption) {
  entries.forEach((entry) => {
    if ( !entry.isIntersecting ) return;
    else {
      entry.target.classList.add('appear')
      faderObserver.unobserve(entry.target)
    }
  })
}, faderOption);


const sliderOption = {
  threshold: 0.4,
};

const sliderObserver = new IntersectionObserver(function (entries, navObserver) {
  entries.forEach((entry) => {
    if ( !entry.isIntersecting ) return;
    else {
      entry.target.classList.add('appear')
      faderObserver.unobserve(entry.target)
    }
  })
}, sliderOption);

navObserver.observe(header);
faders.forEach( fader => faderObserver.observe(fader) );
sliders.forEach( slide => sliderObserver.observe(slide) );