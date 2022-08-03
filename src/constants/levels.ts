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
    sprites: {
      thrashMob: 'lemonMob',
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
    sprites: {
      thrashMob: 'lemonMob',
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
    sprites: {
      thrashMob: 'strawberryMob',
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
    sprites: {
      thrashMob: 'lemonMob',
      boss: 'cherryBoss',
      ground: 'ground',
      singleGround: 'singleGround',
    },
  },
};
