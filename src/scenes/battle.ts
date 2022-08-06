import { BATTLE_DARTH_APPLE_LOSE, END_SCENE, FINAL_BOSS } from '../constants/dialogs';
import { FINAL_BOSS_FRUIT, FINAL_BOSS_LEVEL_COLOR, FINAL_BOSS_SPRITE, WORLDS_CONFIG } from '../constants/levels';
import addBackground from '../components/background';
import battle from '../engine/battle';
import './boss';
import './transition';

import gameState from '../engine/state';
import goAnim from '../components/go_anim';
import { END_CREDITS_PAGE_1, END_CREDITS_PAGE_2 } from '../constants/credits';

const battleScene = () => {
  gameState.music?.stop();
  const music = play('game');
  const { claimableTrophy, trophies, isFinalBoss } = gameState;
  const { sprites, levelColor, dialogs } = WORLDS_CONFIG[claimableTrophy];

  addBackground();

  const _sprites = isFinalBoss
    ? { ...sprites, fruit: FINAL_BOSS_FRUIT, boss: FINAL_BOSS_SPRITE }
    : sprites;
  const battleLevelColor = isFinalBoss ? FINAL_BOSS_LEVEL_COLOR : levelColor;

  battle.play(battleLevelColor, _sprites);

  battle.onGameEnd((win: boolean) => {
    music.stop();
    go('boss', win);
  });

  battle.onBattleEnd((win: boolean) => {
    music.stop();
    let dialog = win ? dialogs.win : dialogs.lose;

    if (win) {
      if (isFinalBoss) {
        go('dialog', END_SCENE, () => {
          go('credit', END_CREDITS_PAGE_1,  () => {
            go('credit', END_CREDITS_PAGE_2, () => {
                gameState.proceedEndGame();
                go('start');
            });
          });
        });
      }

      gameState.winTrophy();

      if (trophies.length < 4) {
        go('dialog', dialog, () => {
          goAnim('levels');
        });
      }

      if (trophies.length === 4) {
        go('dialog', FINAL_BOSS, () => {
          go('battle');
        });
      }
    }

    if (isFinalBoss) {
      dialog = BATTLE_DARTH_APPLE_LOSE;
    }

    if (!win) {
      if (isFinalBoss) {
        gameState.proceedEndGame();
      }

      go('dialog', dialog, () => {
        goAnim('levels');
      });
    }
  });
};

scene('battle', battleScene);
