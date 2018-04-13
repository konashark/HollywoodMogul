var TALENTVIEW = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'TALENTVIEW';

    log('Loaded');

    // ********************************************
    this.drawBaseView = function () {
        $('body').html('<div id="talent" class="screen" style="opacity: 1;"></div>');
    };

    // ********************************************
    this.drawTalentList = function (talentList, parentElem) {
        if (!parentElem) {
            parentElem = $('#talent');
        }
        talentList.forEach(function(item) {
            var tile = $(createTalentTile(item));
            parentElem.append(tile);
            tile.data = tile;
        });
    };

    // ********************************************
    createTalentTile = function(person) {
        var html =
            "<div class='talentTile'>" +
            "   <img class='talentTileImg' src='resources/headshots/" + person.path + "'>" +
            "   <div class='talentTileRole'>" + person.tier + " " + person.role.toUpperCase() + "</div>" +
            "   <div class='talentTileCost'>$" + person.salary +"M</div>" +
            "</div>";

        return html;
    }
}).apply(TALENTVIEW);
