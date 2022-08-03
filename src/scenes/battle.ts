import { BATTLE_LEMON_LOSE, BATTLE_LEMON_WIN } from '../constants/dialogs';
import { BattleState, GameState } from '../types/game';
import addBackground from '../components/background';
import battle from '../engine/battle';
import './boss';
import './transition';

const battleScene = (battleState: BattleState = { trophy: 'lemon', coins: 0, trophies: [] }) => {
  const music = play('game');
  const { trophy, ...gameState } = battleState;
  const { trophies } = gameState;

  addBackground();

  battle.play();

  battle.onGameEnd((win: boolean) => {
    music.stop();
    go('boss', win, battleState);
  });

  battle.onBattleEnd((win: boolean) => {
    music.stop();
    if (win) {
      trophies.push(trophy);
    }

    go('dialog', win ? BATTLE_LEMON_WIN : BATTLE_LEMON_LOSE, ({ music }: GameState) => {
      go('levels', { ...gameState, music });
    });
  });
};

scene('battle', battleScene);
