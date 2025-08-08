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
  iframe.src = "https://www.google.com/maps?q=Hertleinstraße+8,+91052+Erlangen&output=embed";
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
