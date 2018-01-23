# List of user.js tweaks
This is a list of tweaks that are changed when the `user.js` file from this repository is placed in the Firefox profile folder.

## HTML5/APIs/DOM

### Disallow websites from seeing your connected USB devices
`dom.gamepad.enabled` = `false`

## Automatic connections
### Disable prefetching of certain URLS 
`network.prefetch-next` = `false`

"Link prefetching is when a webpage hints to the browser that certain pages are likely to be visited, so the browser downloads them immediately so they can be displayed immediately when the user requests it." ([Source](http://kb.mozillazine.org/Network.prefetch-next))

A browser shouldn't visit websites without you choosing to visit them.

## Miscellaneous
### Disable Firefox Tracking Protection
`privacy.trackingprotection.enabled` = `false`

`privacy.trackingprotection.pbmode.enabled` = `false`

Firefox's built-in tracking protection, while still good, is very minimal. Use uMatrix/uBlock instead.

### Disable the Firefox password manager 
`signon.rememberSignons` = `false`

Javascript can be used to capture login information (username/email and password).

"When you save your username and password on a website, your password manager remembers them. From that point forward, it will attempt to automatically fill them into username and password boxes it sees on that website. This makes signing in faster, as you just have to click 'Login'.

But some third-party advertising scripts—the ones that nearly every website out there uses—are starting to use these to track you. They run in the background, create fake login and password boxes you can’t even see, and captures the credentials your password manager fills into them." ([Source](https://www.howtogeek.com/338209/you-should-turn-off-autofill-in-your-password-manager/))

[KeePass](https://keepass.info/) is an excellent replacement. Its security has been [audited by the European Commission's EU Free and Open Source Software Auditing (EU-FOSSA) project](https://joinup.ec.europa.eu/sites/default/files/inline-files/DLV%20WP6%20-01-%20KeePass%20Code%20Review%20Results%20Report_published.pdf).

### Disable the Firefox autofill 
`browser.formfill.enable` = `false`

### Disable third party cookies 
`network.cookie.cookieBehavior` = `1`

Third party cookies are cookies placed on a user's computer *not* by the visited domain. For example, somenewswebsite.com might place a somebadtracker.com cookie on a user's machine. If you disable third party cookies, this doesn't happen. 

### Disable Pocket
`extensions.pocket.enabled` = `false`

###  Disallow websites from viewing your microphone and camera status 
`media.navigator.enabled` = `false` 

### Disallow websites from viewing your computer's battery status
`dom.battery.enabled` = `false`

## Potential breakage
These tweaks have the possibility of breaking some websites or browser functionality. All potential breakage tweaks are commented out by default.

### Restrict cookies, cache, etc. to the domain level 
`privacy.firstparty.isolate` = `true`

First party isolation contains every website in its own data "silo". If a domain places a file on the user's computer, that file is contained to that domain. 

For example, if somenewswebsite.com and someothernewswebsite.com both place a somebadtracker.com cookie on a user's computer, that somebadtracker.com cookie can't look at any of the other somebadtracker.com cookies on the user's computer. This prevents the somebadtracker.com cookie from tracking your browsing across multiple sites.

Note that Cookie AutoDelete will not be able to function properly if this tweak is enabled on an installation of Firefox lower than version 59. In other words, Cookie AutoDelete only supports first party isolation on versions of Firefox 59 and up. To check your version of Firefox, click on the hamburger menu in the top right, then Help, then About Firefox.

## Telemetry
All telemetry tweaks are commented out by default.

### Disable Mozilla telemetry, experiments, and Health Report
`toolkit.telemetry.enabled` = `false`

`toolkit.telemetry.unified` = `false`

`experiments.supported` = `false`

`experiments.enabled` = `false`

`datareporting.healthreport.uploadEnabled` = `false`

`datareporting.policy.dataSubmissionEnabled` = `false`

## Personal preferences
All personal preference tweaks are commented out by default.

### Make scrolling feel like Microsoft Edge 
`general.smoothScroll.currentVelocityWeighting` = `0`

`general.smoothScroll.mouseWheel.durationMaxMS` = `250`

`general.smoothScroll.stopDecelerationWeighting` = `0.82`

`mousewheel.min_line_scroll_amount` = `40`

### Make scrolling feel like Google Chrome
`general.smoothScroll.mouseWheel.durationMaxMS` = `200`

`general.smoothScroll.stopDecelerationWeighting` = `0.82`

### Decrease full screen video fade 
`full-screen-api.transition-duration.enter` = `50 0` 

`full-screen-api.transition-duration.leave` = `0 50` 