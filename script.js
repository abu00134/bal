document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // 3D tilt effect for elements marked with .tilt
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const tilts = Array.from(document.querySelectorAll('.tilt'));
    const perspective = 800; // px
    const maxRX = 12; // deg
    const maxRY = 16; // deg

    tilts.forEach((el) => {
      const reset = () => {
        el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
        el.style.setProperty('--mx', '50%');
        el.style.setProperty('--my', '0%');
      };

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const x = (e.clientX - rect.left) / rect.width; // 0..1
        const y = (e.clientY - rect.top) / rect.height; // 0..1
        const rx = (0.5 - y) * (maxRX * 2); // invert Y for natural tilt
        const ry = (x - 0.5) * (maxRY * 2);
        el.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
        el.style.setProperty('--mx', `${((x) * 100).toFixed(1)}%`);
        el.style.setProperty('--my', `${((y) * 100).toFixed(1)}%`);
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', reset);
      reset();
    });
  }
});
