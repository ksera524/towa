"use strict";
chrome.webRequest.onBeforeRequest.addListener((details) => {
    const url = new URL(details.url);
    const searchParams = new URLSearchParams(url.search);
    const q = searchParams.get('q');
    if (q && /^[\u4e00-\u9faf]+$/.test(q)) {
        searchParams.set('q', q + 'とは');
        url.search = searchParams.toString();
        return { redirectUrl: url.href };
    }
}, { urls: ["*://www.google.com/search?*"] }, ["blocking"]);
