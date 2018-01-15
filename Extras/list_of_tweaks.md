## List of tweaks
This is a list of tweaks that are changed when the `user.js` file from this repository is placed in the Firefox profile folder.

### Disable web notifications 
`dom.webnotifications.enabled` = `false`

Can't be used to track you, but is annoying.

### Disallow websites from accessing your location
`geo.enabled` = `false`

### Disallow websites from enumerating your connected USB devices
`dom.gamepad.enabled` = `false`

### Disable prefetching of certain URLS 
`network.prefetch-next` = `false`

More information can be found [here](http://kb.mozillazine.org/Network.prefetch-next).

### Update addons automatically 
`extensions.update.enabled` = `true` 

This should be set to `true` by default.

### Check for and install Firefox updates 
`app.update.enabled` = `true`

This should be set to `true` by default.

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

More information can be found [here](https://www.bleepingcomputer.com/news/software/another-tor-browser-feature-makes-it-into-firefox-first-party-isolation/).

### Disable third party cookies 
`network.cookie.cookieBehavior` = `1`

### Disable Pocket
`browser.pocket.enabled` = `false` 

`extensions.pocket.enabled` = `false`

###  Disallow websites from viewing your microphone and camera status 
`media.navigator.enabled` = `false` 

### Disallow websites from viewing your computer's battery status
`dom.battery.enabled` = `false`

### Make scrolling feel better 
`general.smoothScroll.currentVelocityWeighting` = `0`

`general.smoothScroll.mouseWheel.durationMaxMS` = `250`

`general.smoothScroll.stopDecelerationWeighting` = `0.82`

`mousewheel.min_line_scroll_amount` = `40`

These tweaks are commented out by default.

### Decrease full screen video fade 
`full-screen-api.transition-duration.enter` = `50 0` 

`full-screen-api.transition-duration.leave` = `0 50` 

### Enable Mozilla telemetry, experiments, and Health Report
`toolkit.telemetry.enabled` = `true`

`toolkit.telemetry.unified` = `true`

`experiments.supported` = `true`

`experiments.enabled` = `true`

`datareporting.healthreport.uploadEnabled` = `true`

`datareporting.policy.dataSubmissionEnabled` = `true`

These tweaks are commented out by default.

### Disable Mozilla telemetry, experiments, and Health Report
`toolkit.telemetry.enabled` = `false`

`toolkit.telemetry.unified` = `false`

`experiments.supported` = `false`

`experiments.enabled` = `false`

`datareporting.healthreport.uploadEnabled` = `false`

`datareporting.policy.dataSubmissionEnabled` = `false`

These tweaks are commented out by default.

