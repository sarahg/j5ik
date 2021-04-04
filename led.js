// Include dependencies.
var Tessel = require("tessel-io");
var five = require("johnny-five");

// Instantiate a new Board object.
var board = new five.Board({
  io: new Tessel(),
});

// Listen for the "ready" event.
board.on("ready", () => {
  // Pulse the LED on Port A, Pin 5.
  var led = new five.Led("a5");
  led.pulse(500);
});
