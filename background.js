const theme = {
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes/Theme_concepts
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme
    images: {
      //  //headerURL: 'Glick-Headshot.jpg',
      "additional_backgrounds": ["sheriff.png", 
      "badge.jpg"]
    },
    "properties": {
        "additional_backgrounds_alignment": [ "left top", "right top" ],
    },
    colors: {
       accentcolor: '#271a12',
       textcolor: 'white',
    }
};

async function updateThemeForCurrentWindow() {
    let currentWindow = await browser.windows.getLastFocused();
    console.log(theme);
    browser.theme.update(currentWindow.id, theme);
}

async function makeShieldSheriffWindow () {
    const urls = ["https://mana.mozilla.org/wiki/display/strategyandinsights/Shield",
     "https://delivery-console.prod.mozaws.net/",
     "https://mzl.la/2Ldn3Dj",
     "https://docs.google.com/spreadsheets/d/1qD1jHgswYWspAfqRUOY6llsv_1Idpw8rBfNwIkVNVgg/edit?pli=1#gid=0",
     "https://calendar.google.com/calendar/b/1?cid=bW96aWxsYS5jb21faGlpaTFjZ2s0Mmw3MWRwcDczc3RsdTBsdXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
     "https://firefox-test-tube.herokuapp.com/"
    ]

    // new window
    // open the tabs
    await browser.windows.create({
        // focused: true  // focused isn't valid in firefox, defaults true
        url: urls
    });

    // theme it
    await updateThemeForCurrentWindow();

    // TBD
    // recall what window happened
    // make button inactive
}

browser.browserAction.onClicked.addListener(makeShieldSheriffWindow);