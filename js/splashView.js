var SPLASH_VIEW = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'SPLASH_VIEW';
    var running = false;

    log('Loaded');

    // ********************************************
    this.draw = function () {
        log('Drawing ' + this.id);

        $('#screen').html(
            '<div id="splash" class="screen">' +
            '   <div id="splashPrompt">CLICK TO BEGIN</div>' +
            '</div>'
        );

        UTILS.fadeIn($('.screen')[0]);
    };

    // ********************************************
    this.erase = function (callback) {
        log('Erasing ' + this.id);
        UTILS.fadeOut($('.screen')[0], callback);
    };

}).apply(SPLASH_VIEW);
