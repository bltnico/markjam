import { ANIM_TEXT, TEXT_WIDTH } from "./style";

export const END_CREDITS_PAGE_1 = [
  {
    text: 'Credits',
    options: { ...ANIM_TEXT, width: TEXT_WIDTH, size: 34 },
    pos: pos(center().x - TEXT_WIDTH / 2, center().y - 200),
  },
  //
  {
    text: 'Original music by Powered Rails',
    options: { ...ANIM_TEXT, width: TEXT_WIDTH },
    pos: pos(center().x - TEXT_WIDTH / 2, center().y - 100),
  },
  //
  {
    text: 'Original assets by Eldenn and Powered Rails',
    options: { ...ANIM_TEXT, width: TEXT_WIDTH },
    pos: pos(center().x - TEXT_WIDTH / 2, center().y),
  },

  //
  {
    text: 'Level and game design made by bltnico',
    options: { ...ANIM_TEXT, width: TEXT_WIDTH },
    pos: pos(center().x - TEXT_WIDTH / 2, center().y + 100),
  },
];

export const END_CREDITS_PAGE_2 = [
  {
    text: 'Funny death dialogs found by Vincent C.',
    options: { ...ANIM_TEXT, width: TEXT_WIDTH },
    pos: pos(center().x - TEXT_WIDTH / 2, center().y - 200),
  },
  //
  {
    text: 'Special thanks to Enzo S.',
    options: { ...ANIM_TEXT, width: TEXT_WIDTH },
    pos: pos(center().x - TEXT_WIDTH / 2, center().y - 100),
  },
  //
  {
    text: 'An original idea from Powered Rails & bltnico',
    options: { ...ANIM_TEXT, width: TEXT_WIDTH },
    pos: pos(center().x - TEXT_WIDTH / 2, center().y),
  },
];
