// The sphero object below mimics *some* of the basic commands you have
// access to when using the sphero.js library

module.exports =
{
    // iniitial state
    x_pos: 0,
    y_pos: 0,
    color: "red",
    // mimic Sphero's connect method
    connect: function(work) {
        console.log("let's roll!");
        work();
    },
    readOdometer: function () {
        return [this.x_pos, this.y_pos];
    },
    getColor: function () {
        return this.color;
    },
    roll: function (distance, direction) {
        console.log('you ....')
        var rads = direction * ( Math.PI / 180 );
        this.x_pos += distance * Math.cos(rads);
        this.y_pos += distance * Math.sin(rads);
    },
    setColor: function (color) {
        this.color = color;
    },
    assertState: function (x_pos, y_pos, color) {
        // WIP
        if (this.color == color) {
            console.log('color matches');
        } else {
            console.log("color doesn't match");
        }
        if (this.readOdometer == [x_pos, y_pos]) {
            console.log('position matches');
        } else {
            console.log("position doesn't matche");
        }
    }
};
