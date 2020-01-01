# ErelaClient  
---  
*class* **ErelaClient** *extends* **[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)**  
> The Erela class.  
---
- Constructor
```javascript
new Erela.ErelaClient(client, nodes, [options=defaultOptions])
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| client | any | The Discord client. |  
| nodes | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[INodeOptions](/docs/ErelaClient/INodeOptions)\> | The nodes to use. |  
| [options=defaultOptions] | [IErelaOptions](/docs/ErelaClient/IErelaOptions) | Options for the client. |  
---  
| Properties <img width=1000/> | Methods <img width=1000/> | Events <img width=1000/> |   
| :--- | :--- | :--- |   
| [client](#client) | [search](#search) | [playerCreate](#playercreate) |   
| [shardCount](#shardcount) |  | [playerDestroy](#playerdestroy) |   
| [userId](#userid) |  | [playerMove](#playermove) |   
| [node](#node) |  | [trackStart](#trackstart) |   
| [player](#player) |  | [trackEnd](#trackend) |   
| [queue](#queue) |  | [trackStuck](#trackstuck) |   
| [track](#track) |  | [trackStuck](#trackstuck) |   
| [players](#players) |  | [queueEnd](#queueend) |   
| [nodes](#nodes) |  | [socketClosed](#socketclosed) |   
|  |  | [nodeCreate](#nodecreate) |   
|  |  | [nodeConnect](#nodeconnect) |   
|  |  | [nodeReconnect](#nodereconnect) |   
|  |  | [nodeError](#nodeerror) |   
|  |  | [nodeDisconnect](#nodedisconnect) |   
---  
## Properties:  
- ### client  
> The Discord client.  
> **Type:** *any*  
- ### shardCount  
> The shard count.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### userId  
> The client user ID.  
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  
- ### node  
> The custom Node class.  
> **Type:** *[Node](/docs/Node)*  
- ### player  
> The custom Player class.  
> **Type:** *[Player](/docs/Player)*  
- ### queue  
> The custom Queue class.  
> **Type:** *[Queue](/docs/Queue)*  
- ### track  
> The custom Track class.  
> **Type:** *[Track](/docs/Track)*  
- ### players  
> The PlayerStore collection.  
> **Type:** *[PlayerStore](/docs/PlayerStore/)*  
- ### nodes  
> The NodeStore collection.  
> **Type:** *[NodeStore](/docs/NodeStore/)*  
## Methods:  
- ### search  
> Searches YouTube with the query. Note: As of writing this only youtube worked.  
> **Returns:** *[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[SearchResult](/docs/SearchResult)\>*  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | query | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The query to search against. |  
> | user | [User](https://discord.js.org/#/docs/main/stable/class/User) | The user who requested the tracks. |  
## Events:  
- ### playerCreate  
> Emitted when a player is created.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The created player. |  
- ### playerDestroy  
> Emitted when a player is destroyed.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The destroyed player. |  
- ### playerMove  
> Emitted when a player is moved to a new channel.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The moved player. |  
> | oldChannel | [VoiceChannel](https://discord.js.org/#/docs/main/stable/class/VoiceChannel) | The old voice channel. |  
> | newChannel | [VoiceChannel](https://discord.js.org/#/docs/main/stable/class/VoiceChannel) | The new voice channel. |  
- ### trackStart  
> Emitted when a track is started.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The player that has the track. |  
> | track | [Track](/docs/Track/) | The track that started. |  
- ### trackEnd  
> Emitted when a track ends.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The player that has the track. |  
> | track | [Track](/docs/Track/) | The track that ended. |  
- ### trackStuck  
> Emitted when a track gets stuck during playback.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The player that has the track. |  
> | track | [Track](/docs/Track/) | The track that ended. |  
> | message | any | The message for the event. |  
- ### trackStuck  
> Emitted when a track errors during playback.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The player that has the track. |  
> | track | [Track](/docs/Track/) | The track that ended. |  
> | message | any | The message for the event. |  
- ### queueEnd  
> Emitted when a queue ends.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The player who's queue has ended. |  
- ### socketClosed  
> Emitted when a player voice channel connected is closed.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | player | [Player](/docs/Player/) | The player. |  
- ### nodeCreate  
> Emitted when a node is created.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | node | [Node](/docs/Node/) | The created node. |  
- ### nodeConnect  
> Emitted when a node connects.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | node | [Node](/docs/Node/) | The node that connected. |  
- ### nodeReconnect  
> Emitted when a node reconnects.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | node | [Node](/docs/Node/) | The node that reconnected. |  
- ### nodeError  
> Emitted when a node encounters an error.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | node | [Node](/docs/Node/) | The node. |  
> | error | [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) | The error. |  
- ### nodeDisconnect  
> Emitted when a node disconnects abnormally.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | node | [Node](/docs/Node/) | The node. |  
> | error | [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) | The error. |  
