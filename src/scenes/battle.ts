import { BATTLE_LEMON_LOSE_DIALOG, BATTLE_LEMON_WIN } from '../constants/dialogs';
import { WORLDS_CONFIG } from '../constants/levels';
import addBackground from '../components/background';
import battle from '../engine/battle';
import './boss';
import './transition';
import gameState from '../engine/state';

const battleScene = () => {
  const music = play('game');
  const { claimableTrophy } = gameState;
  const { sprites } = WORLDS_CONFIG[claimableTrophy];

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

    go('dialog', win ? BATTLE_LEMON_WIN : [[sprites.boss, BATTLE_LEMON_LOSE_DIALOG, { anim: 'idle' }]], () => {
      go('levels');
    });
  });
};

scene('battle', battleScene);
