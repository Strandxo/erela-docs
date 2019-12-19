# SearchResult  
---  
*class* **SearchResult**   
> The SearchResult class. 
--- 
### Constructor
```javascript
new Erela.SearchResult(data, track, user)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| data | SearchResultData | The search result data. |  
| track | ITrack | The Track class. |  
| user | User | The user who requested the track. |  
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
> **Type:** *[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)*  
---
- ### tracks  
> The tracks of the search result.  
> **Type:** *[Track[]](/docs/Track/)*  
---
- ### playlist  
> The playlist of the search result.  
> **Type:** *[IPlaylist](/docs/SearchResult/)*  
---
- ### exception  
> The exception of the search result if one occurred.  
> **Type:** *([IException](/docs/iexception)\|[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)))*  
---