# Contributing to FirefoxTweaks
Want to contribute to the project? That's awesome! If you're going to contribute, please open an issue first for discussion before making a pull request. Please provide reasons why you think your change is good. Finally, you may need to follow some rules below for your contribution to be accepted.

## 1. Addons
All addons are free and open source, using licenses like GPLv2, GPLv3, MIT, or the Mozilla Public License. All addons are also available on Firefox for Android. Each section includes the addon's license and links to the addon's source code and install page on `addons.mozilla.org`. If you want to include additional files like a whitelist, put them in the root of the project.

## 2. uMatrix whitelist rules
Please create a separate issue for each primary domain. For example, if you had rules that fixed apple.com and microsoft.com, you would need to create two separate issues.

If you're fixing a completely new domain that's login-based (e.g. Netflix), please try to add a Cookie AutoDelete whitelist addition as well. Both of these changes may go into one issue.

If you're removing existing rules, please validate that the site still works with those domains blocked.

Please document all of your changes in the `Extras/uMatrix_rules_fixed_sites.md` file by adding your fixed domain. Note that they're listed alphabetically.

## 3. Cookie AutoDelete whitelisted domains
All of your changes should take place in the `CAD_Expressions.json` and `Extras/CAD_accounts.md` files. Please create a separate issue for each domain you wish to add. Additionally, please provide general information about the domain (e.g. "It's a video game store with login, like Steam"). 

If you're adding a domain to this whitelist, please try to add uMatrix rules as well which un-break the site, if needed. Both of these changes may go into one issue.

Please document all of your changes in the `Extras/CAD_accounts.md` file by adding your domain. Note that they're listed alphabetically.

## 4. user.js tweaks
Try to avoid tweaks which cause problems (like `privacy.resistFingerprinting`). 

Please document all of your changes in the `Extras/list_of_tweaks.md` file by adding your tweak, as well as a description and additional information if the title of the tweak (like "Disable the Firefox autofill") isn't straightforward.