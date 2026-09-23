const deck = document.querySelector('.deck');
if (deck) {
  const slides = [...deck.querySelectorAll('.deck-slides figure')];
  const controls = deck.querySelector('.deck-controls');
  const count = deck.querySelector('.slide-count');
  const previous = deck.querySelector('.deck-prev');
  const next = deck.querySelector('.deck-next');
  const dots = deck.querySelector('.slide-dots');
  let current = 0;
  const buttons = slides.map((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `Show slide ${index + 1}`);
    button.addEventListener('click', () => show(index));
    dots.append(button);
    return button;
  });
  function show(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
      buttons[i].setAttribute('aria-pressed', String(i === current));
    });
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
  }
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  deck.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  controls.hidden = false;
  show(0);
}
