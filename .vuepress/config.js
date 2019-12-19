const sidebar = require("./sidebar.js");
const nav = require("./navbar")

const config = {
    title: "Erela.js",
    head: [
		["link", { rel: "icon", href: "/images/favicon.png", alt: "erela.js logo" }],
		["meta", { name: "og:title", content: "Erela.js Documentation" }],
		["meta", { name: "og:description", content: "Official documentation for the lavalink client, Erela.js" }],
		["meta", { name: "og:type", content: "website" }],
		["meta", { name: "og:url", content: "https://warhammer.sites/projects/erela.js" }],
		["meta", { name: "og:locale", content: "en_US" }],
	],
    theme: "yuu",
    themeConfig: {
        yuu: { disableThemeIgnore: true },
        nav,
        sidebar,
        searchMaxSuggestions: 5,
        sidebarDepth: 2,
        searchPlaceholder: "Search Docs...",
        lastUpdated: "Last Updated",
        repo: "strandxo/erela-docs",
        editLinks: true,
        docsBranch: "master",
        editLinkText: "Edit on GitHub!",
    }
};

module.exports = config;