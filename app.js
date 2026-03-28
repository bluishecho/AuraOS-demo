(() => {
  const prototype = document.querySelector('.prototype');
  const screens = [...document.querySelectorAll('.screen')];
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const label = document.getElementById('screenLabel');
  const maxScreen = 8;

  let current = Number(prototype.dataset.currentScreen || 1);

  function setScreen(target) {
    const next = Math.min(maxScreen, Math.max(1, Number(target) || 1));
    current = next;
    prototype.dataset.currentScreen = String(current);

    for (const screen of screens) {
      const isActive = Number(screen.dataset.screen) === current;
      screen.classList.toggle('is-active', isActive);
    }

    label.textContent = `${current} / ${maxScreen}`;
    prevBtn.disabled = current === 1;
    nextBtn.disabled = current === maxScreen;
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-go]');
    if (!trigger) return;
    const to = Number(trigger.dataset.go);
    if (!Number.isNaN(to)) {
      setScreen(to);
    }
  });

  prevBtn.addEventListener('click', () => setScreen(current - 1));
  nextBtn.addEventListener('click', () => setScreen(current + 1));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') setScreen(current - 1);
    if (event.key === 'ArrowRight') setScreen(current + 1);
  });

  setScreen(current);
})();
