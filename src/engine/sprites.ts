import cherry from './../assets/cherry.png';
import lemon from './../assets/lemon.png';
import orange from './../assets/orange.png';
import strawberry from './../assets/strawberry.png';
import mark from './../assets/mark.png';
import wall from './../assets/wall.png';
import ground from './../assets/ground.png';
import singleGround from './../assets/single-ground.png';
import peaks from './../assets/peaks.png';
import thrashMob1 from './../assets/trash_mob_1.png';
import gate from './../assets/gate.png';
import oldAnanas from './../assets/old_ananas.png';
import lemonBoss from './../assets/lemon_boss.png';
import strawberryBoss from './../assets/strawberry_boss.png';
import cherryBoss from './../assets/cherry_boss.png';
import orangeBoss from './../assets/orange_boss.png';
import background from './../assets/background_test.png';
import strawberryMob from './../assets/strawberries_mob.png';

loadSprite('cherry', cherry);
loadSprite('lemon', lemon);
loadSprite('orange', orange);
loadSprite('strawberry', strawberry);
loadSprite('wall', wall);
loadSprite('ground', ground);
loadSprite('singleGround', singleGround);
loadSprite('gate', gate);
loadSprite('background', background);

loadSprite('mark', mark, {
  sliceX: 5,
  sliceY: 1,
  anims: {
    idle: { from: 0, to: 1, loop: true },
    jump: { from: 2, to: 3 },
    hurt: 4,
  },
});

loadSprite('peaks', peaks, {
  sliceX: 3,
  sliceY: 1,
  anims: {
    active: { from: 0, to: 2, loop: true, speed: 6 },
  },
});

loadSprite('lemonBoss', lemonBoss, {
  sliceX: 25,
  sliceY: 1,
  anims: {
    freeze: 0,
    idle: { from: 0, to: 7, loop: true },
    active: { from: 8, to: 15 },
    hurt: { from: 16, to: 24, loop: true },
  },
});

loadSprite('cherryBoss', cherryBoss, {
  sliceX: 25,
  sliceY: 1,
  anims: {
    freeze: 0,
    idle: { from: 0, to: 7, loop: true },
    active: { from: 8, to: 15 },
    hurt: { from: 16, to: 24, loop: true },
  },
});

loadSprite('strawberryBoss', strawberryBoss, {
  sliceX: 25,
  sliceY: 1,
  anims: {
    freeze: 0,
    idle: { from: 0, to: 7, loop: true },
    active: { from: 8, to: 15 },
    hurt: { from: 16, to: 24, loop: true },
  },
});

loadSprite('orangeBoss', orangeBoss, {
  sliceX: 25,
  sliceY: 1,
  anims: {
    freeze: 0,
    idle: { from: 0, to: 7, loop: true },
    active: { from: 8, to: 15 },
    hurt: { from: 16, to: 24, loop: true },
  },
});

loadSprite('thrashMob1', thrashMob1, {
  sliceX: 12,
  sliceY: 1,
  anims: {
    active: { from: 0, to: 11, loop: true },
  },
});

loadSprite('oldAnanas', oldAnanas, {
  sliceX: 6,
  sliceY: 1,
  anims: {
    talking: { from: 0, to: 5, loop: true },
  },
});

loadSprite('strawberryMob', strawberryMob, {
  sliceX: 8,
  sliceY: 1,
  anims: {
    active: { from: 0, to: 7, loop: true },
  },
});
