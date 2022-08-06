import goAnim from '../components/go_anim';
import './credit';
import './bergamot';
import addBackground from '../components/background';
import { END_CREDITS_PAGE_1, END_CREDITS_PAGE_2 } from '../constants/credits';
import gameState from '../engine/state';

const start = () => {
  gameState.restoreHighScore();

  // @ts-ignore
  add([text('Press space to start', { size: 30 }), pos(center().x, center().y + 150), origin('top'), ]);
  // @ts-ignore
  add([text('Press c for credits', { size: 30 }), pos(center().x, center().y + 200), origin('top')]);

  addBackground();
  add([sprite('logoWhite'), scale(1.5), pos(center().x, center().y - 250), origin('top')]);

  onKeyPress('c', () => {
    go('credit', END_CREDITS_PAGE_1,  () => {
      go('credit', END_CREDITS_PAGE_2, () => {
        go('start');
      });
    });
  });

  onKeyPress('space', () => {
    goAnim('bergamot');
  });
};

scene('start', start);
