type BattleOptions = {
  label: string;
  onStart: () => void;
  onTimeEnd: () => void;
};

const TIME = 7;

const battleUi = (options: BattleOptions) => {
  let started = false;
  let currentTime = TIME;

  add([
    text(options.label.toUpperCase(), {
      transform: (idx: number) => ({
        scale: wave(1, 1.2, time() * 3 + idx),
      }),
    }),
    pos(center()),
    lifespan(1),
    // @ts-ignore
    origin('center'),
  ]);
  const timeIndicator = add([rect(width(), 10), pos(0, 0), color(0, 0, 0)]);

  wait(1, () => {
    started = true;
    options.onStart();
  });

  onUpdate(() => {
    if (!started) {
      return;
    }

    currentTime -= dt();
    timeIndicator.width = (width() * currentTime) / TIME;

    if (currentTime <= 0) {
      options.onTimeEnd();
    }
  });
};

export default battleUi;
