import cherry from './../assets/cherry.png';
import lemon from './../assets/lemon.png';
import lemonMonster from './../assets/lemon_monster.png';
import orange from './../assets/orange.png';
import strawberry from './../assets/strawberry.png';
import mark from './../assets/mark.png';
import wall from './../assets/wall.png';
import ground from './../assets/ground.png';
import peaks from './../assets/peaks.png';
import thrashMob1 from './../assets/trash_mob_1.png';
import gate from './../assets/gate.png';

loadSprite('cherry', cherry);
loadSprite('lemon', lemon);
loadSprite('orange', orange);
loadSprite('strawberry', strawberry);
loadSprite('mark', mark);
loadSprite('wall', wall);
loadSprite('ground', ground);
loadSprite('peaks', peaks);
loadSprite('gate', gate);

loadSprite('lemonMonster', lemonMonster, {
  sliceX: 25,
  sliceY: 1,
  anims: {
    idle: { from: 0, to: 7, loop: true },
    active: { from: 8, to: 15 },
    hurt: { from: 16, to: 24 },
  },
});

loadSprite('thrashMob1', thrashMob1, {
  sliceX: 12,
  sliceY: 1,
  anims: {
    active: { from: 0, to: 11, loop: true },
  },
});
