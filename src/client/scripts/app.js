/* ---- Start PWA Service Worker ---- */
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {

    try {
      const registration = await navigator.serviceWorker.register('/sw.js');

      if (registration.installing) {
        console.log('Service worker installing');

      } else if (registration.waiting) {
        console.log('Service worker installed');

      } else if (registration.active) {
        console.log('Service worker active');
      }

    } catch (err) {
      console.error(`Registration failed with ${err}`);
    }
  }
};

registerServiceWorker();


/* ---- Show go to top button ---- */
const showTopBtn = () => {
	const topBtn = document.querySelector('.top-btn');

	(document.body.scrollTop > 300) || (document.documentElement.scrollTop > 300)
    ? topBtn.classList.add('show')
    : topBtn.classList.remove('show');
};

window.addEventListener('scroll', showTopBtn);


/* ---- Scroll to top function ---- */
const scrollToTop = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.querySelector('.top-btn').addEventListener('click', scrollToTop);


/* ---- Start Change Header Background Color On Scroll ---- */
const changeHeaderBg = () => {

  const header = document.getElementById('site-header');

  (window.pageYOffset > 100)
    ? header.classList.add('change--bg')
    : header.classList.remove('change--bg');
}

document.addEventListener('scroll', changeHeaderBg);


/* ---- Start Toggle Fullscreen Menu ---- */
const toggleMenu = () => {

  const menuBtn               = document.querySelector('.toggle-menu'),
        fullscreenMenu        = document.querySelector('.fullscreen-menu'),
        header                = document.getElementById('site-header'),
        firstFocusableElement = document.querySelector('.site-logo a'),
        lastFocusableElement  = document.querySelector('.theme-btn'),
        documentLang          = document.documentElement.lang;

  // Toggle fullscreen menu
  menuBtn.classList.toggle('open');
  fullscreenMenu.classList.toggle('show');
  document.body.classList.toggle('disable--scrolling');

  // Remove change header background color on scroll
  if (window.pageYOffset > 100) {
    header.classList.toggle('change--bg');
  }

  // Hide go to top button
  if ((document.body.scrollTop > 300) || (document.documentElement.scrollTop > 300)) {
    document.querySelector('.top-btn').classList.toggle('show');
  }

  // Accessibility
  if (menuBtn.classList.contains('open')) {

    documentLang === 'ar'
      ? menuBtn.setAttribute('aria-label', 'اغلق القائمة')
      : menuBtn.setAttribute('aria-label', 'close menu');

  } else {

    documentLang === 'ar'
      ? menuBtn.setAttribute('aria-label', 'افتح القائمة')
      : menuBtn.setAttribute('aria-label', 'open menu');
  }

  // Keyboard focus trap
  const trapTapKey = (evt) => {

    if (!fullscreenMenu.classList.contains('show')) {

      document.removeEventListener('keydown', trapTapKey);
      return;
    }

    // Check if the Tab key was pressed
    if (evt.keyCode === 9) {

      if (evt.shiftKey) {

        if (document.activeElement === firstFocusableElement) {

          evt.preventDefault();
          lastFocusableElement.focus();
        }

      } else {

        if (document.activeElement === lastFocusableElement) {

          evt.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  };

  document.addEventListener('keydown', trapTapKey);
};

document.querySelector('.toggle-menu').addEventListener('click', toggleMenu);


/* ---- Start Toggle Dark Theme ---- */
const themeBtn = document.getElementById('theme-btn');

if (window.localStorage.getItem('darkTheme') === 'true') {

  document.body.classList.add('dark-theme');
  themeBtn.checked = true;
  themeBtn.setAttribute('aria-checked', 'true');
}

const toggleTheme = () => {

  document.body.classList.toggle('dark-theme');

  if (window.localStorage.getItem('darkTheme') === 'true') {

    window.localStorage.setItem('darkTheme', 'false');
    themeBtn.setAttribute('aria-checked', 'false');

  } else {

    window.localStorage.setItem('darkTheme', 'true');
    themeBtn.setAttribute('aria-checked', 'true');
  }
};

themeBtn.addEventListener('change', toggleTheme);
