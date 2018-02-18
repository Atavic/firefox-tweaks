# Contributing to FirefoxTweaks
Want to contribute to the project? That's awesome! If you're going to contribute, please open an issue first for discussion before making a pull request. Include any relevant information depending on what kind of contribution you would like to make (see below).

## 1. Addons
You could contribute more addons along with instructions on how to use them, replace an already existing addon, or refine the already existing addon instructions. Open-source addons are preferred. All of your changes should take place in the `README.md` file, along with adding any additional files, like a whitelist. Please create a separate issue for each addon. For example, if you were adding an addon and replacing another addon, you would need to create two separate issues.

If you're adding an addon, please answer the following questions in your issue:
1. How does this addon improve privacy/security?
2. How does this addon provide different functionality than already included addons? 
3. If you're including extra files, what is the purpose of them?
4. What are the links to the source code and addon page on https://addons.mozilla.org/?

If you're replacing an addon, please explain why your addon is better.

If you're refining the already existing instructions, please explain your changes and why you think your instructions are better.

Also include any additional information you feel necessary.

## 2. uMatrix whitelist rules
You could contribute more rules or remove existing rules. All of your changes should take place in the `my-umatrix-rules.txt` and `Extras/uMatrix_rules_fixed_sites.md` files. Please create a separate issue for each primary domain. For example, if you had rules that fixed apple.com and microsoft.com, you would need to create two separate issues. Please try to refrain from allowing known tracking domains like amazon-adsystem.com or google-analytics.com. 

If you're fixing a completely new domain that's login-based (e.g. Netflix), please try to add a Cookie AutoDelete whitelist addition as well. Both of these changes may go into one issue.

Additionally, please provide an explanation for each domain you have enabled. For example, if you were adding the following rules to the whitelist: 
- battle.net akamaihd.net * allow
- battle.net akamaized.net * allow
- battle.net worldofwarcraft.com * allow

You would need to explain why akamaihd.net, akamaized.net, and worldofwarcraft.com are each needed to fix the site. Continuing the example, you could say "Images don't load if akamaihd.net isn't enabled on battle.net." The answer doesn't have to be technical at all.

If you're removing existing rules, please validate that the site still works with those domains blocked. Also state why the domains should be removed. If the reason is that they're simply not needed for the site to function, that is an acceptable reason.

Please document all of your changes in the `Extras/uMatrix_rules_fixed_sites.md` file by adding your fixed domain. Note that they're listed alphabetically.

## 3. Cookie AutoDelete whitelisted domains
You could contribute more domains to whitelist. All of your changes should take place in the `CAD_Expressions.json` and `Extras/CAD_accounts.md` files. Please create a separate issue for each domain you wish to add. Additionally, please provide general information about the domain (e.g. "It's a video game store with login, like Steam"). 

If you're adding a domain to this whitelist, please try to add uMatrix rules as well which un-break the site, if needed. Both of these changes may go into one issue.

Please document all of your changes in the `Extras/CAD_accounts.md` file by adding your domain. Note that they're listed alphabetically.
