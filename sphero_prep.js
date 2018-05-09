console.log("let's roll");

var Orb = require('./orb.js');

Orb.connect(function() {
  Orb.roll(100,100)
});





console.log(Orb.x_pos);
console.log(Orb.position());
