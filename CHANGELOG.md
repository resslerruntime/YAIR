# Changelog

## 0.3.0
* add ability to export individual conversations (plaintext only exports with markdown)
* Buttons should all now have tooltips on hover
* Removed unneded mod-toolbox compatibility that was throwing errors

## 0.2.9.2
* Fix bug with accessing brand new PM chain from notifier
* Update to jquery 3.4.1 

## 0.2.9.1
* prevent correspondent being undefined from causing messages to fail to load.

## 0.2.9
* Firefox compatibility on a unified codebase, but for real this time.

## 0.2.8.2
* Clicking on the name of a subreddit you've sent a message to now correctly directs you to the subreddit.

## 0.2.8.1
* Revert to using Relative URL's, as using the absolute URL's were causing intermittent problems

## 0.2.8
* Make reindex work if in a message
* Almost complete cross-compatibility with Firefox version. Only thing that needs to be switched is chrome-extension for moz-extension
* Nightmode tweaks (address #17 and other small tweaks)
* Notes: Notifier currently doesn't work in Firefox unless content protection is totally turned off. This is, as far as I can tell, a limitation of the browser and not anything I can work around.

## 0.2.7
* added reindex button in admin panel

## 0.2.6
* Bump manifest version for release of first Firefox Version

## 0.2.3-0.2.5
* Series of quick formatting fixes

## 0.2.2
* Fix for messages from subreddits (Starting with #) showing as from "null" in notifications, and not showing in inbox

## 0.2.1
* What should be hopefully the last I see of bug #9.

## 0.2.0
* Removed superscript from fancy editor, as it was causing issues.
* Removed accidentally left-in debugging code

## 0.1.13
* Bugfix for 0.1.12; color wasn't changing right with newReddit icon.
* less hacky handling of superscript in visual editor

## 0.1.12
* Finished notifications in reddit on New Reddit to feature parity of old reddit (note: colors don't reset until refresh if switching to/from dark mode)
* Fix for #10

## 0.1.11
* Add (non-notifying) yair icon in New Reddit

## Older Versions
You'll have to look at the [github commit log](https://github.com/adhesivecheese/YAIR/commits/master), as I wasn't previously keeping a changelog.
