/* sophisticated_code.js */

// This code is a simulated text-based adventure game called "The Maze of Enigma".
// The player will navigate through a complex maze filled with riddles and puzzles.
// The objective is to reach the final room and claim the ultimate treasure.

// Initialize variables
let player = {
   name: "Unknown Explorer",
   currentRoom: "",
   inventory: [],
};

let rooms = {
   entrance: {
      description: "You stand at the entrance of a mysterious maze, shrouded in darkness.",
      north: "room1",
      east: "room2",
      west: "room3",
   },
   room1: {
      description: "You enter a dimly lit room with a faint sound of dripping water.",
      south: "entrance",
      east: "room4",
   },
   room2: {
      description: "You find yourself in a room filled with portraits of ancient warriors.",
      south: "room5",
      west: "entrance",
   },
   room3: {
      description: "You step into a room with towering statues of forgotten deities.",
      east: "entrance",
      north: "room6",
   },
   room4: {
      description: "You stumble upon a room with a massive stone door.",
      west: "room1",
   },
   room5: {
      description: "A room engulfed in darkness, with only faint whispers echoing.",
      south: "room7",
      north: "room2",
   },
   room6: {
      description: "You enter a room with ancient inscriptions on the walls.",
      south: "room3",
   },
   room7: {
      description: "You reach a room with a mysterious glowing orb floating in the center.",
      north: "room5",
      east: "finalRoom",
   },
   finalRoom: {
      description: "Congratulations on reaching the final room! Claim your treasure, brave explorer!",
      west: "room7",
   },
};

// Function to print room description and available exits
function printRoomDetails(room) {
   console.log("\n" + room.description);
   console.log("Exits: " + Object.keys(room).filter((key) => key !== "description").join(", "));
}

// Function to handle user input and update player's current room
function playGame() {
   player.currentRoom = "entrance";

   console.log("Welcome to the Maze of Enigma!");
   console.log("Enter 'quit' at any time to exit the game.");

   while (true) {
      printRoomDetails(rooms[player.currentRoom]);

      let command = prompt("Enter your next move:");

      if (command === "quit") {
         console.log("Thank you for playing!");
         break;
      }

      if (rooms[player.currentRoom][command]) {
         player.currentRoom = rooms[player.currentRoom][command];
      } else {
         console.log("Invalid move! Try again.");
      }
   }
}

// Start the game
playGame();