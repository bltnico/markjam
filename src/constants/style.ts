export const TEXT = { size: 24, font: 'sink', lineSpacing: 10 };

export const ANIM_TEXT = {
  ...TEXT,
  transform: () => ({
    pos: vec2(0, wave(-4, 4, time() * 4)),
  }),
};
