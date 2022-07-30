const boss = (success: boolean) => {
  shake(10);
  // @ts-ignore
  const boss = add([sprite('lemonMonster', { anim: success ? 'hurt' : 'idle' }), scale(5), pos(center()), origin('center')]);
  camPos(boss.pos);
  camScale(vec2(2, 2));

  wait(1.5, () => {
    go('battle');
  });
};

scene('boss', boss);
