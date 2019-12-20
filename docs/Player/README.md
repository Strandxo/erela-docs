# Player  
---  
*class* **Player**   
> The Player class. 
--- 
| Properties <img width=1000/> | Methods <img width=1000/> |   
| :--- | :--- |   
| [node](#node) | [play](#play) |   
| [options](#options) | [setVolume](#setvolume) |   
| [guild](#guild) | [setEQ](#seteq) |   
| [textChannel](#textchannel) | [setTrackRepeat](#settrackrepeat) |   
| [voiceChannel](#voicechannel) | [setQueueRepeat](#setqueuerepeat) |   
| [bands](#bands) | [stop](#stop) |   
| [queue](#queue) | [pause](#pause) |   
| [playing](#playing) | [seek](#seek) |   
| [position](#position) |  |   
| [volume](#volume) |  |   
| [trackRepeat](#trackrepeat) |  |   
| [queueRepeat](#queuerepeat) |  |   
---  
## Properties:  
- ### node 
> The players node.  
> **Type:** *[Node](/docs/Node/)*   
> <div style="text-align: right"> [source](https://example.com/) </div>
--- 
- ### options  
> The players options.  
> **Type:** *[IPlayerOptions](/docs/Player/iplayeroptions)* 
---
- ### guild  
> The players guild it's connected to.  
> **Type:** *[Guild](https://discord.js.org/#/docs/main/stable/class/Guild)*  
---
- ### textChannel  
> The players text channel it's connected to.  
> **Type:** *[TextChannel](https://discord.js.org/#/docs/main/stable/class/TextChannel)*  
---
- ### voiceChannel  
> The players voice channel it's connected to.  
> **Type:** *[VoiceChannel](https://discord.js.org/#/docs/main/stable/class/VoiceChannel)*  
---
- ### bands  
> The players equalizer bands.  
> **Type:** *[IEqualizerBand[]](/docs/Player/ieqaulizerband)*  
---
- ### queue  
> The players queue.  
> **Type:** *[Queue](/docs/Queue/)*  
---
- ### playing  
> Whether the player is playing.  
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*  
---
- ### position  
> The players current position in the track.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*  
---
- ### volume  
> The players current volume.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*  
---
- ### trackRepeat  
> Whether the player is repeating the current track.  
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*  
---
- ### queueRepeat  
> Whether the player is repeating the queue.  
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*  
---
## Methods:  
- ### play  
> Plays the next track in the queue. 
--- 
- ### setVolume  
> Sets the players volume.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | volume | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The volume to set. |  
---
- ### setEQ  
> Sets the players equalizer. Pass a empty array to reset the bands. Gain: -0.25 min to 1 max
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | bands | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)[\<EqualizerBand\>](/docs/Player/iequalizerband) | The array of bands to set. | 
> #### Example:
> ```js
> <Player>.setEQ([
>  { band: 0, gain: 0.15 },
>  { band: 1, gain: 0.15 },
>  { band: 2, gain: 0.15 }
> ]);
> ```
--- 
- ### setTrackRepeat  
> Sets the track repeat.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | repeat | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If track repeat should be enabled. |  
---
- ### setQueueRepeat  
> Sets the queue repeat.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | repeat | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If queue repeat should be enabled. |  
---
- ### stop  
> Stops the current track.  
---
- ### pause  
> Pauses the current track.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | pause | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to pause the current track. |  
---
- ### seek  
> Seeks to the position in the current track.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | pause | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to pause the current track. |  
---