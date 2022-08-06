import { AudioPlay } from 'kaboom';
import { Trophies } from '../constants/levels';
import { FINAL_BOSS_SCORE, PLATFORMER_LEVEL_SCORE_MULTIPLIERS } from '../constants/platformer';
import { GameState } from '../types/game';

class State implements GameState {
  trophies: Trophies[] = [];
  coins: number = 0;
  score = 0;
  highScore = 0;
  music?: AudioPlay = undefined;
  claimableTrophy: GameState['claimableTrophy'] = Trophies.LEMON;
  isFinalBoss: boolean = false;

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
      this.score = this.coins * PLATFORMER_LEVEL_SCORE_MULTIPLIERS[this.claimableTrophy];
      this.coins = 0;

      if (this.trophies.length === 4) {
        this.isFinalBoss = true;
      }
    }
  }

  changeMusic(music?: AudioPlay) {
    this.music?.stop();
    this.music = music;
  }

  proceedEndGame() {
    this.trophies = [];
    this.score = 0;
    this.coins = 0;
  }

  saveFinalBossScore(playerHp: number) {
    this.score += playerHp * FINAL_BOSS_SCORE;

    if (this.score > this.highScore) {
      localStorage.setItem('highestScore', String(this.score));
    }
  }

  restoreHighScore() {
    const highScore = Number(localStorage.getItem('highestScore') ?? '0');

    if (highScore > 0) {
      this.highScore = highScore;
    }
  }
}

const gameState = new State();

export default gameState;
