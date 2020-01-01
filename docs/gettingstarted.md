# Getting Started
---

## Installation

```bash
npm install erela.js
```
```bash
yarn add erela.js
```

## Prerequisites

Download & install the Java runtime built and download the Lavalink.jar file.

- [Java](https://www.java.com/en/download)
- [Lavalink](https://ci.fredboat.com/viewLog.html?buildId=lastSuccessful&buildTypeId=Lavalink_Build&tab=artifacts&guest=1)

> Note: Java v11 or newer is required to run the Lavalink.jar.

## Lavalink

- Create an [`application.yml`]() file in your working directory and copy the [example](https://github.com/Frederikam/Lavalink/blob/master/LavalinkServer/application.yml.example) into the created file and edit it with your configuration.

- Run the jar file by running [`java -jar Lavalink.jar`]() in a Terminal window.

## Example usage

```javascript
// To install Discord.js and Erela.js, run:
// npm install discord.js erela.js
const { Client } = require("discord.js");
const { ErelaClient } = require("erela.js");

// Initialize the Discord.js Client instance and an array of nodes for Erela.js.
const client = new Client();
const nodes = [{
    host: "localhost",
    port: 2333,
    password: "youshallnotpass",
}]

// Ready event fires when the Discord.js client is ready.
// Use once so it only fires once.
client.once("ready", () => {
    console.log("I am ready!")
    // Initializes an Erela client with the Discord.js client and nodes.
    client.music = new ErelaClient(client, nodes);
    // Listens to events.
    client.music.on("nodeConnect", node => console.log("New node connected"));
    client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    client.music.on("trackStart", (player, track) => player.textChannel.send(`Now playing: ${track.title}`));
    client.music.on("queueEnd", player => {
        player.textChannel.send("Queue has ended.")
        client.music.players.destroy(player.guild.id);
    });
});

client.on("message", async message => {
    if (message.content.startsWith("!play")) {
        const {
            voiceChannel
        } = message.member;
        // Note: for discord.js master you need to use
        // const { channel } = message.member.voice;

        // Spawns a player and joins the voice channel.
        const player = client.music.players.spawn({
            guild: message.guild,
            voiceChannel: voiceChannel,
            textChannel: message.channel,
        });

        // Searches Youtube with your query and the requester of the track(s).
        // Returns a SearchResult with tracks property.
        const res = await client.music.search(message.content.slice(6), message.author);

        // Adds the first track to the queue.
        player.queue.add(res.tracks[0]);
        message.channel.send(`Enqueuing track ${res.tracks[0].title}.`)

        // Plays the player (plays the first track in the queue).
        // The if statement is needed else it will play the current track again
        if (!player.playing) player.play();
    }
});

client.login("your token");
```

## Andesite-node

Erela.js can work with [andesite-node](https://github.com/natanbc/andesite-node). For filters (other than equalizer) you have to extend Player and add methods for each filter.

```javascript
const { Player } = require("erela.js");

class CustomPlayer extends Player {
    constructor(...args) {
        super(...args);
    }

    setTimescale(speed, pitch, rate) {
        this.node.send({
            op: "filters",
            guildId: this.guild.id,
            timescale: {
                speed,
                pitch,
                rate
            },
        });
    }
}

client.once("ready", () => {
    client.music = new ErelaClient(client, nodes, {
        player: CustomPlayer
    });
});
```

## Notes

Erela.js works with discord.js versions master and stable.
Only searches Youtube (At the time of creating this only Youtube worked for Lavalink).

## Tutorials
---
Below you will find youtube playlists that display channels using Erela.js for their tutorials.

- <a href="https://www.youtube.com/playlist?list=PLWnw41ah3I4buf2IbqdsV8o2hb3ekFKF5" target="_blank">MenuDocs Tutorial Series</a>  
---  

*If you would like to join everyone else on this list then please join [The War Room](https://discord.gg/5dTpady), the support discord for War's projects, and contact [`WarHammer414 | 夜の星#1969`]()*

## Development Team:

👤 **WarHammer414** (Package Developer)

- Website: <https://warhammer.codes>
- Github: [@WarHammer414](https://github.com/WarHammer414)

👤 **Connor Moriarty** (Documentation Developer)

- Website: *Coming soon*
- Github: [@Strandxo](https://github.com/Strandxo)