# SearchResult  
---  
*class* **SearchResult**   
> The SearchResult class.  
---
- Constructor
```javascript
new Erela.SearchResult(data, track, user)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| data | any | The search result data. |  
| track | [Track](/docs/Track/) | The Track class. |  
| user | [User](https://discord.js.org/#/docs/main/stable/class/User) | The user who requested the track. |  
---  
| Properties <img width=1000/> |   
| :--- |   
| [loadType](#loadtype) |   
| [tracks](#tracks) |   
| [playlist](#playlist) |   
| [exception](#exception) |   
---  
## Properties:  
- ### loadType  
> The load type of the search result.  
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)*  
- ### tracks  
> The tracks of the search result.  
> **Type:** *[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[Track](/docs/Track)\>*  
- ### playlist  
> The playlist of the search result.  
> **Type:** *[IPlaylist](/docs/SearchResult/IPlaylist)*  
- ### exception  
> The exception of the search result if one occurred.  
> **Type:** *[IException](/docs/SearchResult/IException)[undefined)](/docs/undefined/undefined))*  
