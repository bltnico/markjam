import { AudioPlay } from 'kaboom';
import { Trophies } from '../constants/levels';
import { GameState } from '../types/game';

class State implements GameState {
  trophies: Trophies[] = [];
  coins: number = 0;
  music?: AudioPlay = undefined;
  claimableTrophy: GameState['claimableTrophy'] = Trophies.LEMON;

  addCoin() {
    this.coins += 1;
  }

  loseCoins() {
    this.coins = 0;
  }

  claimTrophy(trophy: GameState['claimableTrophy']) {
    this.claimableTrophy = trophy;
  }

  winTrophy() {
    if (this.claimableTrophy) {
      this.trophies.push(this.claimableTrophy);
    }
  }

  changeMusic(music?: AudioPlay) {
    this.music?.stop();
    this.music = music;
  }
}

const gameState = new State();

export default gameState;
