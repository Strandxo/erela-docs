# Node  
---  
*class* **Node**   
> The Node class.  
---
### Constructor
```javascript
new Erela.Node(erela, options)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| erela | [ErelaClient](/docs/ErelaClient/) | The Erela client. |  
| options | [NodeOptions](/docs/ErelaClient/inodeoptions) | The Node options. |  
---  
| Properties <img width=1000/> | Methods <img width=1000/> |   
| :--- | :--- |   
| [options](#options) | [setOptions](#setoptions) |   
| [stats](#stats) | [connect](#connect) |   
| [reconnectAttempts](#reconnectattempts) | [connect](#connect) |   
| [retryAmount](#retryamount) | [destroy](#destroy) |   
| [retryDelay](#retrydelay) | [send](#send) |   
| [calls](#calls) |  |   
| [connected](#connected) |  |   
---  
## Properties:  
- ### options  
> The options for the new.  
> **Type:** *[INodeOptions](/docs/ErelaClient/inodeoptions)*  
---
- ### stats  
> The stats for the node.  
> **Type:** *[INodeStats](/docs/Node/INodeStats)*  
---
- ### reconnectAttempts  
> The amount the node will try to reconnect.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*  
---
- ### retryAmount  
> The amount the node will try to reconnect.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*    
---
- ### retryDelay  
> The amount the node will delay after a failed reconnect.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*   
- ### calls  
> The amount of REST calls the node has made.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*   
---
- ### connected  
> Returns if connected to the Node.  
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) - If the node is connected* 
--- 
## Methods:  
- ### setOptions  
> Changes the node options and reconnects.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | options | [INodeOptions](/docs/ErelaClient/inodeoptions) | The new Nodes options. |  
---
- ### connect  
> Connects to the Node.  
---
- ### connect  
> Reconnects to the Node.  
---
- ### destroy  
> Destroys the Node.  
---
- ### send  
> Sends data to the Node.  
> **Type:** *Promise[\<boolean\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | data | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The data to send. |  
---