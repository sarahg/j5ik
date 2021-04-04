var Barcli = require("barcli");
var five = require("johnny-five");
var Tessel = require("tessel-io");

// Instantiate a board object without the REPL or debug output.
var board = new five.Board({
  io: new Tessel(),
  repl: false,
  debug: false,
});

board.on("ready", function() {
  // Visualize input using Barcli.
  var range = [0, 100];
  var graph = new Barcli({
    label: "My Data",
    range: range,
  });
  var sensor = new five.Sensor({
    pin: "a7",
    threshold: 5 // When do we detect a "change" event?
  });

  sensor.on("change", () => {
    graph.update(sensor.scaleTo(range));
  });
});
