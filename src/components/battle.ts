type BattleOptions = {
  label: string;
  onStart: () => void;
  onEnd: () => void;
};

const TIME = 7;

const battle = (options: BattleOptions) => {
  let started = false;
  let time = TIME;

  // @ts-ignore
  add([text(options.label.toUpperCase()), pos(center()), lifespan(1.5), origin('center')]);
  const timeIndicator = add([rect(width(), 20), pos(0, 0), color(255, 0, 0)]);

  wait(1.5, () => {
    started = true;
    options.onStart();
  });

  onUpdate(() => {
    if (!started) {
      return;
    }

    time -= dt();
    timeIndicator.width = (width() * time) / TIME;

    if (time <= 0) {
      options.onEnd();
    }
  });
};

export default battle;
