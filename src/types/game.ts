import { AudioPlay } from 'kaboom';
import { Trophies } from '../constants/levels';

export interface GameState {
  trophies: Trophies[];
  coins: number;
  score: number;
  highScore: number;
  music?: AudioPlay;
  claimableTrophy: Trophies;
  isFinalBoss: boolean;
}

export interface PlatformerState extends GameState {
  levelId: number;
}
