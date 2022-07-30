type Dialog = [string, string];

const dialog = (dialogs: Dialog[], onEnd: Function = () => {}) => {
  play('dialogs');

  let curDialog = 0;

  // @ts-ignore
  const textbox = add([rect(width() - 200, 120, { radius: 20 }), origin('center'), pos(center().x, height() - 100), outline(2)]);
  // @ts-ignore
  const txt = add([text('', { size: 32, width: width() - 230 }), pos(textbox.pos), origin('center')]);
  // @ts-ignore
  const avatar = add([scale(3), origin('center'), pos(center().sub(0, 50))]);

  function updateDialog() {
    play('talk1');
    const [char, dialog] = dialogs[curDialog];

    avatar.use(sprite(char));
    txt.text = dialog;
  }

  updateDialog();

  onKeyPress('space', () => {
    if (curDialog + 1 === dialogs.length) {
      onEnd();
    }

    curDialog = (curDialog + 1) % dialogs.length;
    updateDialog();
  });
};

scene('dialog', dialog);
