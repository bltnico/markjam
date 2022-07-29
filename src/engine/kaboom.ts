import kaboom from 'kaboom';

const pixelRatio = window.devicePixelRatio > 2.5 ? 2.5 : window.devicePixelRatio;

export const k = kaboom({
  width: 900,
  height: 500,
  // scale: pixelRatio,
  debug: import.meta.env.DEV,
  background: [255, 255, 255, 1],
});

export default k;
