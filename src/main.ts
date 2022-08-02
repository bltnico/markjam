import './engine/kaboom';
import './engine/sprites';
import './engine/sounds';

import './scenes/start';
import './scenes/battle';
import './scenes/levels';
import './scenes/boss';

function start() {
  go('levels');
}

window.addEventListener('DOMContentLoaded', () => {
  start();
  const canvas = document.querySelector('canvas');
  canvas?.focus();

  document.addEventListener('click', () => {
    canvas?.focus();
  });
});
