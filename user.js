/* Firefox user.js
   Compiled by Anders Peavey

   Copyright (c) 2018 Anders Peavey
   Copyright (c) 2018 pyllyukko
   Copyright (c) 2018 ghacksuserjs
*/



/* 
	       TWEAKS
*/

// Stop websites from sending analytics and tracking data after you've left the website 
// More information: https://w3c.github.io/beacon/
user_pref("beacon.enabled", false);

// Disable autofill -- tracking scripts can capture login information. 
// More information: https://www.howtogeek.com/338209/you-should-turn-off-autofill-in-your-password-manager/
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);

// Disable URL bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Disable gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable microphone and camera status tracking
user_pref("media.navigator.enabled", false);

// Disable video statistics reporting
user_pref("media.video_stats.enabled", false);

// Disable third-party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Disable DNS prefetching 
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Stop Firefox from connecting to a link's domain when you hover over that link with your mouse 
user_pref("network.http.speculative-parallel-limit", "0");

// Disable prefetching of <link rel="next"> URLS
// More information: http://kb.mozillazine.org/Network.prefetch-next
user_pref("network.prefetch-next", false);

// Disable Firefox Tracking Protection -- use uMatrix/uBlock instead
user_pref("privacy.trackingprotection.enabled",	false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Disable password manager -- use KeePass instead
user_pref("signon.rememberSignons", false);



/* 
	       POTENTIAL BREAKAGE
*/

// Restricts cookies, cache, etc. to the domain level. May break third party logins
// More information: https://www.bleepingcomputer.com/news/software/another-tor-browser-feature-makes-it-into-firefox-first-party-isolation/
// user_pref("privacy.firstparty.isolate", true);

// Stop websites from reading or modifying clipboard contents. May break some websites with text editors
// user_pref("dom.event.clipboardevents.enabled", false);

// Disable WebRTC -- not necessary if you toggle "Prevent WebRTC from leaking local IP addresses" to on in uBlock Origin's settings. May break some web apps
// More information: https://www.privacytools.io/#webrtc
// user_pref("media.peerconnection.enabled", false);
// user_pref("media.peerconnection.use_document_iceservers", false);
// user_pref("media.peerconnection.video.enabled", false);
// user_pref("media.peerconnection.identity.enabled", false);
// user_pref("media.peerconnection.identity.timeout", 1);
// user_pref("media.peerconnection.turn.disable", true);
// user_pref("media.peerconnection.ice.tcp", false);
// user_pref("media.navigator.video.enabled", false);

// Disable WebGL. May break some web games
// More information: https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
// user_pref("webgl.disabled" = true);


/*
	    TELEMETRY
*/

// Stop Firefox from sending addon metadata to Mozilla to recommend you addons
// More information: https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
// user_pref("extensions.getAddons.cache.enabled", false);

// Disable the "Get Add-ons" panel on about:addons (uses Google Analytics -- no way to disable just Google Analytics)
// user_pref("extensions.getAddons.showPane", false);
// user_pref("extensions.webservice.discoverURL", "");

// Disable Mozilla Normandy and Shield Studies
// More information: https://github.com/mozilla/normandy
// user_pref("app.normandy.api_url", "");
// user_pref("app.normandy.enabled", false);
// user_pref("app.shield.optoutstudies.enabled", false);

// Disable crash reports. Crash reports may contain sensitive data, but Firefox ALWAYS ASKS if you want to send a crash report.
// user_pref("breakpad.reportURL", "");
// user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
// user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
// user_pref("browser.tabs.crashReporting.sendReport", false);

// Disable Firefox Experiments 
// More information: https://wiki.mozilla.org/Telemetry/Experiments
// user_pref("experiments.activeExperiment", false);
// user_pref("experiments.enabled", false);
// user_pref("experiments.manifest.uri", "");
// user_pref("experiments.supported", false);
// user_pref("network.allow-experiments", false);

// Disable Firefox telemetry
// user_pref("toolkit.telemetry.unified", false);
// user_pref("toolkit.telemetry.enabled", false); // see [NOTE] above FF58+
// user_pref("toolkit.telemetry.server", "data:,");
// user_pref("toolkit.telemetry.archive.enabled", false);
// user_pref("toolkit.telemetry.cachedClientID", "");
// user_pref("toolkit.telemetry.newProfilePing.enabled", false); // (FF55+)
// user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // (FF55+)
// user_pref("toolkit.telemetry.updatePing.enabled", false); // (FF56+)
// user_pref("toolkit.telemetry.bhrPing.enabled", false); // (FF57+) Background Hang Reporter
// user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // (FF57+)
// user_pref("toolkit.telemetry.hybridContent.enabled", false); // (FF59+)

// Disable Health Report
// More information: https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// user_pref("datareporting.healthreport.uploadEnabled", false);
// user_pref("datareporting.policy.dataSubmissionEnabled", false);



/*
       PERSONAL PREFERENCES
*/

// Disable full screen video fade -- setting to full screen happens immediately with no fade
// user_pref("full-screen-api.transition-duration.enter", "0 0");
// user_pref("full-screen-api.transition-duration.leave", "0 0");
// user_pref("full-screen-api.warning.timeout", 0);

// Make Firefox scrolling feel like Microsoft Edge
// user_pref("general.smoothScroll.currentVelocityWeighting", "0");
// user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.82");
// user_pref("mousewheel.min_line_scroll_amount", 40);

// Make Firefox scrolling feel like Google Chrome
// user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.82");