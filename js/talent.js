var TALENT = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'TALENT';
    this.asyncExit = true;

    var talent = [];

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing ' + this.id);
        UTILS.loadCss('js/talent.css');

        talent = TALENTMODEL.initTalent();
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering ' + this.id);
        TALENTVIEW.drawBaseView();
        //var talentList = TALENTMODEL.castingCall(12);
        var talentList = TALENTMODEL.getStartingHand();
        TALENTVIEW.drawTalentList(talentList);
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting ' + this.id);
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

        var consumed = true;
        return consumed;
    };

}).apply(TALENT);
