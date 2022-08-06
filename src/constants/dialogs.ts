export const INTRO = [
  ['oldAnanas', 'Mark ? Can you hear me ? I am the old Ananas. Patriarch of the United States of JAMERICA.', { anim: 'talking' }],
  ['oldAnanas', 'Turn off your cigarette, you have some work.', { anim: 'talking' }],
  ['jarBreaks', 'The JAR OF HARMONY as been broken !', { anim: 'idle', width: 32 }],
  ['lemonBoss', 'The evil guardians has awaken again !', { anim: 'idle' }],
  ['oldAnanas', "You have to meet them, they will challenge you. If you beat them, they'll give you the fruits.", { anim: 'talking' }],
  ['mark', "Then we'll make the jam and put it in the JAR OF HARMONY to restore peace", { anim: 'idle' }],
  ['oldAnanas', "You're our last hope, Mark !", { anim: 'talking' }],
];

export const BATTLE_LEMON_WIN = [['mark', "Awww, i've turned around, but it's just another lemon tree !"]];
export const BATTLE_LEMON_LOSE = [['lemonBoss', "I don't have the time to show you my lemon grenande, the LIMONADE", { anim: 'idle' }]];
export const BATTLE_STRAWBERRY_WIN = [['mark', 'Hmmm...this monster was really a strawberry ?']];
export const BATTLE_STRAWBERRY_LOSE = [['strawberryBoss', 'You taste like a Blood Strawberry, or like the CRANBERRIES !', { anim: 'idle' }]];
export const BATTLE_CHERRY_WIN = [['mark', 'It was close, should take Cherry-flavored antacids like Kurt...']];
export const BATTLE_CHERRY_LOSE = [['cherryBoss', 'I will keep you forever by my side, mon Cherry !', { anim: 'idle' }]];
export const BATTLE_ORANGE_WIN = [['mark', 'Well, some people say Orange is the New Black...']];
export const BATTLE_ORANGE_LOSE = [['orangeBoss', 'Yawk ! I am the Agent Orange !', { anim: 'idle' }]];

export const BATTLE_DARTH_APPLE_LOSE = [['darthAppel', 'Now I can conquer the Big Apple !', { anim: 'idle', width: 46 }]];


export const BEFORE_LEMON_BOSS = [
  //
  ['lemonBoss', "Welcome to my little Fool's Garden, acid you walking on the grass !"],
];

export const BEFORE_ORANGE_BOSS = [
  //
  ['orangeBoss', 'Yawk ! I am the Agent Orange !'],
];

export const BEFORE_STRAWBERRY_BOSS = [
  //
  ['strawberryBoss', "I'm not the kind of strawberry you can eat with sugar"],
];

export const BEFORE_CHERRY_BOSS = [
  //
  ['cherryBoss', "Hello mon Cherry, i'm gonna eat you up !"],
];

export const FINAL_BOSS = [
  //
  ['oldAnanas', "Mark ! You've succeed ! You've brought all the fruits !", { anim: 'talking' }],
  ['oldAnanas', "But wait...", { anim: 'talking' }],
  ['oldAnanas', "Oh no ! It's him, the dark lord ! The monster that wants to trouble the jam harmony, DARTH APPLE", { anim: 'talking' }],
  ['darthAppel', "Thank you Mark, you have reunited the sacred fruits. Now, there's no limit to my power !", { anim: 'idle', width: 46 }],
  ['darthAppel', "Soon I'll produce a lot of very expansive computer and sell it to my DARTH APPLE fanboys ! HAHAHA", { anim: 'idle', width: 46 }],
  ['mark', "I will not let you cheat the JAMERICAN youth", { anim: 'idle', width: 46 }],
];

export const END_SCENE = [
  ['oldAnanas', "You've restored the harmony in jam !", { anim: 'talking' }],
  ['oldAnanas', "The dark lord DARTH APPLE is no more a threat, congratulation.", { anim: 'talking' }],
  ['oldAnanas', "Now that the JAR OF HARMONY can be refill, we can make JAMERICA great again.", { anim: 'talking' }],
  ['oldAnanas', "Now you can take a long rest, and chill out with a cocktail of fruit !", { anim: 'talking' }],
]
