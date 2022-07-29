import bossOne from '../components/boss_one';
import b from './../components/battle';
import './boss';

const battle = () => {
  const music = play('game');

  let end = false;
  let success = false;

  b({
    label: 'Dodge !',
    onStart: () =>
      bossOne(() => {
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
