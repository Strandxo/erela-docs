# NodeStore  
---  
*class* **NodeStore** *extends* **[Collection<number, Node>](undefined)**  
> The NodeStore class.  
---
- Constructor
```javascript
new Erela.NodeStore(erela, nodes)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| erela | [ErelaClient](/docs/ErelaClient/) | The ErelaClient. |  
| nodes | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[INodeOptions](/docs/ErelaClient/INodeOptions)\> | The INodeOptions array. |  
---  
| Properties <img width=1000/> | Methods <img width=1000/> |   
| :--- | :--- |   
| [leastUsed](#leastused) | [spawn](#spawn) |   
| [leastLoad](#leastload) | [remove](#remove) |   
---  
## Properties:  
- ### leastUsed  
> Filters the connected nodes and sorts them by the amount of rest calls it has made.  
> **Type:** *[Collection](/docs/undefined/Collection)\<[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number), [Node](/docs/Node)\>*  
- ### leastLoad  
> Filters the connected nodes and sorts them by the least resource usage.  
> **Type:** *[Collection](/docs/undefined/Collection)\<[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number), [Node](/docs/Node)\>*  
## Methods:  
- ### spawn  
> Adds a new Node.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | node | [INodeOptions](/docs/ErelaClient/INodeOptions) | The node options. |  
> | [extra={}] | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | The nodes extra data to pass when extending for custom classes. |  
- ### remove  
> Removes a new Node.  
> **Returns:** *[INode](/docs/undefined/INode)[null](/docs/undefined/null)* - The node that was removed, or null if it does not exist.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | nodeId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | The node ID. |  
