import { AudioPlay } from "kaboom";

export interface GameState {
  trophies: string[];
  coins: number;
  music?: AudioPlay;
};

export interface BattleState extends GameState {
  trophy: 'lemon' | 'cherry' | 'orange' | 'strawberry';
};

export interface PlatformerState extends BattleState {
  levelId: number;
};
