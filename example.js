// This example file is meant to give you an idea of some of the basic
// Sphero commands. Refer to this when solving activities 1 & 2.
var sphero = require('./sphero.js');

// First step is to connect to Sphero
sphero.connect(function() {

  // Move Sphero a distance of 200 units at an angle of 90 degrees
  sphero.roll(200,90)

  // Get Sphero's color
  var color = sphero.getColor();
  console.log("Sphero's current color is: " + color);

  // Change Sphero's color
  sphero.setColor("Blue")

  // Verify Sphero's color has changed
  var color = sphero.getColor();
  console.log("Sphero's current color is: " + color);

  // Use the Odometer to find Sphero's position in format [x,y]
  var position = sphero.readOdometer();
  console.log(position);
});