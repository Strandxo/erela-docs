# PlayerStore  
---  
*class* **PlayerStore** *extends* **[Collection<string, Player>](undefined)**  
> The PlayerStore class.  
---
- Constructor
```javascript
new Erela.PlayerStore(erela)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| erela | [ErelaClient](/docs/ErelaClient/) | The ErelaClient. |  
---  
| Methods <img width=1000/> |   
| :--- |   
| [spawn](#spawn) |   
| [destroy](#destroy) |   
---  
## Methods:  
- ### spawn  
> Spawns a new player, or returns the player if it exists.  
> **Returns:** *[Player](/docs/Player/)* - The newly created Player.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | options | [IPlayerOptions](/docs/Player/IPlayerOptions) | The options to spawn a player with. |  
> | [extra={}] | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | Extra data to pass when extending for custom classes. |  
- ### destroy  
> Destroys a player.  
> **Returns:** *[Player](/docs/Player)[null](/docs/undefined/null)* - The Player or null if it does not exist.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | guildId | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | The guild ID to destroy the player with. |  
