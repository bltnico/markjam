function goAnim(scene: string, c = BLACK) {
  const overlay = add([
    //
    rect(width(), height()),
    pos(0, 0),
    color(c),
    opacity(0),
    z(1),
  ]);

  let time = 0;
  onUpdate(() => {
    time += 1 * dt();
    const opacity = (1 * time) / 0.5;
    if (opacity < 1) {
      overlay.opacity = opacity;
    } else {
      go(scene);
    }
  });
}

export default goAnim;
