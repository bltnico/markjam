import gameOne from '../components/game_one';
import gameTwo from '../components/game_two';
import gameThree from '../components/game_three';
import b from '../components/battle_ui';
import './boss';

const battle = () => {
  const music = play('game');

  let end = false;
  let success = false;

  b({
    // label: 'Collect',
    label: 'Jump',
    onStart: () =>
      gameTwo(() => {
        success = false;
        end = true;
      }),
    onEnd: () => {
      success = true;
      end = true;
    },
  });

  onUpdate(() => {
    if (end) {
      music.stop();
      go('boss', success);
    }
  });
};

scene('battle', battle);
