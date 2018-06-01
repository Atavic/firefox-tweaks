# Firefox Tweaks
This README contains instructions on how to enhance the privacy and security of Firefox.

All addons listed are free and open source; are available and work correctly on Firefox for Android; collect no data whatsoever as per their privacy policies; and include links to their source code, their privacy policy, and their page on https://addons.mozilla.org.

## Addons
### 👁️ Decentraleyes 
The simplest of these addons to use. Simply install it and let it do its thing. When a website requests a resource from a content delivery network (CDN), instead of letting the request go through, Decentraleyes serves the webpage a local version. Doing this increases loading speed and stops the CDN from tracking you through those requests.

[Source code](https://github.com/Synzvato/decentraleyes) / [Privacy policy](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/privacy/) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)

### 🛡️ uBlock Origin
The next simplest of these addons to use. Simply install it and use the default lists if you don't want to configure it, but consider enabling all filter lists under ads, privacy, malware domains, annoyances, and multipurpose. 

It's worth mentioning that you may wish to add Fanboy's anti-third-party fonts list. Web fonts are typically served by a CDN, much like software libraries -- the difference is, you can use Decentraleyes to intercept those requests for software libraries and instead use Decentraleyes' local version, but there isn't a current analogue for web fonts. How much you trust CDNs versus how much you value a more aesthetically pleasing web is up to you. Note that by using Fanboy's anti-third-party fonts list, you may actually cause some websites to break -- instead of where a hamburger or arrow button might be, there might be unclickable text or nothing at all. You can find information about how web fonts could affect your privacy (and security) [here](https://collinmbarrett.com/block-web-fonts/).

To add the filter list, at the bottom of the filter lists tab in uBlock Origin, check "Import...", paste the URL below, then click "Apply changes" in the top right. 

Fanboy's anti-third-party fonts list: https://fanboy.co.nz/fanboy-antifonts.txt

If you want to use the list but still allow fonts from Google -- as many Google domains use fonts from Google -- you may import the `my-ublock-static-filters.txt` file in this repository into uBlock Origin's "My Filters" section, then hit apply.

Also make sure to check "Prevent WebRTC from leaking local IP addresses" in uBlock's settings, especially if you use a VPN. You can find more information about this toggle [here](https://github.com/gorhill/uBlock/wiki/Prevent-WebRTC-from-leaking-local-IP-address).

[Source code](https://github.com/gorhill/uBlock) / [Privacy policy](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/privacy/) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)

### 🍪 Cookie Autodelete
This addon will automatically delete cookies that aren't on your specified whitelist. The idea with this addon is to add a whitelist entry for every website you log into, so that you aren't logged out of any websites. At the same time, you aren't tracked by third-party domains or websites which you don't log into, but still visit. Note that this addon only stops tracking via cookies -- there are a multitude other ways companies can track you.

If you would like to import my whitelist, download and import the `CAD_Expressions.json` file in this repository. For a list of websites you'll stay logged into with that list, check [here](https://github.com/krathalan/firefox-tweaks/blob/master/Extras/CAD_accounts.md).

[Source code](https://github.com/Cookie-AutoDelete/Cookie-AutoDelete) / [Privacy policy](https://github.com/Cookie-AutoDelete/Cookie-AutoDelete/wiki/Privacy-Policy) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/)

### 🐾 Privacy Possum
This addon will prevent sites from tracking you in a multitude of ways:

#### ETag tracking
HTTP ETags are numbers in an HTTP header field your browser uses to determine if a cached resource is out of date. When you visit a webpage with an image, for example, the server sends an ETag with it. When you visit that webpage again, your browser sends the ETag number back to the server in a request to see if the image has changed. If the ETag on the server is the same, the image doesn't need to be redownloaded; if the ETag on the server is different, your browser downloads the new version of the image.

When it comes to how ETags can be used to track you: "ETags are a unique number that can identify a browser, and they are automatically sent to a server when requesting a specific resource, which can be a tiny image. The ETag can be keyed to a database entry containing previous browsing habits in the same way as the information contained in a cookie" ([Source](https://www.futurehosting.com/blog/etags-allow-tracking-without-cookies/)).

#### Referer header tracking 
The HTTP referer header field "identifies the address of the webpage that linked to the resource being requested. By checking the referrer, the new webpage can see where the request originated" ([Wikipedia source](https://en.wikipedia.org/wiki/HTTP_referer)). Essentially, the new webpage can partially track your movements on the web.

#### Browser fingerprinting
Browser fingerprinting is a way of identifying your browser and tracking you without storing any data on your computer. Fingerprinting is a tracking technique which does not rely on any stored data; instead, it calculates a "fingerprint" from aggregated data about your device, including but not limited to your browser, operating system, time zone, system fonts, and HTML canvas API data. You can read more about canvas fingerprinting specifically [here](https://en.wikipedia.org/wiki/Canvas_fingerprinting).

Instead of just watching for when a script accesses the canvas API, Privacy Possum will only "intervene" when the script tries to access "information across many esoteric browser API's". When the addon detects fingerprinting, it blocks the script. "However many sites load first party fingerprinting code alongside other necessary code, like on reddit.com, so we can't simply block the script, or it will break the page. Instead when we see first party fingerprinting, we inject random data to spoil the fingerprint" (Privacy Possum Github page ([link](https://github.com/cowlicks/privacypossum))).

You can find more information about general browser fingerprinting [here](https://en.wikipedia.org/wiki/Device_fingerprint).

#### Third-party cookies
Privacy Possum blocks all third party cookies. However, you should already have this set in your browser's settings.

[Source code](https://github.com/cowlicks/privacypossum) / [Privacy policy](https://addons.mozilla.org/en-US/firefox/addon/privacy-possum/privacy/) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/privacy-possum/)

### ⛔ uMatrix
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

[Source code](https://github.com/gorhill/uMatrix) / [Privacy policy](https://addons.mozilla.org/en-US/firefox/addon/umatrix/privacy/) / [Install here](https://addons.mozilla.org/en-US/firefox/addon/umatrix/)

### 🔮 Other addons
You can find other addons that may increase your privacy and/or security [here](https://github.com/krathalan/firefox-tweaks/blob/master/Extras/other_addons.md). The above addons should be sufficient for most users, but depending on your browsing habits, you may benefit from one or more of these addons.

## user.js
This file makes a bunch of tweaks to Firefox, like in about:config. The intention behind these tweaks is to reduce ways that websites can track you, and only make small sacrifices to achieve that.

I've included several sections that are commented out. You should go through the file and decide for yourself which tweaks you want to enable. Each tweak has a short description, and may have a link containing more information.

Place this file in your Firefox profile folder. [Don't know where to find that?](https://github.com/krathalan/firefox-tweaks#where-is-my-firefox-profile-folder-located)

## Further steps
### Configure your privacy settings
Configuring your privacy settings on all services and devices you use is just as important as anything else on this page. If you would like direct links to privacy controls for popular services, as well as guides for privacy settings on devices, you can find that [here](https://github.com/krathalan/firefox-tweaks/blob/master/Extras/privacy_settings.md).

### Use KeePass
You should use a password manager to create long, unique, strong passwords for every account you have. Yes, every account. You can read about "why even your bullshit accounts deserve strong passwords" [here](https://lifehacker.com/why-even-your-bullshit-accounts-deserve-strong-password-1826307919).

KeePass, KeePassXC, and KeePass DX are free, open source password managers that are all compatible with each other. KeePass is the base implementation of itself on Windows. KeePassXC is a cross-platform community fork of [KeePassX](https://www.keepassx.org/), which itself is an implementation of KeePass. KeePassXC is available for Windows, Mac, and GNU/Linux. KeePass DX is an implementation of KeePass on Android. There are also several other KeePass apps you may find on Android, but this is the one I use and consider to be the best.

Version | Source code | Install here | Chocolatey/F-Droid
--- | --- | --- | ---
KeePass for Windows | [Source code](https://sourceforge.net/projects/keepass/) | [Install here](https://keepass.info/) | [Install with Chocolatey](https://chocolatey.org/packages/keepass)
KeePassXC for Windows and Mac | [Source code](https://github.com/keepassxreboot/keepassxc) | [Install here](https://keepassxc.org/) | [Install with Chocolatey (Windows only)](https://chocolatey.org/packages/keepassxc)
KeePass DX for Android | [Source code](https://github.com/Kunzisoft/KeePassDX) | [Install on Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free) | [Install on F-Droid](https://f-droid.org/en/packages/com.kunzisoft.keepass.libre/)

For Linux, you should install KeePassXC from your distribution's package manager.

### Use two-factor authentication
Setting up two-factor authentication (2FA) for every account you have that supports it is an important component of protecting your security, as it greatly reduces the chance of unauthorized logins. Every service has a different way to set up 2FA, but most services should use a QR code that you can scan with an authenticator app on your phone.

FreeOTP is a free, open source 2FA app for Android and iPhone, developed by [Red Hat](https://www.redhat.com/). The interface is slightly outdated though, so you may prefer to install a different authenticator.

andOTP is another free, open source 2FA app, but it's only available for Android. Another drawback is that there are two types of one-time passwords: time-based (TOTP) and HMAC-based (HOTP). Currently, andOTP only supports TOTP, but HOTP support is in beta, so it should be in the app soon. However, the app has several advantages over FreeOTP: encrypted storage (Android KeyStore or PIN/Password), backup options, and a better UI.

You can find an unofficial list of websites and services, and whether or not they support 2FA, [here](https://twofactorauth.org/).

Version | Source code | Android | iOS
--- | --- | --- | ---
FreeOTP | [Source code](https://github.com/freeotp) | [Install on Google Play](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp) / [Install on F-Droid](https://f-droid.org/packages/org.fedorahosted.freeotp/) | [Install on iTunes](https://itunes.apple.com/us/app/freeotp-authenticator/id872559395)
andOTP | [Source code](https://github.com/andOTP/andOTP) | [Install on Google Play](https://play.google.com/store/apps/details?id=org.shadowice.flocke.andotp) / [Install on F-Droid](https://f-droid.org/packages/org.shadowice.flocke.andotp/) | Not available
Microsoft Authenticator | Not available | [Install on Google Play](https://play.google.com/store/apps/details?id=com.azure.authenticator) | [Install on iTunes](https://itunes.apple.com/us/app/microsoft-authenticator/id983156458)
Google Authenticator | Not available | [Install on Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) | [Install on iTunes](https://itunes.apple.com/us/app/google-authenticator/id388497605)

### Get a VPN
If you've followed all the steps on this page, there's still one glaring privacy issue: your ISP has a log of every website you've visited. Even if you don't use their DNS server, they can still see which IP addresses you are connecting to, and can store that information indefinitely and use it any way they want to. 

If this makes you uncomfortable (which it should), then you should get a VPN (virtual private network). Instead of seeing you connect to websites like youtube.com, all your internet traffic will be funneled through the VPN "tunnel", and all your ISP will see is you connecting to the VPN server. However, your VPN provider can now see what websites you are connecting to. That's why it's very important to choose a VPN provider that doesn't log anything. 

A really good resource for information about VPN providers, as well as which one to choose, can be found [here](https://thatoneprivacysite.net/). I personally use NordVPN.

#### Using OpenVPN
If you decide to use a VPN, you should use OpenVPN. OpenVPN will connect you to the VPN servers just like the provided app would, but it's a free, open source project, whereas your VPN providers applications may be proprietary. Using OpenVPN usually requires a bit more setup than using the VPN's provided app, but it's worth it for the extra privacy and security. A good VPN provider will provide instructions on how to set up OpenVPN with their service. You can find out how to use OpenVPN with NordVPN [here](https://nordvpn.com/tutorials/windows-10/openvpn/).

OpenVPN doesn't have an official macOS client, but Tunnelblick is a free, open source version of OpenVPN for macOS. 

OpenVPN is slightly more complicated on iOS. The entire app isn't completely open source, but the library which implements the OpenVPN protocol used by the app is. 

As a final note, you may need to edit the VPN's `.ovpn` files to block DNS requests that happen outside the VPN tunnel. To do so, open the `.ovpn` file in a text editor like Visual Studio Code or even Notepad, and enter the following line at the end of the file:

`block-outside-dns`

Version | Source code | Install here | Chocolatey/F-Droid
--- | --- | --- | ---
OpenVPN for Windows | [Source code](https://github.com/OpenVPN/openvpn-gui) | [Install here](https://openvpn.net/index.php/download/community-downloads.html) | [Install with Chocolatey](https://chocolatey.org/packages/openvpn)
Tunnelblick for macOS | [Source code](https://github.com/Tunnelblick/Tunnelblick) | [Install here](https://tunnelblick.net/index.html)
OpenVPN for Android | [Source code](https://github.com/schwabe/ics-openvpn) | [Install on Google Play](https://play.google.com/store/apps/details?id=de.blinkt.openvpn&hl=en) | [Install on F-Droid](https://f-droid.org/packages/de.blinkt.openvpn/)
OpenVPN for iOS | [Partial source code](https://staging.openvpn.net/openvpn3/) | [Install here](https://itunes.apple.com/us/app/openvpn-connect/id590379981)

For Linux, you should install OpenVPN from your package manager.

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

You can also find it by opening the Firefox hamburger menu, clicking "Help", then "Troubleshooting Information". Under "Profile Folder", click "Open Folder".

### Why did you include X tweak but not Y tweak?
The goal of my user.js file was to increase privacy while at the same time not sacrificing much to achieve that. The only browser features that are taken away are Pocket, the password manager, and autofill. I think most people don't use Pocket, the password manager is a security concern, and autofill isn't needed. This is just what I think though, so of course you can choose to comment out certain lines in the user.js file.

The reason some other tweaks weren't included was because I felt they could possibly break some websites (privacy.resistFingerprinting) or they were subjective (e.g. disabling the activity stream on the new tab page).

### Why did you disable telemetry in user.js?
I didn't. The intention is that you will uncomment that section if you don't want to send telemetry.

## License
This repository is licensed under GPLv3. You may use it for commercial purposes, modify it, distribute it or any modified works, but I am not liable for any damage caused by it and it comes with no warranty. If you choose to distribute it or any modified versions, a copy of the GPLv3 and a copyright notice must be included in your distributed version, changes made must be documented, you must make the source code available, and modifications must be released under the same license.

The exception to this is user.js, which is provided under the MIT license with two copyright notices.

## Sources
This repository draws from other people's work, listed below:
- [ghacksuserjs' user.js](https://github.com/ghacksuserjs/ghacks-user.js)
- [Pyllyukko's user.js](https://github.com/pyllyukko/user.js)
- [PrivacyTools](https://www.privacytools.io/)
