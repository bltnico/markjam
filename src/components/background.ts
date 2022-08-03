const SPEED = 20;
const X_MOVE = SPEED * 3;

function addBackground() {
  const background = add([
    //
    sprite('background'),
    pos(-X_MOVE, 0),
    layer('background'),
    opacity(0.1),
    { dir: -1 },
  ]);

  background.onUpdate(() => {
    const x = background.dir > 0 ? SPEED : -SPEED;
    background.move(x, 0);

    if (background.pos.x < -X_MOVE) {
      background.dir = 1;
    }

    if (background.pos.x > 0) {
      background.dir = -1;
    }
  });
}

export default addBackground;
