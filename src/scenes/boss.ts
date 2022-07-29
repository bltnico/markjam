const boss = (success: boolean) => {
  shake(10);
  const boss = add([sprite('lemonMonster', { anim: success ? 'hurt' : 'idle' }), scale(3), pos(center())]);
  camPos(boss.pos);
  camScale(vec2(2, 2));

  wait(2, () => {
    go('battle');
  });
};

scene('boss', boss);
