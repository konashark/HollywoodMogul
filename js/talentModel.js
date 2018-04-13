var TALENTMODEL = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'TALENTMODEL';

    this.talent = [
        { role: "director", tier: 'A', salary: 12.5, path: "directorA1.png", img: undefined, used: false },
        { role: "director", tier: 'A', salary: 15,   path: "directorA2.png", img: undefined, used: false },
        { role: "director", tier: 'A', salary: 17.5, path: "directorA1.png", img: undefined, used: false },
        { role: "director", tier: 'A', salary: 20,   path: "directorA2.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 3,    path: "directorB1.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 4,    path: "directorB2.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 4,    path: "directorB1.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 5,    path: "directorB2.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 5,    path: "directorB1.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 5,    path: "directorB2.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 6,    path: "directorB1.png", img: undefined, used: false },
        { role: "director", tier: 'B', salary: 6,    path: "directorB2.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC1.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC2.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC1.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC2.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC1.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC2.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC1.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC2.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC1.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC2.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC1.png", img: undefined, used: false },
        { role: "director", tier: 'C', salary: 1,    path: "directorC2.png", img: undefined, used: false },

        { role: "actor",    tier: 'A', salary: 12.5, path: "actorA1.png", img: undefined, used: false },
        { role: "actor",    tier: 'A', salary: 15,   path: "actorA2.png", img: undefined, used: false },
        { role: "actor",    tier: 'A', salary: 17.5, path: "actorA1.png", img: undefined, used: false },
        { role: "actor",    tier: 'A', salary: 20,   path: "actorA2.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 3,    path: "actorB1.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 4,    path: "actorB2.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 4,    path: "actorB1.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 5,    path: "actorB2.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 5,    path: "actorB1.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 5,    path: "actorB2.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 6,    path: "actorB1.png", img: undefined, used: false },
        { role: "actor",    tier: 'B', salary: 6,    path: "actorB2.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC1.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC2.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC1.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC2.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC1.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC2.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC1.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC2.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC1.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC2.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC1.png", img: undefined, used: false },
        { role: "actor",    tier: 'C', salary: 1,    path: "actorC2.png", img: undefined, used: false },

        { role: "actress",  tier: 'A', salary: 12.5, path: "actressA1.png", img: undefined, used: false },
        { role: "actress",  tier: 'A', salary: 15,   path: "actressA2.png", img: undefined, used: false },
        { role: "actress",  tier: 'A', salary: 17.5, path: "actressA1.png", img: undefined, used: false },
        { role: "actress",  tier: 'A', salary: 20,   path: "actressA2.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 3,    path: "actressB1.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 4,    path: "actressB2.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 4,    path: "actressB1.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 5,    path: "actressB2.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 5,    path: "actressB1.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 5,    path: "actressB2.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 6,    path: "actressB1.png", img: undefined, used: false },
        { role: "actress",  tier: 'B', salary: 6,    path: "actressB2.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC1.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC2.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC1.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC2.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC1.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC2.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC1.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC2.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC1.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC2.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC1.png", img: undefined, used: false },
        { role: "actress",  tier: 'C', salary: 1,    path: "actressC2.png", img: undefined, used: false }
    ];

    log('Loaded');

    // ********************************************
    this.initTalent = function () {
        this.talent.forEach(function(item) {
            item.img = new Image();
            item.img.src = "resources/headshots/" + item.path;
        });

        return this.talent;
    };

    // ********************************************
    this.getTalent = function () {
        return this.talent;
    };

    // ********************************************
    this.castingCall = function (num) {
        // select random talent from the pool and return. Do not pick used or duplicates.
        var castList = [];

        while (castList.length < num) {
            var person = this.talent[Math.floor(Math.random() * this.talent.length)];
            if ((person.used == false) && (castList.indexOf(person) < 0)) {
                castList.push(person);
            }
        }
        return castList;
    };

    // ********************************************
    this.getStartingHand = function () {
        // select random talent from the pool and return (no A-listers). Do not pick used or duplicates.
        var pool = [];

        pool.push(this.getTalentType(0));
        pool.push(this.getTalentType(1));
        pool.push(this.getTalentType(2));
        pool.push(this.getTalentType(Math.floor(Math.random() * 3)));

        return pool;
    };

    // ********************************************
    this.getTalentType = function (type) {
        var person;
        while (!person){
            var idx = 8 + Math.floor(Math.random() * 12) + (type * 24);
            person = this.talent[idx];
            console.log(this.talent);
            if (person && (person.used == false) && (person.tier !== 'A')) {
                person.used = true;
                return person;
            }
            person = undefined;
        }
    };

}).apply(TALENTMODEL);
