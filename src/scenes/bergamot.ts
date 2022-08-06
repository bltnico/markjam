import './dialog';
import './game';
import { INTRO } from './../constants/dialogs';
import late from './../components/late';
import { ANIM_TEXT } from '../constants/style';
import gameState from '../engine/state';

const bergamote = () => {
  gameState.music?.stop();
  play('jingle');

  add([sprite('markSmokingBg'), fixed(), layer('bac;kground')])
  add([sprite('markSmoking', { anim: 'smoke' }), pos(300, 610)]);

  // // @ts-ignore
  add([sprite('logoAnimated', { anim: 'idle' }), pos(center()), origin('center'), lifespan(2)]);
  // // @ts-ignore
  add([text('A bergamote production', ANIM_TEXT), pos(center()), origin('center'), late(2), lifespan(3)]);
  // // @ts-ignore
  add([text('An original music by Powered Rails', ANIM_TEXT), pos(center()), origin('center'), late(3), lifespan(4)]);


  wait(4, () => {
    gameState.changeMusic(play('dialogs', { loop: true }));

    go('dialog', INTRO, () => {
      go('levels');
    });
  });
};

scene('bergamot', bergamote);
