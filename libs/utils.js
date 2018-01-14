var UTILS = {
    // ********************************************
    fadeIn: function (element, callback) {
        var fadeInEventHandler = function () {
            console.log("FADEIN END");
            element.removeEventListener("webkitAnimationEnd", fadeInEventHandler, false);
            element.style.opacity = 1;
            element.classList.remove('fadeIn');
            if (callback) {
                callback();
            }
        };

        if (element) {
            element.addEventListener("webkitAnimationEnd", fadeInEventHandler, false);
            element.classList.add('fadeIn');
        } else {
            if (callback) {
                callback();
            }
        }
    },

    // ********************************************
    fadeOut: function (element, callback) {
        var fadeOutEventHandler = function () {
            console.log("FADEOUT END");
            element.removeEventListener("webkitAnimationEnd", fadeOutEventHandler, false);
            element.style.opacity = 0;
            element.classList.remove('fadeOut');
            if (callback) {
                callback();
            }
        };

        if (element) {
            element.addEventListener("webkitAnimationEnd", fadeOutEventHandler, false);
            element.classList.add('fadeOut');
        } else {
            if (callback) {
                callback();
            }
        }
    }

};