import collect from './collect';
import dodge from './dodge';
import jump from './jump';

export type GameOptions = {
  onWin: () => void;
  onLose: () => void;
};

export const games = [dodge, collect, jump];
