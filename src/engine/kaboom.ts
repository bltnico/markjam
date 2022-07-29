import kaboom from 'kaboom';

const pixelRatio = window.devicePixelRatio > 2.5 ? 2.5 : window.devicePixelRatio;

export const k = kaboom({
  scale: pixelRatio,
  debug: import.meta.env.DEV,
  background: [0, 0, 0, 1],
});

export default k;
