//Built with Express and Node.js
//Thanks to https://www.youtube.com/watch?v=2hhEOGXcCvg
//This code was modified from https://dev.twitch.tv/docs/irc/

//Thanks to https://www.youtube.com/watch?v=ijl3GUHvKIw

const tmi = require('tmi.js');
// const sketch = require('./public/result')
const pastebin = require('better-pastebin')

pastebin.setDevKey("fa78f28b4348c36fbd3230d1e84dca70")

pastebin.login("effeect", "3FCrxehsWgrSpq*", function(success, data) {
    if(!success) {
        console.log("Failed (" + data + ")");
        return false;
    }
 
    pastebin.create({
        contents: "test contents",
        name: "test paste",
        privacy: "1"
    }, function(success, data) {
        if(success) {
            //data contains the URL of the created paste
        } else {
            //data contains an Error object indicating why the creation failed
        }
    });
    
    pastebin.edit("FxrdEkxf",
                  {
        contents : "let result = 'stuff'"
    }, function(success,data){
        //Do stuff here
    }
    )
});

// Define configuration options
// Uses a .env file to read
const opts = {
    option: {
      debug:true,
    },

    connection: {
      cluster:'aws',
      reconnect:true,
    },

    identity: {
        username: 'oliverdimesguol',
        password: 'oauth:ygi7b9w2mfnw0ovm1hfo34j1zemy82'
      },
    
    channels:
        ['effeect'],
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    //NOTE : REMOVE THIS AFTER DEBUGGING
//   if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!d20') {
    const num = rollDice(commandName);
    client.say(target, `You rolled a ${num}. Link: https://glitch.com/~twitch-chatbot`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName == "!Poetry")
  {
      let result = poetryRequest(commandName)
    //   client.say(target, `The result ${sketch.resultExport}`)
  }

}

function poetryRequest(text)
{

}

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 20;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}







//EXPRESS SERVER SETUP
let express = require('express'); //Imports Express

let app = express(); //Generates Express Application
let server = app.listen(3000); //Port Number

//Folders
app.use(express.static('public'));

console.log("My socket server is running")

