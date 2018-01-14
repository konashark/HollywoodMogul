console.log("Javascript is alive!");

var jgl;
var states = [];    // an array in which we'll store our three states
var stateIndex = 0;
var stateManager;

var KEYSTATE = [];
var KEY = {LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, ENTER: 13, SPACE: 32, X: 88, Z: 90 };

// ********************************************
window.onload = function() {

    jgl = new Jgl; // Instantiate JGL. Do this once at the start of your program

    // Create the state machine and initialise it to a given state
    stateManager = new StateManager();

    // Start handling key events
    document.onkeydown = function(event) {
        var eventConsumed = false;
        event.preventDefault();
        var eventHandler = stateManager.getCurrentStateEventHandler();
        if (eventHandler) {
            eventConsumed = eventHandler(event);
        }
        /*
        if (!eventConsumed) {
            console.log("Event was not handled by any State");
            switch (event.keyCode) {
                case jgl.KEYS.ENTER:
                    stateIndex = ((++stateIndex) % 3);  // look up next state and transition to it
                    stateManager.transitionTo(states[stateIndex], false);
                    break;

                case jgl.KEYS.ESC:
                    stateManager.transitionBack();
                    break;
            }
        }
        */
    }.bind(this);

    document.addEventListener("keydown", processKeyDown);
    document.addEventListener("keyup", processKeyUp);

    stateManager.newState(SPLASH);
    stateManager.newState(STUDIO);
    stateManager.newState(STANDINGS);
    stateManager.newState(TALENT);
    stateManager.newState(BUDGET);
    stateManager.newState(NEWS);
    stateManager.newState(BOXOFFICE);
    stateManager.newState(ENDGAME);

    setTimeout(function() { stateManager.transitionTo('SPLASH'); }, 500);
};

/*************************************************/
function processKeyDown(ev) {
    KEYSTATE[ev.keyCode] = true;

    switch (ev.keyCode)
    {
        case KEY.SPACE:
            break;

        default:
            console.log("Pressed key: " + ev.keyCode);
    }
}

/*************************************************/
function processKeyUp(ev) {
    KEYSTATE[ev.keyCode] = false;
};
