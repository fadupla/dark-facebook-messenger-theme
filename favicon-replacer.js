// ==UserScript==
// @name     dark-facebook-messenger-theme
// @version  1.0.0
// @grant    none
// @match http://www.facebook.com/*
// @match https://www.facebook.com/*
// @match http://www.messenger.com/*
// @match https://www.messenger.com/*
// ==/UserScript==

/**
*	Made by Knut Kirkhorn - Licensed MIT
**/

// Adds a new <link> html element to override the current favicon
function repalceFavicon(url) {
    let element = document.createElement('link');
    element.rel = 'icon';
    element.href = url;
    document.head.appendChild(element);
}

// Check which favicon to change to
if (window.location.host === 'www.facebook.com') {
    repalceFavicon('https://raw.githubusercontent.com/Knutakir/dark-facebook-messenger-theme/master/media/fb.ico');
} else if (window.location.host === 'www.messenger.com') {
    repalceFavicon('https://raw.githubusercontent.com/Knutakir/dark-facebook-messenger-theme/master/media/messenger.ico');
}
