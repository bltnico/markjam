import addBackground from '../components/background';
import goAnim from '../components/go_anim';
import { MARK_SIZE } from '../constants/sprite';
import { ANIM_TEXT, TEXT } from '../constants/style';

const TEXT_SIZE = 42;
const TEXTS = [
  'Game over',
  "Oh no! You're dead! LOOSER!!!!",
  'I have one million ideas, but they all lead to a certain death.',
  'Long live the king',
  'You can be a dead hero or a living coward, but You are a dead coward',
];

const gameover = (_scene: string = 'platformer') => {
  addBackground();

  const mark = add([
    //
    sprite('mark', { anim: 'hurt' }),
    scale(5),
    rotate(0),
    // @ts-ignore
    origin('center'),
    pos(center().x, center().y - MARK_SIZE * 2),
  ]);

  const txt = add([
    //
    text(choose(TEXTS), { ...TEXT, size: TEXT_SIZE, width: width() - 140, lineSpacing: TEXT_SIZE / 2 }),
    // @ts-ignore
    origin('center'),
    pos(center().x, center().y + TEXT_SIZE + TEXT_SIZE / 2),
  ]);

  mark.pos.y -= txt.height / 2;

  onUpdate(() => {
    mark.angle += 200 * dt();
    mark.pos.y += rand(-20 * dt(), 20 * dt());
  });

  add([
    //
    text('press space', { ...ANIM_TEXT, size: 18, width: width() - 230 }),
    // @ts-ignore
    origin('center'),
    pos(center().x, height() - 50),
  ]);

  onKeyPress('space', () => {
    goAnim(_scene);
  });
};

scene('gameover', gameover);
