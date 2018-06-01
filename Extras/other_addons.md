# Other addons
The addons in the README should be sufficient for most users, but depending on your browsing habits, you may benefit from one or more of these addons. As with all addons recommended in this repository, these addons are free and open source; are available and work correctly on Firefox for Android; collect no data whatsoever as per their privacy policies; and include links to their source code, their privacy policy, and their page on https://addons.mozilla.org.

### 🛃 HTTPS Everywhere
This addon makes connections secure when it can. If a site supports `https` but defaults to `http`, this addon will force it to connect using `https`.

Some websites still don't abide by these rules though, so for added security, check "Block all unencrypted requests" in HTTPS Everywhere's settings. Note that if you check that, you will NOT be able to access websites which are only served over `http`.

As more and more websites move to `https`, this addon has become less necessary over time.

[Source code](https://github.com/EFForg/https-everywhere) / [Privacy policy](https://www.eff.org/code/privacy/policy) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/)

### 🎨 CanvasBlocker
This addon provides stronger fingerprint protection than just Privacy Possum. Whereas Privacy Possum waits for a script to touch multiple browser APIs before registering it as a fingerprinting script, any script that tries to get canvas API data from your browser will trigger CanvasBlocker's protection. Fingerprinting is a tracking technique which does not rely on any stored data; instead, it calculates a "fingerprint" from data about your device, including but not limited to your browser, operating system, installed plugins, time zone, system fonts, and canvas data.

This addon, in its default configuration, will allow websites to access the <canvas> API, but then fake a random readout back to the website that is requesting your canvas data. While this is more likely to make your fingerprint more unique (a bad thing), since it's returning a random readout every time, your fingerprint "changes", making it extremely difficult to track your single unique fingerprint -- with this addon, you don't have a single fingerprint (a good thing).
  
Note that installing this addon may break certain websites, notably Google Maps. To fix this, simply whitelist the site by clicking on the fingerprint icon in the URL bar, hovering over the domain, and clicking the green checkmark.

You can find more information about browser fingerprinting [here](https://en.wikipedia.org/wiki/Device_fingerprint).

[Source code](https://github.com/kkapsner/CanvasBlocker) / [Privacy policy](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/privacy/) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)

### 🔗 ClearURLs
This addon removes tracking parameters in URLs like `utm_source`. 

It changes links from this:
`https://www.phoronix.com/scan.php?page=news_item&px=Ioquake3-Auto-Updater&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Phoronix+(Phoronix)`

To this: 
`https://www.phoronix.com/scan.php?page=news_item&px=Ioquake3-Auto-Updater`

The addon also claims to redirect Google search and Reddit links, but there isn't a clear way to verify this. Finally, the addon blocks requests "from advertising services like `doubleclick.net`" ([Source](https://github.com/KevinRoebert/ClearUrls#clearurls)), but uBlock Origin and uMatrix handle this already.

This addon isn't really necessary unless you find yourself clicking on a lot of links with tracking parameters.

#### Privacy policy notice
The addon doesn't have an "official" privacy policy, but on their AMO page, they state, "This add-on protects your privacy and we also respect it. We do not and will never collect any of your usage data."

[Source code](https://github.com/KevinRoebert/ClearUrls) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/clearurls/)
