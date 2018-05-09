// This example file is meant to give you an idea of some of the basic
// Sphero commands. Refer to this when solving activities 1 & 2.


var Orb = require('./orb.js');

// First step is to connect to Sphero
Orb.connect(function() {

  // Move Sphero a distance of 200 units at an angle of 90 degrees
  Orb.roll(200,90)

  // Get Sphero's color
  var color = Orb.getColor();
  console.log("Sphero's current color is: " + color);

  // Change Sphero's color
  Orb.setColor("Blue")

  // Verify Sphero's color has changed
  var color = Orb.getColor();
  console.log("Sphero's current color is: " + color);

  // Use the Odometer to find Sphero's position in format [x,y]
  var position = Orb.readOdometer();
  console.log(position);
});