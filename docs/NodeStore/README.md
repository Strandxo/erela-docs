# NodeStore  
---  
*class* **NodeStore** *extends* **[Collection<number, Node>](https://discord.js.org/#/docs/main/stable/class/Collection)**  
> The NodeStore class.  
---
### Constructor
```javascript
new Erela.NodeStore(erela, nodes)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| erela | [ErelaClient](/docs/ErelaClient/) | The ErelaClient. |  
| nodes | [INodeOptions[]](/docs/ErelaClient/inodeoptions) | The INodeOptions array. |  
---  
| Properties <img width=1000/> | Methods <img width=1000/> |   
| :--- | :--- |   
| [leastUsed](#leastused) | [spawn](#spawn) |   
| [leastLoad](#leastload) | [remove](#remove) |   
---  
## Properties:  
- ### leastUsed  
> Filters the connected nodes and sorts them by the amount of rest calls it has made.  
> **Type:** *[Collection\<number, Node\>](https://discord.js.org/#/docs/main/stable/class/Collection)*  
---
- ### leastLoad  
> Filters the connected nodes and sorts them by the least resource usage.  
> **Type:** *[Collection\<number, Node\>](https://discord.js.org/#/docs/main/stable/class/Collection)*  
---
## Methods:  
- ### spawn  
> Adds a new Node.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | node | [NodeOptions](/docs/ErelaClient/inodeoptions) | The node options. |  
> | [extra={}] | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The nodes extra data to pass when extending for custom classes. |  
---
- ### remove  
> Removes a new Node.  
> **Type:** *(INode|null) - The node that was removed, or null if it does not exist* - The node that was removed, or null if it does not exist.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | nodeId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The node ID. |  
---