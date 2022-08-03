import './dialog';
import './game';
import { INTRO } from './../constants/dialogs';
import late from './../components/late';
import { ANIM_TEXT } from '../constants/style';
import gameState from '../engine/state';

const bergamote = () => {
  play('jingle');

  // @ts-ignore
  add([text('Markjam', { size: 30 }), pos(center()), origin('center'), lifespan(1)]);
  // @ts-ignore
  add([text('A bergamote production', ANIM_TEXT), pos(center()), origin('center'), late(1), lifespan(2)]);
  // @ts-ignore
  add([text('An original music by Powered Rails', ANIM_TEXT), pos(center()), origin('center'), late(2), lifespan(4)]);

  wait(4, () => {
    gameState.changeMusic(play('dialogs', { loop: true }));

    go('dialog', INTRO, () => {
      go('levels');
    });
  });
};

scene('bergamot', bergamote);
