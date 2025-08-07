document.addEventListener('DOMContentLoaded', function () {
  // Populate localized date placeholders
  try {
    const dateText = new Date().toLocaleDateString('de-DE');
    document.querySelectorAll('.js-date').forEach(el => el.textContent = dateText);
  } catch (e) {
    // ignore
  }

  // Back-to-top
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const onScroll = () => {
      if (window.scrollY > 300) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    backToTop.addEventListener('click', () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  // Two-click Google Maps loader
  const loadMapBtn = document.getElementById('load-map');
  if (loadMapBtn) {
    loadMapBtn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4175.55044151406!2d11.000831777623873!3d49.594968871441566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1f8dd8ae0fb1b%3A0xa33b6ceee477d04!2sPhysio%20Violia%20GmbH!5e1!3m2!1sde!2sde!4v1741040290689!5m2!1sde!2sde";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.className = "w-100 h-100 border-0";
      const container = document.getElementById('map-container');
      if (container) {
        container.innerHTML = "";
        container.appendChild(iframe);
      }
      try { localStorage.setItem('consented-maps', '1'); } catch (e) {}
    });
    try {
      if (localStorage.getItem('consented-maps') === '1') {
        loadMapBtn.click();
      }
    } catch (e) {}
  }
});
