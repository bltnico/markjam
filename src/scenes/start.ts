import './bergamot';

const start = () => {
  // @ts-ignore
  add([text('Press space to start', { size: 30 }), pos(center()), origin('center')]);

  onKeyPress('space', () => {
    go('bergamot');
  });
};

scene('start', start);
