# Queue  
---  
*class* **Queue** *extends* **[Array](undefined)**  
> The Queue class.  
---
- Constructor
```javascript
new Erela.Queue(erela)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| erela | [ErelaClient](/docs/ErelaClient/) | The Erela Client. |  
---  
| Properties <img width=1000/> | Methods <img width=1000/> |   
| :--- | :--- |   
| [duration](#duration) | [add](#add) |   
| [size](#size) | [removeFrom](#removefrom) |   
| [empty](#empty) | [remove](#remove) |   
|  | [clear](#clear) |   
|  | [shuffle](#shuffle) |   
---  
## Properties:  
- ### duration  
> Returns the total duration of the queue.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### size  
> Returns the size of the queue.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### empty  
> Returns if the queue is empty or not.  
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  
## Methods:  
- ### add  
> Adds a track to the queue.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | track | [Track](/docs/Track/) | The track to add. |  
> | [offset=0] | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | The offset to add the track at. |  
- ### removeFrom  
> Removes a track to the queue. Defaults to the first track.  
> **Returns:** *[Track](/docs/Track)[null](/docs/undefined/null)* - The track that was removed, or null if the track does not exist.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | [track=0] | [Track](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Track)[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | The track to remove. |  
- ### remove  
> Removes a track to the queue. Defaults to the first track.  
> **Returns:** *[Track](/docs/Track)[null](/docs/undefined/null)* - The track that was removed, or null if the track does not exist.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | [track=0] | [Track](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Track)[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | The track to remove. |  
- ### clear  
> Clears the queue.  
- ### shuffle  
> Shuffles the queue.  
