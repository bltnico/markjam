import { SPEED } from '../constants/player';
import { world_2 } from '../levels';

// @ts-ignore
const game = () => {
  addLevel(world_2, {
    width: 32,
    height: 32,
    pos: vec2(0, 0),
    x: () => [rect(32,32), color(255, 255, 255), solid(), area(), 'walls'],
    b: () => [rect(32,32), color(0, 255, 0), solid(), area(), 'test'],
    n: () => [rect(32,32), color(0, 0, 255), 'nuage'],
    // v: () => [rect(32,32), color(0, 255, 255), solid(), area(), 'dead'],
    v: () => [sprite('mark2'), scale(2), solid(), area(), 'enemy']
  });

  const player = add([
    pos(0, 0),
    sprite('mark'),
    scale(2),
    health(3),
    area(),
    body(),
    {
      speed: SPEED,
    }
  ]);

  player.onCollide('dead', () => {
    player.hurt(1);
  });

  player.onDestroy(() => {
    go('game');
  })

  onKeyPress('space', () => {
    if (player.isGrounded()) {
      player.jump();
    } else {
      player.doubleJump();
    }
  });

  onKeyDown(['left', 'q'], () => {
    player.move(- player.speed, 0);
  });

  onKeyDown(['right', 'd'], () => {
    player.move(+ player.speed, 0);
  });

  player.onDeath(() => {
    go('game');
  })

  player.onUpdate(() => {
    if (player.pos.x > width()) {
      camPos(vec2(Math.floor(player.pos.x / width()) * width() + width() / 2, center().y));
    } else {
      camPos(center());
    }
  })
};

scene('game', game);
