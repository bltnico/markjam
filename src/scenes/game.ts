import { SPEED } from '../constants/player';

// @ts-ignore
const game = () => {
  const player = add([
    pos(center()),
    rect(50, 50),
    color(255, 255, 255),
    area(),
    body(),
    // doubleJump(),
    {
      speed: SPEED,
      dead: false,
    }
  ]);

  add([rect(width() *2, 10), pos(0, height() - 10), color(255, 255, 255), solid(), area()]);

  onKeyPress('space', () => {
    if (player.isGrounded()) {
      player.jump();
    }
  });

  onKeyDown(['left', 'q'], () => {
    player.move(- player.speed, 0);
  });

  onKeyDown(['right', 'd'], () => {
    player.move(+ player.speed, 0);
  });

  player.onUpdate(() => {
    console.log(width(), player.pos.x, 'test');

    // .move() is provided by pos()
    if (player.pos.x > width()) {
      camPos(vec2(player.pos.x + width() / 2, center().y));
    } else {
      camPos(center());
    }
  })
};

scene('game', game);
