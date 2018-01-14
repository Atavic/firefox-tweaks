/* Firefox user.js
   Compiled by Anders Peavey

   Helpful sources:
   https://github.com/pyllyukko/user.js
   https://www.privacytools.io/ */



/*
	  HTML5/APIs/DOM
				*/

// Disable web notifications
user_pref("dom.webnotifications.enabled", false);

// Disable geolocation
user_pref("geo.enabled", false);

// Disable gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);



/*
      AUTOMATIC CONNECTIONS
				*/

// Disable prefetching of <link rel="next"> URLS
// More information: http://kb.mozillazine.org/Network.prefetch-next
user_pref("network.prefetch-next", false);



/*
	     UPDATES
				*/

// Update addons automatically
// Should be set to "true" by default
user_pref("extensions.update.enabled", true);

// Enforce checking for Firefox updates
// Should be set to "true" by default
user_pref("app.update.enabled", true);



/* 
      INCREASE PRIVACY (MISC)
				*/

// Disable Firefox Tracking Protection -- use uMatrix/uBlock instead
user_pref("privacy.trackingprotection.enabled",	false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Disable password manager -- use KeePass instead
user_pref("signon.rememberSignons", false);

// Disable autofill
user_pref("browser.formfill.enable", false);

// Restricts cookies, cache, etc. to the domain level
// More information: https://www.bleepingcomputer.com/news/software/another-tor-browser-feature-makes-it-into-firefox-first-party-isolation/
user_pref("privacy.firstparty.isolate", true);

// Disable third-party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Disable Pocket
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);

// Disable microphone and camera status tracking
user_pref("media.navigator.enabled", false);

// Disable battery status tracking
user_pref("dom.battery.enabled", false);



/*
       PERSONAL PREFERENCES
				*/

// Make Firefox scrolling feel like Microsoft Edge
user_pref("general.smoothScroll.currentVelocityWeighting", 0);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("general.smoothScroll.stopDecelerationWeighting", 0.82);
user_pref("mousewheel.min_line_scroll_amount", 40);

// Decrease full screen video fade
user_pref("full-screen-api.transition-duration.enter", 50 0);
user_pref("full-screen-api.transition-duration.leave", 0 50);

// Enable Mozilla telemetry/experiments
//user_pref("toolkit.telemetry.enabled", true);
//user_pref("toolkit.telemetry.unified", true);
//user_pref("experiments.supported", true);
//user_pref("experiments.enabled", true);

// Enable collection/sending of Firefox Health Report
//user_pref("datareporting.healthreport.uploadEnabled", true);
//user_pref("datareporting.policy.dataSubmissionEnabled", true);