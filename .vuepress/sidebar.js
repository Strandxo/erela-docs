const sidebar = {
  "/docs/": [
		"gettingstarted",
		{
			title: "ErelaClient",
			children: [
				"/docs/ErelaClient/",
				"/docs/ErelaClient/ierelaoptions",
				"/docs/ErelaClient/inodeoptions",
			],
		},
		{
			title: "Node",
			children: [
				"/docs/Node/",
				"/docs/Node/INodeStats",
				"/docs/Node/INodeCPUStats",
				"/docs/Node/INodeFrameStats",
				"/docs/Node/INodeMemoryStats"
			],
		},
		{
			title: "NodeStore",
			children: [
				"/docs/NodeStore/"
			],
		},
		{
			title: "Player",
			children: [
				"/docs/Player/",
				"/docs/Player/iplayeroptions",
				"/docs/Player/iequalizerband",
			],
		},
		{
			title: "PlayerStore",
			children: [
				"/docs/PlayerStore/"
			],
		},
		{
			title: "Queue",
			children: [
				"/docs/Queue/"
			],
		},
		{
			title: "SearchResult",
			children: [
				"/docs/SearchResult/",
				"/docs/SearchResult/iplaylistinfo",
				"/docs/SearchResult/searchresult",
				"/docs/SearchResult/iexception"
			],
		},
		{
			title: "Track",
			children: [
				"/docs/Track/"
			],
		},
		{
			title: "Utilities",
			children: [
				"/docs/Utils/",
				"/docs/Utils/formattime",
				"/docs/Utils/parsetime",
			],
		},
	],
};

module.exports = sidebar;