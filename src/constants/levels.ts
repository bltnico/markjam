import { BATTLE_CHERRY_LOSE, BATTLE_CHERRY_WIN, BATTLE_LEMON_LOSE, BATTLE_LEMON_WIN, BATTLE_ORANGE_LOSE, BATTLE_ORANGE_WIN, BATTLE_STRAWBERRY_LOSE, BATTLE_STRAWBERRY_WIN, BEFORE_CHERRY_BOSS, BEFORE_LEMON_BOSS, BEFORE_ORANGE_BOSS, BEFORE_STRAWBERRY_BOSS } from './dialogs';

export enum Trophies {
  LEMON = 'lemon',
  ORANGE = 'orange',
  STRAWBERRY = 'strawberry',
  CHERRY = 'cherry',
}

export const LEVELS = Object.values(Trophies);

export const WORLDS_CONFIG = {
  [Trophies.LEMON]: {
    levelPos: vec2(center().x, center().y - 120),
    id: Trophies.LEMON,
    dir: UP,
    levelColor: rgb(226, 204, 91),
    dialogs: {
      beforeBoss: BEFORE_LEMON_BOSS,
      win: BATTLE_LEMON_WIN,
      lose: BATTLE_LEMON_LOSE,
    },
    sprites: {
      thrashMob: 'strawberryMob',
      fruit: 'lemon',
      boss: 'lemonBoss',
      ground: 'ground',
      singleGround: 'singleGround',
    },
  },
  [Trophies.ORANGE]: {
    levelPos: vec2(center().x + 120, center().y),
    id: Trophies.ORANGE,
    dir: RIGHT,
    levelColor: rgb(239, 137, 62),
    dialogs: {
      beforeBoss: BEFORE_ORANGE_BOSS,
      win: BATTLE_ORANGE_WIN,
      lose: BATTLE_ORANGE_LOSE,
    },
    sprites: {
      thrashMob: 'strawberryMob',
      fruit: 'orange',
      boss: 'orangeBoss',
      ground: 'ground',
      singleGround: 'singleGround',
    },
  },
  [Trophies.STRAWBERRY]: {
    levelPos: vec2(center().x, center().y + 120),
    id: Trophies.STRAWBERRY,
    dir: DOWN,
    levelColor: rgb(209, 49, 51),
    dialogs: {
      beforeBoss: BEFORE_STRAWBERRY_BOSS,
      win: BATTLE_STRAWBERRY_WIN,
      lose: BATTLE_STRAWBERRY_LOSE,
    },
    sprites: {
      thrashMob: 'strawberryMob',
      fruit: 'strawberry',
      boss: 'strawberryBoss',
      ground: 'ground',
      singleGround: 'singleGround',
    },
  },
  [Trophies.CHERRY]: {
    levelPos: vec2(center().x - 120, center().y),
    id: Trophies.CHERRY,
    dir: LEFT,
    levelColor: rgb(254, 48, 130),
    dialogs: {
      beforeBoss: BEFORE_CHERRY_BOSS,
      win: BATTLE_CHERRY_WIN,
      lose: BATTLE_CHERRY_LOSE,
    },
    sprites: {
      thrashMob: 'lemonMob',
      fruit: 'cherry',
      boss: 'cherryBoss',
      ground: 'ground',
      singleGround: 'singleGround',
    },
  },
};

export const FINAL_BOSS_SPRITE = 'darthAppel';
export const FINAL_BOSS_FRUIT = 'apple';
export const FINAL_BOSS_LEVEL_COLOR = rgb(209, 49, 51);
