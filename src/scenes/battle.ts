import { BATTLE_LEMON_LOSE, BATTLE_LEMON_WIN } from '../constants/dialogs';
import addBackground from '../components/background';
import battle from '../engine/battle';
import './boss';
import './transition';
import gameState from '../engine/state';

const battleScene = () => {
  const music = play('game');

  addBackground();

  battle.play();

  battle.onGameEnd((win: boolean) => {
    music.stop();
    go('boss', win);
  });

  battle.onBattleEnd((win: boolean) => {
    music.stop();
    if (win) {
      gameState.winTrophy();
    }

    go('dialog', win ? BATTLE_LEMON_WIN : BATTLE_LEMON_LOSE, () => {
      go('levels');
    });
  });
};

scene('battle', battleScene);
