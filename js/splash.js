var SPLASH = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'SPLASH';
    this.asyncExit = true;

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing ' + this.id);
        //UTILS.loadCss('./css/splash.css');
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering ' + this.id);
        SPLASH_VIEW.draw();
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting ' + this.id);
        SPLASH_VIEW.erase(callback);
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log(this.id + ' event handler: ' + event.keyCode);

        if (event && event.customType) {
            switch (event.customType) {
                case 'MESSAGE':
                    break;
            }
            return;
        }

        if (!event.keyCode) {
            return;
        }

        if (event.keyCode === 13) {
            stateManager.transitionTo('STUDIO');
        }

        var consumed = true;
        return consumed;
    };

}).apply(SPLASH);
