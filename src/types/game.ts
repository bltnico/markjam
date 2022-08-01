import { AudioPlay } from "kaboom";

export interface GameState {
  trophies: string[];
  coins: number;
};

export interface BattleState extends GameState {
  trophy: 'lemon' | 'cherry' | 'orange' | 'strawberry';
};

export interface PlatformerState extends BattleState {
  music?: AudioPlay;
  levelId: number;
};
