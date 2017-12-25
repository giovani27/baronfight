var selectableRunes = [];

game_state.runeSelect = function() {};
game_state.runeSelect.prototype = {


    init(runes) {
        selectableRunes = runes;
    },


    create: function() {

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "Select your Rune Tree!", style).anchor.setTo(.5,.5);


        for (var i = 0 ; i < selectableRunes.length ; i++) {
            var sprite = game.add.sprite((selectableRunes.length === 5 ? 0 : 35) + GAME_WIDTH * i / selectableRunes.length, GAME_HEIGHT/2 + 70, '' + selectableRunes[i]);

            sprite.runeID = selectableRunes[i];

            sprite.anchor.setTo(0, 0.5);
            sprite.width = GAME_RUNE_WIDTH;
            sprite.height = GAME_RUNE_HEIGHT;
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(runeSelected);
        }

    }

};

function runeSelected(rune) {

    console.log("Selected Rune: " + rune.runeID);
    playerStats.currentRunes = playerStats.currentRunes.concat(rune.runeID);

    game.state.start('game', true, false, GAME_NUM_COLORS(level));
}

game.state.add('runeSelect', game_state.runeSelect);
//game.state.start('runeSelect', true, false, [8005, 8008, 8009]);