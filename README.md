# FirefoxTweaks

This Github repository contains all the files I use to customize Firefox. This README will be updated with instructions on how to use each file and addon.

## userChrome.css
This file makes Firefox pleasantly black and white, like this:

![alt text](Screenshots/userChrome.png "userChrome.css")

It also only shows the close tab "X" on your currently selected tab, and when you mouse over a tab.

Place this file in your Firefox profile folder. [Don't know where to find that?](https://github.com/krathalan/FirefoxTweaks#where-is-my-firefox-profile-folder-located)

## user.js
This file makes a bunch of tweaks to Firefox, like in about:config. The goal was to reduce ways that websites can track you, but still not sacrifice (almost) anything to achieve that. Note that at the bottom of the file, I've included several tweaks which enable telemetry, but they're commented out by default. If you wish to enable telemetry, uncomment the lines. 

Place this file in your Firefox profile folder. [Don't know where to find that?](https://github.com/krathalan/FirefoxTweaks#where-is-my-firefox-profile-folder-located)

#### Disable web notifications 
`dom.webnotifications.enabled` = `false`

Can't be used to track you, but is annoying.

#### Disallow websites from accessing your location
`geo.enabled` = `false`

#### Disallow websites from enumerating your connected USB devices
`dom.gamepad.enabled` = `false`

#### Disable prefetching of certain URLS 
`network.prefetch-next` = `false`

More information can be found [here](http://kb.mozillazine.org/Network.prefetch-next).

#### Update addons automatically 
`extensions.update.enabled` = `true` 

This should be set to `true` by default.

#### Check for and install Firefox updates 
`app.update.enabled` = `true`

This should be set to `true` by default.

#### Disable Firefox Tracking Protection
`privacy.trackingprotection.enabled` = `false`

`privacy.trackingprotection.pbmode.enabled` = `false`

Use uMatrix/uBlock instead.

#### Disable the Firefox password manager 
`signon.rememberSignons` = `false`

Use [KeePass](https://keepass.info/) instead.

#### Disable the Firefox autofill 
`browser.formfill.enable` = `false`

#### Restrict cookies, cache, etc. to the domain level 
`privacy.firstparty.isolate` = `true`

More information can be found [here](https://www.bleepingcomputer.com/news/software/another-tor-browser-feature-makes-it-into-firefox-first-party-isolation/).

#### Disable third party cookies 
`network.cookie.cookieBehavior` = `1`

#### Disable Pocket
`browser.pocket.enabled` = `false` 

`extensions.pocket.enabled` = `false`

####  Disallow websites from viewing your microphone and camera status 
`media.navigator.enabled` = `false` 

#### Disallow websites from viewing your computer's battery status
`dom.battery.enabled` = `false`

#### Make scrolling feel better 
`general.smoothScroll.currentVelocityWeighting` = `0`

`general.smoothScroll.mouseWheel.durationMaxMS` = `250`

`general.smoothScroll.stopDecelerationWeighting` = `0.82`

`mousewheel.min_line_scroll_amount` = `40`

#### Decrease full screen video fade 
`full-screen-api.transition-duration.enter` = `50 0` 

`full-screen-api.transition-duration.leave` = `0 50` 


## Addons

## Frequently asked questions
### Where is my Firefox profile folder located?

You can find it in the following locations:

OS | Path
----- | -----
Windows | `C:\Users\(your username)\AppData\Roaming\Mozilla\Firefox\Profiles\(random string).default\`
OS X | `Users/(your username)/Library/Application Support/Firefox/Profiles/(random string).default`
Linux | `home/(your username)/.mozilla/firefox/(random string).default`
