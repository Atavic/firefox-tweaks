# Firefox Tweaks

This README contains instructions on how to enhance the privacy and security of Firefox.

All addons listed are open source and include links to their source code as well as their page on https://addons.mozilla.org.

## Addons
### Decentraleyes
The simplest of these addons to use. Simply install it and let it do its thing. When a website requests a resource from a content delivery network (CDN), instead of letting the request go through, Decentraleyes serves the webpage a local version. Doing this increases loading speed as well as reduces the possibility of tracking.

[Source code](https://github.com/Synzvato/decentraleyes) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)

### uBlock Origin
The next simplest of these addons to use. Simply install it and use the default lists if you don't want to configure it, but consider enabling all filter lists under ads, privacy, malware domains, annoyances, and multipurpose. I would also recommend adding Fanboy's anti-third-party fonts list. At the bottom of the filter lists tab in uBlock Origin, check "Import...", then paste the URL below, then click "Apply changes" in the top right.

Fanboy's anti-third-party fonts list: https://fanboy.co.nz/fanboy-antifonts.txt

You can find more information about how web fonts could affect your privacy and security [here](https://collinmbarrett.com/block-web-fonts/).

Also make sure to check "Prevent WebRTC from leaking local IP addresses" in uBlock's settings, especially if you use a VPN. You can find more information about this toggle [here](https://github.com/gorhill/uBlock/wiki/Prevent-WebRTC-from-leaking-local-IP-address).

[Source code](https://github.com/gorhill/uBlock) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)

### Cookie Autodelete
This addon will automatically delete cookies that aren't on your specified whitelist. The idea with this addon is to add a whitelist entry for every website you log into, so that you aren't logged out of any websites. At the same time, you aren't tracked by third-party domains or websites which you don't log into, but still visit. Note that this addon only stops tracking via cookies -- there are a multitude other ways companies can track you, which the next addon, uMatrix, will (mostly) take care of.

If you would like to import my whitelist, download and import the `CAD_Expressions.json` file in this repository. For a list of websites you'll stay logged into with that list, check [here](https://github.com/krathalan/firefox-tweaks/blob/master/Extras/CAD_accounts.md).

[Source code](https://github.com/Cookie-AutoDelete/Cookie-AutoDelete) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/)


### CanvasBlocker
This addon will prevent sites from being able to fingerprint you using your canvas data. Fingerprinting is a tracking technique which does not rely on any stored data; instead, it calculates a "fingerprint" from data about your device, including but not limited to your browser, operating system, installed plugins, time zone, system fonts, and canvas data.

This addon, in its default configuration, will allow websites to access the <canvas> API, but then fake a random readout back to the website that is requesting your canvas data. While this is more likely to make your fingerprint more unique (a bad thing), since it's returning a random readout every time, your fingerprint "changes", making it extremely difficult to track your single unique fingerprint -- with this addon, you don't have a single fingerprint.
  
Note that installing this addon may break certain websites, notably Google Maps. To fix this, simply whitelist the site by clicking on the fingerprint icon in the URL bar, hovering over the domain, and clicking the green checkmark.

You can find more information about browser fingerprinting [here](https://en.wikipedia.org/wiki/Device_fingerprint).

[Source code](https://github.com/kkapsner/CanvasBlocker) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)

### uMatrix
uMatrix blocks almost everything (cookies, media, scripts, frames, and more) by default that isn't third-party. It's the most complicated addon here to use. If you're not interested in performing additional steps when you go to a website for the first time, don't install this addon.

uMatrix allows the first-party domain to do whatever it wants. If you visit twitch.tv with uMatrix installed, it doesn't block anything from twitch.tv. But it'll block everything from domains which twitch.tv tries to connect to, which, as of the time of this writing, include:

- gstatic.com
- ajax.googleapis.com
- jtvnw.net
- ttvnw.net
- twitchcdn.net
- twitchsvc.net
- amazon-adsystem.com
- doubleclick.net
- imasdk.googleapis.com
- krxd.net
- googleanalytics.com
- scorecardresearch.com

That's ridiculous! I only wanted to go to Twitch. What is krxd.net? What is jtvnw.net? scorecardresearch.com? I don't know what any of those domains do or who they're controlled by, and I'm letting them into my browser -- unless I have uMatrix installed.

Of course, uMatrix is likely to break most sites. It definitely breaks twitch.tv, but you can re-enable domains selectively, on a per-domain basis. For example, if I enabled twitchcdn.net on twitch.tv, and then I went to some other website that tried to connect to twitchcdn.net, it wouldn't be allowed because only twitch.tv is allowed to connect to that domain.

To enable a domain, click the upper portion of its box, turning it a solid green. To block a domain, click the bottom portion of its box, turning it a solid red.

To begin, your uMatrix panel should look something like this:
<p align="center"><img width="500"src="https://raw.githubusercontent.com/krathalan/firefox-tweaks/master/ProjectImages/umatrix1.png"></a>

Continuing the twitch.tv example, you only need the following domains enabled for twitch.tv to work:
- ajax.googleapis.com
- google.com
- gstatic.com
- ttvnw.net
- twitchcdn.net

Your uMatrix panel should now look like this (note that I've collapsed the domains to capture the entire panel in one screenshot):
<p align="center"><img width="500"src="https://raw.githubusercontent.com/krathalan/firefox-tweaks/master/ProjectImages/umatrix2.png"></a>

The Google domains (googleapis.com, google.com, and gstatic.com) are there because there's a Google reCAPTCHA when you login. Two of the domains (google.com and ajax.googleapis.com) are not in the screenshot because I'm already logged in. 

Taking uMatrix even further, you can enable only certain types of resources from a domain to load. By resourses, I mean cookies, CSS, images, etc. -- the list of things at the top of the uMatrix panel. So, for example, you could enable scripts from ajax.googleapis.com, but nothing else.

Additionally, you can manually edit your rules from the uMatrix options. To read about the syntax and how to add, remove, or edit your rules textually, refer to [this](https://github.com/gorhill/uMatrix/wiki/Rules-syntax) page in the uMatrix wiki.

Refining my twitch.tv rules, I have the following rules:

- twitch.tv ajax.googleapis.com script allow
- twitch.tv google.com frame allow
- twitch.tv google.com script allow
- twitch.tv google.com xhr allow
- twitch.tv gstatic.com script allow
- twitch.tv ttvnw.net script allow
- twitch.tv ttvnw.net xhr allow
- twitch.tv twitchcdn.net script allow

With those rules, your uMatrix panel should look like this (note that I've collapsed the domains to capture the entire panel in one screenshot):
<p align="center"><img width="500"src="https://raw.githubusercontent.com/krathalan/firefox-tweaks/master/ProjectImages/umatrix3.png"></a>

Again, ajax.googleapis.com, google.com, and gstatic.com are there because there's a reCAPTCHA when you login. Two of the domains (google.com and ajax.googleapis.com) are not in the screenshot because I'm already logged in. 

That's only 5 of the 12 domains that twitch.tv tries to connect to. So if twitch.tv works with only 5 of the 12 domains, why should I enable the others? I don't trust them because I don't even know what most of them are. 

So how did I know that those domains would un-break twitch.tv? Well, I didn't. It's a guessing game. I guessed that since twitchcdn.net and twitchsvc.net both have "twitch" in their names, that they were probably owned by twitch.tv and I could probably afford them the same level of trust, so I enabled them. I continued that process until twitch.tv worked.

Now whenever I visit twitch.tv again, it'll work and I don't have to mess with uMatrix anymore. As long as you save your changes with the padlock, you only have to configure a website once, unless the site changes how it works.

[The project's Github Wiki](https://github.com/gorhill/uMatrix/wiki) contains a lot of useful information. [This page](https://github.com/gorhill/uMatrix/wiki/The-popup-panel) in particular is very helpful, as it explains the uMatrix UI very well.

If you would like to use my uMatrix whitelist, download and import the `my-umatrix-rules.txt` file in this repository. For a list of websites and services that this file fixes, check [here](https://github.com/krathalan/firefox-tweaks/blob/master/Extras/uMatrix_rules_fixed_sites.md).

[Source code](https://github.com/gorhill/uMatrix) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/umatrix/)

## user.js
This file makes a bunch of tweaks to Firefox, like in about:config. The goal was to reduce ways that websites can track you, and only make small sacrifices to achieve that.

At the bottom of the file, I've included several tweaks which disable telemetry, but they're all commented out by default. If you wish to disable telemetry, uncomment the section. Note that some telemetry is enabled in a default Firefox installation.

If you would like a full list of the tweaks made along with an explanation for each one, that list can be found [here](https://github.com/krathalan/firefox-tweaks/blob/master/Extras/list_of_tweaks.md).

Place this file in your Firefox profile folder. [Don't know where to find that?](https://github.com/krathalan/firefox-tweaks#where-is-my-firefox-profile-folder-located)

## Contributing
If you would like to contribute, please read [this](https://github.com/krathalan/firefox-tweaks/blob/master/CONTRIBUTING.md).

## Frequently asked questions
### Where is my Firefox profile folder located?

You can find it in the following locations:

OS | Path
----- | -----
Windows | `C:\Users\(your username)\AppData\Roaming\Mozilla\Firefox\Profiles\(random string).default`
OS X | `Users/(your username)/Library/Application Support/Firefox/Profiles/(random string).default`
Linux | `home/(your username)/.mozilla/firefox/(random string).default`

### Why did you include X tweak but not Y tweak?
The goal of my user.js file was to increase privacy while at the same time not sacrificing much to achieve that. The only browser features that are taken away are Pocket, the password manager, and autofill. I think most people don't use Pocket, the password manager is a security concern, and autofill isn't needed. This is just what I think though, so of course you can choose to comment out certain lines in the user.js file.

The reason some other tweaks weren't included was because I felt they could possibly break some websites (privacy.resistFingerprinting) or they were subjective (e.g. disabling the activity stream on the new tab page).

### Why did you disable telemetry in user.js?
I didn't. The intention is that you will uncomment that section if you don't want to send telemetry.

## License
This repository is licensed under GPLv3. You may use it for commercial purposes, modify it, distribute it or any modified works, but I am not liable for any damage caused by it and it comes with no warranty. If you choose to distribute it or any modified versions, a copy of the GPLv3 and a copyright notice must be included in your distributed version, changes made must be documented, you must make the source code available, and modifications must be released under the same license.

The exception to this is user.js, which is provided under the MIT license with a copyright notice.

## Sources
This repository draws from other people's work, listed below:
- [Pyllyukko's user.js](https://github.com/pyllyukko/user.js)
- [PrivacyTools](https://www.privacytools.io/)
