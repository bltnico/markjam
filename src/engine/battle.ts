import { Color } from 'kaboom';

import { Game, games } from '../components/games';
import gameState from './state';

const INITIAL_BOSS_HP = 3;
const INITIAL_PLAYER_HP = 3;
const INITIAL_FINAL_BOSS_HP = 5;

class Battle {
  bossHp: number = gameState.isFinalBoss ? INITIAL_FINAL_BOSS_HP: INITIAL_BOSS_HP;
  playerHp: number = INITIAL_PLAYER_HP;
  private _gamePlayed: Game[] = [];
  private _onGameEnd: (win: boolean) => void = () => {};
  private _onBattleEnd: (win: boolean) => void = () => {};

  private reset() {
    this.bossHp = gameState.isFinalBoss ? INITIAL_FINAL_BOSS_HP : INITIAL_BOSS_HP;
    this.playerHp =  INITIAL_PLAYER_HP;
    this._gamePlayed = [];
  }

  private bossHurt() {
    this.bossHp -= 1;

    if (this.bossHp === 0) {
      if (gameState.isFinalBoss) {
        gameState.saveFinalBossScore(this.playerHp);
      }
      this._onBattleEnd(true);
      this.reset();
    } else {
      this._onGameEnd(true);
    }
  }

  private playerHurt() {
    this.playerHp -= 1;

    if (this.playerHp === 0) {
      this._onBattleEnd(false);
      this.reset();
    } else {
      this._onGameEnd(false);
    }
  }

  play(levelColor: Color, sprites: Record<string, string>) {
    let game = games[0];
    const potentialGames = games.filter((game) => !this._gamePlayed.includes(game));
    if (potentialGames.length === 0) {
      game = choose(games);
      this._gamePlayed = [];
    } else {
      game = choose(potentialGames);
      this._gamePlayed.push(game);
    }

    game.play({
      levelColor,
      sprites,
      onWin: () => this.bossHurt(),
      onLose: () => this.playerHurt(),
    });
  }

  setupFinalBoss() {
    this.bossHp = 5;
  }

  onGameEnd(cb: (win: boolean) => void) {
    this._onGameEnd = cb;
  }

  onBattleEnd(cb: (win: boolean) => void) {
    this._onBattleEnd = cb;
  }
}

const battle = new Battle();

export default battle;
