import collect from './collect';
import dodge from './dodge';
import jump from './jump';
import survive from './survive';

export type GameOptions = {
  onWin: () => void;
  onLose: () => void;
};

export const games = [dodge, collect, jump, survive];
