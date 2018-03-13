/* Firefox user.js
   Compiled by Anders Peavey

   Copyright (c) 2018 pyllyukko
   
   Helpful source(s):
   https://github.com/pyllyukko/user.js
   https://www.privacytools.io/ */



/*
	  HTML5/APIs/DOM
				*/

// Disable gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);



/*
      AUTOMATIC CONNECTIONS
				*/

// Disable prefetching of <link rel="next"> URLS
// More information: http://kb.mozillazine.org/Network.prefetch-next
user_pref("network.prefetch-next", false);



/* 
	       MISC
				*/

// Disable Firefox Tracking Protection -- use uMatrix/uBlock instead
user_pref("privacy.trackingprotection.enabled",	false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Disable password manager -- use KeePass instead
user_pref("signon.rememberSignons", false);

// Disable autofill
// Tracking scripts can capture login information. 
// More information: https://www.howtogeek.com/338209/you-should-turn-off-autofill-in-your-password-manager/
user_pref("browser.formfill.enable", false);

// Disable third-party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable microphone and camera status tracking
user_pref("media.navigator.enabled", false);



/*
       POTENTIAL BREAKAGE
				*/

// Restricts cookies, cache, etc. to the domain level. Breaks CAD if not on Firefox 59+.
// More information: https://www.bleepingcomputer.com/news/software/another-tor-browser-feature-makes-it-into-firefox-first-party-isolation/
//user_pref("privacy.firstparty.isolate", true);



/*
	    TELEMETRY
				*/

// Disable Mozilla telemetry/experiments/health report
//user_pref("toolkit.telemetry.enabled", false);
//user_pref("toolkit.telemetry.unified", false);
//user_pref("experiments.supported", false);
//user_pref("experiments.enabled", false);
//user_pref("datareporting.healthreport.uploadEnabled", false);
//user_pref("datareporting.policy.dataSubmissionEnabled", false);



/*
       PERSONAL PREFERENCES
				*/

// Make Firefox scrolling feel like Microsoft Edge
//user_pref("general.smoothScroll.currentVelocityWeighting", 0);
//user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
//user_pref("general.smoothScroll.stopDecelerationWeighting", 0.82);
//user_pref("mousewheel.min_line_scroll_amount", 40);

// Make Firefox scrolling feel like Google Chrome
//user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
//user_pref("general.smoothScroll.stopDecelerationWeighting", 0.82);

// Disable full screen video fade -- setting to full screen happens immediately with no fade
//user_pref("full-screen-api.transition-duration.enter", 0 0);
//user_pref("full-screen-api.transition-duration.leave", 0 0);
//user_pref("full-screen-api.warning.timeout", 0);