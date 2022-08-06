import { Vec2 } from 'kaboom';
import { TEXT } from '../constants/style';

function addCoinText(_pos: Vec2) {
  const txt = add([
    //
    text('+1', { ...TEXT, size: 32 }),
    rotate(0),
    pos(_pos.x, _pos.y - rand(10, 30)),
    lifespan(0.3),
  ]);

  txt.angle = rand(-20, 20);
}

export default addCoinText;
