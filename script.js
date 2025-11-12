function toggleAccessibilityPanel() {
  const panel = document.getElementById('accessibility-panel');
  const btn = document.querySelector('.btn-accessibility');
  const hidden = panel.classList.toggle('visually-hidden');
  btn.setAttribute('aria-expanded', !hidden);
  if (!hidden) panel.focus();
}
function changeFontSize(delta) {
  const html = document.documentElement;
  const curr = parseFloat(html.style.fontSize || 16);
  let next = curr + delta;
  if (next < 12) next = 12;
  if (next > 24) next = 24;
  html.style.fontSize = next + 'px';
}
function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}