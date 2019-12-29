const sidebar = require("./sidebar.js");
const nav = require("./navbar");
const head = require("./head");

const config = {
    title: "Erela.js",
    head,
    theme: "yuu",
    themeConfig: {
        yuu: { 
            disableThemeIgnore: true 
        },
        nav,
        sidebar,
        searchMaxSuggestions: 5,
        sidebarDepth: 2,
        searchPlaceholder: "Search Docs...",
        lastUpdated: "Last Updated",
        repo: "strandxo/erela-docs",
        editLinks: true,
        docsBranch: "master",
        editLinkText: "Improve on Github!",
    }
};

module.exports = config;