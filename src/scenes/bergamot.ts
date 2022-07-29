import './game';
import late from './../components/late';

const bergamote = () => {
  // @ts-ignore
  add([text('Markjam', { size: 20 }), pos(center()), origin('center'), lifespan(1)]);
  // @ts-ignore
  add([text('A bergamote production', { size: 20 }), pos(center()), origin('center'), late(1), lifespan(2)]);

  wait(2, () => go('game'));
};

scene('hello', bergamote);
