import { Game, games } from '../components/games';

const INITIAL_BOSS_HP = 3;
const INITIAL_PLAYER_HP = 3;

class Battle {
  bossHp: number = INITIAL_BOSS_HP;
  playerHp: number = INITIAL_PLAYER_HP;
  private _gamePlayed: Game[] = [];
  private _onGameEnd: (win: boolean) => void = () => {};
  private _onBattleEnd: (win: boolean) => void = () => {};

  private reset() {
    this.bossHp = INITIAL_BOSS_HP;
    this.playerHp = INITIAL_PLAYER_HP;
    this._gamePlayed = [];
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
