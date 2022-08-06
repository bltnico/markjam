import { Color } from 'kaboom';

type BattleOptions = {
  label: string;
  levelColor: Color;
  onStart: () => void;
  onTimeEnd: () => void;
};

const TIME = 7;
const TIME_WIDTH = width() - 100;

const battleUi = (options: BattleOptions) => {
  let started = false;
  let currentTime = TIME;

  add([
    text(options.label.toUpperCase(), {
      transform: () => ({
        scale: wave(1, 1.2, time() * 3),
      }),
    }),
    pos(center()),
    lifespan(1.5),
    // @ts-ignore
    origin('center'),
  ]);

  // @ts-ignore
  const timeIndicator = add([rect(TIME_WIDTH, 10, { radius: 5 }), pos(50, 20), color(0, 0, 0)]);
  timeIndicator.color = options.levelColor;

  wait(1.5, () => {
    started = true;
    options.onStart();
  });

  onUpdate(() => {
    if (!started) {
      return;
    }

    currentTime -= dt();
    timeIndicator.width = (TIME_WIDTH * currentTime) / TIME;

    if (currentTime <= 0) {
      options.onTimeEnd();
    }
  });
};

export default battleUi;
