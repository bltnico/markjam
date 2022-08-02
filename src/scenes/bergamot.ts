import './dialog';
import './game';
import { INTRO } from './../constants/dialogs';
import late from './../components/late';
import { GameState } from '../types/game';

const bergamote = () => {
  play('jingle');

  // @ts-ignore
  add([text('Markjam', { size: 30 }), pos(center()), origin('center'), lifespan(1)]);
  // @ts-ignore
  add([text('A bergamote production', { size: 30 }), pos(center()), origin('center'), late(1), lifespan(2)]);
  // @ts-ignore
  add([text('An original music by Powered Rails', { size: 30 }), pos(center()), origin('center'), late(2), lifespan(4)]);

  wait(4, () => go('dialog', INTRO, (state: GameState) => go('levels', state)));
};

scene('bergamot', bergamote);
