import { BATTLE_LEMON_LOSE, BATTLE_LEMON_WIN } from '../constants/dialogs';
import { WORLDS_CONFIG } from '../constants/levels';
import addBackground from '../components/background';
import battle from '../engine/battle';
import './boss';
import './transition';
import gameState from '../engine/state';
import goAnim from '../components/go_anim';

const battleScene = () => {
  const music = play('game');
  const { claimableTrophy } = gameState;
  const { sprites, levelColor } = WORLDS_CONFIG[claimableTrophy];

  addBackground();

  battle.play(levelColor, sprites);

  battle.onGameEnd((win: boolean) => {
    music.stop();
    go('boss', win);
  });

  battle.onBattleEnd((win: boolean) => {
    music.stop();
    if (win) {
      gameState.winTrophy();
    }

    go('dialog', win ? BATTLE_LEMON_WIN : [[sprites.boss, BATTLE_LEMON_LOSE, { anim: 'idle' }]], () => {
      goAnim('levels');
    });
  });
};

scene('battle', battleScene);
