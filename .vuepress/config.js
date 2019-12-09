const sidebar = require("./sidebar.js");
const nav = require("./navbar")

const config = {
    title: "Erela.js",
    description: "The official documentation website for the lavalink client you all love, Erela.js!",
    head: [
		["link", { rel: "icon", href: "/images/favicon.png", alt: "erela.js logo" }],
		["meta", { name: "og:title", content: "Erela.js Documentation" }],
		["meta", { name: "og:description", content: "Official documentation for the lavalink client, Erela.js" }],
		["meta", { name: "og:type", content: "website" }],
		["meta", { name: "og:url", content: "https://warhammer.sites/projects/erela.js" }],
		["meta", { name: "og:locale", content: "en_US" }],
	],
    theme: "yuu",
    repo: "strandxo/erela-docs",
    docsDir: "#",
    editLinks: true,
    editLinks: true,
    sidebarDepth: 2,
    themeConfig: {
        yuu: {
            disableThemeIgnore: true
		},
        nav,
        sidebar,
        searchMaxSuggestions: 5,
        searchPlaceholder: "Search Docs...",
        lastUpdated: "Last Updated",
    }
};

module.exports = config;