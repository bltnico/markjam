import { AudioPlay } from 'kaboom';
import { Trophies } from '../constants/trophies';

export interface GameState {
  trophies: Trophies[];
  coins: number;
  music?: AudioPlay;
  claimableTrophy: Trophies;
}

export interface PlatformerState extends GameState {
  levelId: number;
}
