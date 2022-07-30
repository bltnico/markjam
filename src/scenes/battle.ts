import { BATTLE_LEMON_LOSE, BATTLE_LEMON_WIN } from '../constants/dialogs';
import battle from '../engine/battle';
import './boss';

const battleScene = () => {
  const music = play('game');

  battle.play();

  battle.onGameEnd((win: boolean) => {
    music.stop();
    go('boss', win);
  });

  battle.onBattleEnd((win: boolean) => {
    music.stop();

    go('dialog', win ? BATTLE_LEMON_WIN : BATTLE_LEMON_LOSE, () => {
      go('levels');
    });
  });
};

scene('battle', battleScene);
