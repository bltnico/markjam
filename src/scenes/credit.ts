import addBackground from '../components/background';
import { END_CREDITS_PAGE_1 } from '../constants/credits';

const credit = (credits: typeof END_CREDITS_PAGE_1, cb: () => void) => {
  addBackground();

  credits.forEach((c) => add([
    text(c.text, c.options),
    c.pos,
  ]));

  wait(5, () => cb());
};

scene('credit', credit);
