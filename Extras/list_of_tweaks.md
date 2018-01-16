# List of user.js tweaks
This is a list of tweaks that are changed when the `user.js` file from this repository is placed in the Firefox profile folder.

## HTML5/APIs/DOM
### Disable web notifications 
`dom.webnotifications.enabled` = `false`

Can't be used to track you, but is annoying.

### Disallow websites from accessing your location
`geo.enabled` = `false`

### Disallow websites from enumerating your connected USB devices
`dom.gamepad.enabled` = `false`

Don't allow websites to look at the USB devices you have connected.

## Automatic connections
### Disable prefetching of certain URLS 
`network.prefetch-next` = `false`

"Link prefetching is when a webpage hints to the browser that certain pages are likely to be visited, so the browser downloads them immediately so they can be displayed immediately when the user requests it." ([Source](http://kb.mozillazine.org/Network.prefetch-next))

A browser shouldn't visit websites without you choosing to visit them.

## Updates
### Update addons automatically 
`extensions.update.enabled` = `true` 

This should be set to `true` by default.

### Check for and install Firefox updates 
`app.update.enabled` = `true`

This should be set to `true` by default.

## Miscellaneous
### Disable Firefox Tracking Protection
`privacy.trackingprotection.enabled` = `false`

`privacy.trackingprotection.pbmode.enabled` = `false`

Use uMatrix/uBlock instead.

### Disable the Firefox password manager 
`signon.rememberSignons` = `false`

Use [KeePass](https://keepass.info/) instead.

### Disable the Firefox autofill 
`browser.formfill.enable` = `false`

### Restrict cookies, cache, etc. to the domain level 
`privacy.firstparty.isolate` = `true`

First party isolation contains every website in its own data "silo". If a domain places a file on the user's computer, that file is contained to that domain. 

For example, if somenewswebsite.com and someothernewswebsite.com both place a somebadtracker.com cookie on a user's computer, that somebadtracker.com cookie can't look at any of the other somebadtracker.com cookies on the user's computer. This prevents the somebadtracker.com cookie from tracking your browsing across multiple sites.

### Disable third party cookies 
`network.cookie.cookieBehavior` = `1`

Third party cookies are cookies placed on a user's computer *not* by the visited domain. For example, somenewswebsite.com might place a somebadtracker.com cookie on a user's machine. If you disable third party cookies, this doesn't happen. 

### Disable Pocket
`browser.pocket.enabled` = `false` 

`extensions.pocket.enabled` = `false`

###  Disallow websites from viewing your microphone and camera status 
`media.navigator.enabled` = `false` 

### Disallow websites from viewing your computer's battery status
`dom.battery.enabled` = `false`

## Telemetry
All telemetry tweaks are commented out by default.

### Enable Mozilla telemetry, experiments, and Health Report
`toolkit.telemetry.enabled` = `true`

`toolkit.telemetry.unified` = `true`

`experiments.supported` = `true`

`experiments.enabled` = `true`

`datareporting.healthreport.uploadEnabled` = `true`

`datareporting.policy.dataSubmissionEnabled` = `true`

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

### Disable full screen video fade 
`full-screen-api.transition-duration.enter` = `0 0` 

`full-screen-api.transition-duration.leave` = `0 0` 

### Disable full screen mode warning
`full-screen-api.warning.timeout` = `0`
