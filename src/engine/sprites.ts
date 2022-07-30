import cherry from './../assets/cherry.png';
import lemon from './../assets/lemon.png';
import lemonMonster from './../assets/lemon_monster.png';
import orange from './../assets/orange.png';
import strawberry from './../assets/strawberry.png';
import mark from './../assets/mark.png';
import mark2 from './../assets/mark2.png';

loadSprite('cherry', cherry);
loadSprite('lemon', lemon);
loadSprite('orange', orange);
loadSprite('strawberry', strawberry);
loadSprite('mark', mark);
loadSprite('mark2', mark2);

loadSprite('lemonMonster', lemonMonster, {
  sliceX: 25,
  sliceY: 1,
  anims: {
    idle: { from: 0, to: 7, loop: true },
    active: { from: 8, to: 15 },
    hurt: { from: 16, to: 24, loop: true },
  },
});
