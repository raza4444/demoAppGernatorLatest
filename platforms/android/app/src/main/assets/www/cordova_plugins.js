cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-customconfigparameters.CustomConfigParameters",
    "file": "plugins/cordova-plugin-customconfigparameters/www/customconfigparameters.js",
    "pluginId": "cordova-plugin-customconfigparameters",
    "clobbers": [
      "CustomConfigParameters"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-app-version.AppVersionPlugin",
    "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
    "pluginId": "cordova-plugin-app-version",
    "clobbers": [
      "cordova.getAppVersion"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "com.bunkerpalace.cordova.YoutubeVideoPlayer.YoutubeVideoPlayer",
    "file": "plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
    "pluginId": "com.bunkerpalace.cordova.YoutubeVideoPlayer",
    "clobbers": [
      "YoutubeVideoPlayer"
    ]
  },
  {
    "id": "com.santinowu.cordova.imagedownloader.imagedownloader",
    "file": "plugins/com.santinowu.cordova.imagedownloader/www/imagedownloader.js",
    "pluginId": "com.santinowu.cordova.imagedownloader",
    "clobbers": [
      "imagedownloader"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-android-play-services-gradle-release": "2.0.0",
  "cordova-plugin-extension": "1.5.4",
  "cordova-plugin-admobpro": "2.35.3",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-statusbar": "2.4.3-dev",
  "cordova-plugin-customconfigparameters": "3.0.0",
  "cordova-plugin-network-information": "2.0.1",
  "cordova-plugin-app-version": "0.1.9",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-screen-orientation": "3.0.1",
  "com.bunkerpalace.cordova.YoutubeVideoPlayer": "1.0.5",
  "com.santinowu.cordova.imagedownloader": "1.0.3"
};
// BOTTOM OF METADATA
});