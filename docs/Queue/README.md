# Queue  
---  
*class* **Queue** *extends* **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**  
> The Queue class.  
---
### Constructor
```javascript
new Erela.Queue(erela)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| erela | [ErelaClient](/docs/ErelaClient/) | The Erela Client. |  
---  
| Methods <img width=1000/> |   
| :--- |   
| [add](#add) |   
| [removeFrom](#removefrom) |   
| [remove](#remove) |   
| [clear](#clear) |   
| [shuffle](#shuffle) |   
---  
## Methods:  
- ### add  
> Adds a track to the queue.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | track | [ITrack](/docs/Track/) | The track to add. |  
> | [offset=0] | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The offset to add the track at. |  
---
- ### removeFrom  
> Removes a track to the queue. Defaults to the first track.  
> **Type:** *ITrack|null - The track that was removed, or null if the track does not exist*
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | [track=0] | [ITrack](/docs/Track/)\|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  | The track to remove. | 
--- 
- ### remove  
> Removes a track to the queue. Defaults to the first track.  
> **Type:** *ITrack|null - The track that was removed, or null if the track does not exist* 
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | [track=0] | [ITrack](/docs/Track/)\|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The track to remove. |  
---
- ### clear  
> Clears the queue.  
---
- ### shuffle  
> Shuffles the queue.  
---