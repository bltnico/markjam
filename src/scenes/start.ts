import goAnim from '../components/go_anim';
import './credit';
import './bergamot';

const start = () => {
  // @ts-ignore
  add([text('Press space to start', { size: 30 }), pos(center().x, center().y - 50), origin('center')]);
  // @ts-ignore
  add([text('Press c for credits', { size: 30 }), pos(center().x, center().y + 50), origin('center')]);

  onKeyPress('c', () => {
    goAnim('credit');
  });

  onKeyPress('space', () => {
    goAnim('bergamot');
  });
};

scene('start', start);
