//RUNE SELECTION SCREEN
const GAME_RUNE_WIDTH = 100;
const GAME_RUNE_HEIGHT = 100;

//GAMEPLAY ELEMENTS.

const GAME_NUM_ROWS = 10;
const GAME_NUM_COLS = 10;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

const GAME_SPRITE_WIDTH = GAME_WIDTH / GAME_NUM_COLS;
const GAME_SPRITE_HEIGHT = GAME_HEIGHT / GAME_NUM_ROWS;

const GAME_COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
const GAME_NUM_COLORS = (level) => 2 + level;
const GAME_LEVEL_CAP = GAME_COLORS.length - 2;

const GAME_FALL_SPEED = 2;

//Must match 3 pieces to count.
const GAME_AMOUNT_TO_MATCH = 3;

const GAME_TINT_COLOR = 0x203470;
const GAME_UNTINT_COLOR = 0xFFFFFF;

const GAME_DEFAULT_STATS = {
    maxHP: 1000,
    maxMP: 800,
    armor: 20,
    magicResist: 20,
    moveSpeed: 300,
    attackDamage: 10,
    abilityPower: 0,
    attackSpeed: 1.2,
    tenacity: 0,
    currentRunes: []
};

const GAME_BOSS_STATS = (level) => ({
    maxHP: 200 * level,
    armor: 5 * level,
    magicResist: 5 * level,
    attackDamage: 5 * level,
    attackPeriod: 1000,
    tenacity: 0.1 * level
});

var HEALTH_BAR = $('.health-bar');
var BAR = HEALTH_BAR.find('.bar');
var HIT = HEALTH_BAR.find('.hit');

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'phaser');
var game_state = {};

const getNextRuneOffer = function(runeTree, level) {

    return runeTree.slots[level-2].runes;

};