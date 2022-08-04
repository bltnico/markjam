import patrol from '../components/ennemies/patrol';
import { Trophies } from './levels';

export const PLATFORMER_LEVELS = {
  [Trophies.LEMON]: [
    [
      '                          $',
      '                           ',
      '                          $',
      '                          $',
      '                          $',
      '           $$             $',
      '         ====             $',
      '     >                |   $',
      '                      |    ',
      '     > ^^      = >    |   @',
      '===========================',
    ],
    [
      '     $    $    $    $     $',
      '     $    $    $    $     $',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      ' @^^^>^^^^>^^^^>^^^^>^^^^^@',
      '===========================',
    ],
  ],
  [Trophies.ORANGE]: [
    [
      '                          $',
      '                           ',
      '                          $',
      '                          $',
      '                          $',
      '           $$             $',
      '         ====             $',
      '     >                =   $',
      '                      =    ',
      '     > ^^      = >    =   @',
      '===========================',
    ],
    [
      '     $    $    $    $     $',
      '     $    $    $    $     $',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      ' @^^^>^^^^>^^^^>^^^^>^^^^^@',
      '===========================',
    ],
  ],
  [Trophies.STRAWBERRY]: [
    [
      '               $$$$$$        ',
      '               ======        ',
      '                             ',
      '       @                     ',
      '                             ',
      '                             ',
      '                             ',
      '                             ',
      '        >                    ',
      '        =====              $ ',
      '                           $ ',
      '                             ',
      '                             ',
      '                             ',
      '                             ',
      '                             ',
      '     >    >   ^^   ^^>^^^^^@ ',
      '================ ≠ ========= ',
      '      $                     =',
      '      $                     2',
      '      $                      ',
      '      $                      ',
      '      $            >         ',
      '      $       ≠=====   $     ',
      '      =========        $     ',
      '                       $     ',
      '           $     $     $     ',
      '           $     $     $     ',
      '           $     $     $     ',
      '           $     $     $     ',
      ' | >    >  $   > $  |  $     ',
      ' ====================  $     ',
      '                             ',
      '                            e',
      '                            1',
      '                      ===   =',
      '                         ====',
    ],
    [
      '     $    $    $    $     $',
      '     $    $    $    $     $',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      ' @^^^>^^^^>^^^^>^^^^>^^^^^@',
      '===========================',
    ],
  ],
  [Trophies.CHERRY]: [
    [
      '                          $',
      '                           ',
      '                          $',
      '                          $',
      '                          $',
      '           $$             $',
      '         ====             $',
      '     >                =   $',
      '                      =    ',
      '     > ^^      = >    =   @',
      '===========================',
    ],
    [
      '     $    $    $    $     $',
      '     $    $    $    $     $',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      '                           ',
      ' @^^^>^^^^>^^^^>^^^^>^^^^^@',
      '===========================',
    ],
  ],
};

export const PLATFORMER_LEVEL_CONF = {
  width: 64,
  height: 64,
  '^': () => [
    sprite('peaks', { anim: 'active' }),
    area(),
    solid(),
    scale(4),
    // origin('bot'),
    'danger',
  ],
  '|': () => [
    sprite('singleGround'),
    area(),
    // origin('bot'),
     solid(),
    'wall',
  ],
  '@': () => [
    sprite('gate'),
    area(),
    scale(4),
    // origin('bot'),
    pos(0, -12),
    'portal',
  ],
};
