import addBackground from '../components/background';
import { ANIM_TEXT, TEXT } from '../constants/style';

type ExtraSpriteConfig = { anim: string } | undefined;
type Dialog = [string, string, ExtraSpriteConfig];

const dialog = (dialogs: Dialog[], onEnd: Function = () => {}) => {
  addBackground();

  let curDialog = 0;

  // @ts-ignore
  const textbox = add([
    rect(width() - 200, 120, { radius: 5 }),
    origin('center'),
    pos(center().x, height() - 150),
    outline(2, WHITE),
    color(0, 0, 0),
  ]);
  // @ts-ignore
  const txt = add([text('', { ...TEXT, width: width() - 230 }), pos(textbox.pos), origin('center')]);
  // @ts-ignore
  const avatar = add([scale(5), origin('center'), pos(center().sub(0, 50))]);

  add([
    //
    text('press space', { ...ANIM_TEXT, size: 18, width: width() - 230 }),
    // @ts-ignore
    origin('center'),
    pos(center().x, height() - 50),
  ]);

  function updateDialog() {
    play('talk1');
    const [char, dialog, extraConfig] = dialogs[curDialog];

    avatar.use(sprite(char, extraConfig));
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
