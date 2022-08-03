import addBackground from '../components/background';
import { ANIM_TEXT } from '../constants/style';

const TEXT_WIDTH = 650;

const credit = () => {
  addBackground();

  add([
    //
    text('Credits', { ...ANIM_TEXT, width: TEXT_WIDTH, size: 34 }),
    pos(center().x - TEXT_WIDTH / 2, center().y - 200),
  ]);

  add([
    //
    text('Original music by Powered Rails', { ...ANIM_TEXT, width: TEXT_WIDTH }),
    pos(center().x - TEXT_WIDTH / 2, center().y - 100),
  ]);

  add([
    //
    text('Original assets by Eldenn', { ...ANIM_TEXT, width: TEXT_WIDTH }),
    pos(center().x - TEXT_WIDTH / 2, center().y),
  ]);

  add([
    //
    text('An original idea from Powered Rails & bltnico', { ...ANIM_TEXT, width: TEXT_WIDTH }),
    pos(center().x - TEXT_WIDTH / 2, center().y + 100),
  ]);
};

scene('credit', credit);
