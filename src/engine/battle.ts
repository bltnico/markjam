import { games } from '../components/games';

const INITIAL_BOSS_HP = 3;
const INITIAL_PLAYER_HP = 3;

class Battle {
  bossHp: number = INITIAL_BOSS_HP;
  playerHp: number = INITIAL_PLAYER_HP;
  private _onGameEnd: (win: boolean) => void = () => {};
  private _onBattleEnd: (win: boolean) => void = () => {};

  private reset() {
    this.bossHp = INITIAL_BOSS_HP;
    this.playerHp = INITIAL_PLAYER_HP;
  }

  private bossHurt() {
    this.bossHp -= 1;

    if (this.bossHp === 0) {
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

  play() {
    const game = choose(games) || games[0];
    game({
      onWin: () => this.bossHurt(),
      onLose: () => this.playerHurt(),
    });
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
