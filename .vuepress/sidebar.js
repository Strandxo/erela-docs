const sidebar = {
  "/docs/": [
		"gettingstarted",
		{
			title: "ErelaClient",
			children: [
				"/docs/ErelaClient/",
				"/docs/ErelaClient/IErelaOptions",
				"/docs/ErelaClient/INodeOptions",
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
				"/docs/Player/IPlayerOptions",
				"/docs/Player/IEqualizerBand",
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
				"/docs/SearchResult/IPlaylist",
				"/docs/SearchResult/IPlaylistInfo",
				"/docs/SearchResult/IException"
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
				"/docs/Utils/FormatTime",
				"/docs/Utils/ParseTime",
			],
		},
	],
};

module.exports = sidebar;