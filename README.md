# PGB-Example-Core-Statusbar
PGB Example Core using the Cordova 'Statusbar' plugin using cli-6.0.0

This example app hides the statusbar after the button labeled 'Hide' is clicked.

> The status bar is the little horizontal bar at the top of an iDevice that displays network connectivity, time, battery and so on. By default a Sencha Touch application packaged with PhoneGap Build will just inherit the native behaviour of the iOS status bar.Apr 4, 2017
https://www.joshmorony.com/take-complete-control-of-the-ios-status-bar-with-phonegap-build/

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-statusbar

## Preferences

### config.xml

* StatusBarOverlaysWebView
* StatusBarBackgroundColor
* StatusBarStyle
* StatusBarDefaultScrollToTop

## Methods

* StatusBar.overlaysWebView (can not be used with PhoneGap Build^1)
* StatusBar.styleDefault
* StatusBar.styleLightContent
* StatusBar.styleBlackTranslucent
* StatusBar.styleBlackOpaque
* StatusBar.backgroundColorByName
* StatusBar.backgroundColorByHexString
* StatusBar.hide
* StatusBar.show

^1 https://www.joshmorony.com/take-complete-control-of-the-ios-status-bar-with-phonegap-build/

## Properties

* StatusBar.isVisible

## Events

* statusTap
