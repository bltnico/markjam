import patrol from '../components/ennemies/patrol';

export const PLATFORMER_LEVELS = {
  lemon: [
    [
      "                          $",
      "                           ",
      "                          $",
      "                          $",
      "                          $",
      "           $$             $",
      "         ====             $",
      "     >                =   $",
      "                      =    ",
      "     > ^^      = >    =   @",
      "===========================",
    ],
    [
      "     $    $    $    $     $",
      "     $    $    $    $     $",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      " @^^^>^^^^>^^^^>^^^^>^^^^^@",
      "===========================",
    ],
  ],
  orange: [
    [
      "                          $",
      "                           ",
      "                          $",
      "                          $",
      "                          $",
      "           $$             $",
      "         ====             $",
      "     >                =   $",
      "                      =    ",
      "     > ^^      = >    =   @",
      "===========================",
    ],
    [
      "     $    $    $    $     $",
      "     $    $    $    $     $",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      " @^^^>^^^^>^^^^>^^^^>^^^^^@",
      "===========================",
    ],
  ],
  strawberry: [
    [
      "                          $",
      "                           ",
      "                          $",
      "                          $",
      "                          $",
      "           $$             $",
      "         ====             $",
      "     >                =   $",
      "                      =    ",
      "     > ^^      = >    =   @",
      "===========================",
    ],
    [
      "     $    $    $    $     $",
      "     $    $    $    $     $",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      " @^^^>^^^^>^^^^>^^^^>^^^^^@",
      "===========================",
    ],
  ],
  cherry: [
    [
      "                          $",
      "                           ",
      "                          $",
      "                          $",
      "                          $",
      "           $$             $",
      "         ====             $",
      "     >                =   $",
      "                      =    ",
      "     > ^^      = >    =   @",
      "===========================",
    ],
    [
      "     $    $    $    $     $",
      "     $    $    $    $     $",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      " @^^^>^^^^>^^^^>^^^^>^^^^^@",
      "===========================",
    ],
  ],
}

export const PLATFORMER_LEVEL_CONF = {
	// grid size
	width: 64,
	height: 64,
	// define each object as a list of components
	"=": () => [
    rect(64, 64),
    sprite('ground'),
		area(),
		solid(),
		origin("bot"),
	],
	"$": () => [
		sprite("orange"),
		area(),
		pos(0, -9),
		origin("bot"),
		"coin",
	],
	"^": () => [
		sprite("peaks"),
		area(),
		solid(),
		scale(4),
		origin("bot"),
		"danger",
	],
	">": () => [
		sprite('thrashMob1', { anim: 'active' }),
    area({ scale: 0.5 }),
		origin("bot"),
		scale(4),
		body(),
		patrol(),
		"enemy",
	],
	"@": () => [
		sprite("gate"),
		area(),
		scale(4),
		origin("bot"),
		pos(0, -12),
		"portal",
	],
}
