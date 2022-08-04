import { BEFORE_CHERRY_BOSS, BEFORE_LEMON_BOSS, BEFORE_ORANGE_BOSS, BEFORE_STRAWBERRY_BOSS } from './dialogs';

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
