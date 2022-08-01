import { BattleState } from '../types/game'
import battle from '../engine/battle';
import './boss';
import './transition';

const battleScene = (battleState: BattleState = { trophy: 'lemon', coins: 0, trophies: [] }) => {
  const music = play('game');
  const { trophy, ...gameState } = battleState;
  const { trophies } = gameState;

  battle.play();

  battle.onGameEnd((win: boolean) => {
    music.stop();
    go('boss', win, battleState);
  });

  battle.onBattleEnd((win) => {
    if (win) {
      trophies.push(trophy);
    }
    music.stop();
    go('transition',`You've won the ${trophy} fruit`, () => go('levels', gameState));
  });
};

scene('battle', battleScene);
