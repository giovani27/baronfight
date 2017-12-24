const perkIDs = [[8005, 8008, 8009, 8014, 8017, 8021],
    [8105, 8112, 8120, 8124, 8126, 8128, 8134, 8135, 8136, 8138, 8139, 8143],
    [8210, 8214, 8224, 8226, 8229, 8230, 8232, 8233, 8234, 8236, 8237, 8242, 8243, 8299],
    [8304, 8306, 8313, 8316, 8321, 8326, 8339, 8345, 8347, 8351, 8359],
    [8410, 8429, 8430, 8435, 8437, 8439, 8444, 8446, 8451, 8453, 8463, 8465],
    [9101, 9103, 9104, 9105, 9111]];
const perkStyles = [8000, 8100, 8200, 8300, 8400];

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

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "black"];

const GAME_FALL_SPEED = 2;

//Must match 3 pieces to count.
const GAME_AMOUNT_TO_MATCH = 3;

const GAME_TINT_COLOR = 0x203470;
const GAME_UNTINT_COLOR = 0xFFFFFF;

var HEALTH_BAR = $('.health-bar');
var BAR = HEALTH_BAR.find('.bar');
var HIT = HEALTH_BAR.find('.hit');

var BASE_DAMAGE = 10;
var CPU_DAMAGE = 10;

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'phaser');
var game_state = {};
