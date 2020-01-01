# INodeStats  
---  
*interface* **INodeStats**   
> The INodeStats interface.  
---
| Properties <img width=1000/> |   
| :--- |   
| [players](#players) |   
| [playingPlayers](#playingplayers) |   
| [uptime](#uptime) |   
| [memory](#memory) |   
| [cpu](#cpu) |   
| [frameStats](#framestats) |   
---  
## Properties:  
- ### players  
> The amount of players on the node.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### playingPlayers  
> The amount of players playing on the node.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### uptime  
> The duration the node has been up.  
> **Type:** *[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number)*  
- ### memory  
> The nodes memory stats.  
> **Type:** *[INodeMemoryStats](/docs/Node/INodeMemoryStats)*  
- ### cpu  
> The nodes CPU stats.  
> **Type:** *[INodeCPUStats](/docs/Node/INodeCPUStats)*  
- ### frameStats  
> The nodes frame stats.  
> **Type:** *[INodeFrameStats](/docs/Node/INodeFrameStats)*  
