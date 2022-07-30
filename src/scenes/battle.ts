import battle from '../engine/battle';
import './boss';

const battleScene = () => {
  const music = play('game');

  battle.play();

  battle.onGameEnd((win: boolean) => {
    music.stop();
    go('boss', win);
  });

  battle.onBattleEnd(() => {
    go('levels');
  });
};

scene('battle', battleScene);
