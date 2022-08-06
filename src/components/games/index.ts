import { Color } from 'kaboom';

import collect from './collect';
import dodge from './dodge';
import jump from './jump';
import survive from './survive';
import climb from './climb';
import shoot from './shoot';

export type GameOptions = {
  levelColor: Color;
  sprites: Record<string, string>;
  onWin: () => void;
  onLose: () => void;
};

export type Game = {
  label: string;
  play: Function;
};

export const games: Game[] = [
  {
    label: 'dodge',
    play: dodge,
  },
  {
    label: 'collect',
    play: collect,
  },
  {
    label: 'jump',
    play: jump,
  },
  {
    label: 'survive',
    play: survive,
  },
  {
    label: 'climb',
    play: climb,
  },
  {
    label: 'shoot',
    play: shoot,
  },
];
