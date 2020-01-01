# Node  
---  
*class* **Node**   
> The Node class.  
---
- Constructor
```javascript
new Erela.Node(erela, options)
```
| Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
| :--- | :--- | :--- |  
| erela | [ErelaClient](/docs/ErelaClient/) | The Erela client. |  
| options | [INodeOptions](/docs/ErelaClient/INodeOptions) | The Node options. |  
---  
| Properties <img width=1000/> | Methods <img width=1000/> |   
| :--- | :--- |   
| [options](#options) | [setOptions](#setoptions) |   
| [stats](#stats) | [connect](#connect) |   
| [reconnectAttempts](#reconnectattempts) | [reconnect](#connect) |   
| [retryAmount](#retryamount) | [destroy](#destroy) |   
| [retryDelay](#retrydelay) | [send](#send) |   
| [calls](#calls) |  |   
| [connected](#connected) |  |   
---  
## Properties:  
- ### options  
> The options for the new.  
> **Type:** *[INodeOptions](/docs/ErelaClient/INodeOptions)*  
- ### stats  
> The stats for the node.  
> **Type:** *[INodeStats](/docs/Node/INodeStats)*  
- ### reconnectAttempts  
> The amount the node will try to reconnect.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### retryAmount  
> The amount the node will try to reconnect.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### retryDelay  
> The amount the node will delay after a failed reconnect.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### calls  
> The amount of REST calls the node has made.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### connected  
> Returns if connected to the Node.  
> **Type:** *[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)*  
## Methods:  
- ### setOptions  
> Changes the node options and reconnects.  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | options | [INodeOptions](/docs/ErelaClient/INodeOptions) | The new Nodes options. |  
- ### connect  
> Connects to the Node.  
- ### reconnect  
> Reconnects to the Node.  
- ### destroy  
> Destroys the Node.  
- ### send  
> Sends data to the Node.  
> **Returns:** *[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean)\>*  
> | Parameter <img width=1000/> | Type <img width=1000/> | Description <img width=1000/> |  
> | :--- | :--- | :--- |  
> | data | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object) | The data to send. |  
