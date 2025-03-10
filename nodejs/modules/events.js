import { EventEmitter } from "events";
// create event emitter objects
const eventEmitter = new EventEmitter();

// Register events
// when hello event is triggered then "Greetings from events" run
eventEmitter.on("hello", () => {
  console.log("Greetings from events");
});

eventEmitter.on("bye", () => {
    console.log("Bye Bye from events");
  });

// trigger/emit events
eventEmitter.emit("bye")
