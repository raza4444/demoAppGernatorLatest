/*var admobid = {};
  if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
      banner: 'ca-app-pub-2607313420010336/7643001475',
      interstitial: 'ca-app-pub-2607313420010336/2217508304',
    };
  } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
      banner: 'ca-app-pub-2607313420010336/7643001475',
      interstitial: 'ca-app-pub-2607313420010336/2217508304',
        };
  } else {
    admobid = { // for Windows Phone
      banner: 'ca-app-pub-2607313420010336/7643001475',
      interstitial: 'ca-app-pub-2607313420010336/2217508304',
    };
  }*/  
/*function onDeviceReady()
{
  initAd(); 
      initBannerAndinterstitial();
      showBannerAtPosition();
  }*/


  /*function allVideoPlayer(videoid , platform)
{

  alert('enter video player');
      //$("#videoModal").animate({width:'toggle'},300);
      
      if(platform == 'youtube')
      {
        YoutubeVideoPlayer.openVideo(videoid, function(result) { console.log('YoutubeVideoPlayer result = ' + result); });
          
      }
    }*/

  function initBannerAndinterstitial()
  {
    alert('run');
/*    AdMob.createBanner({
      adId: admobid.banner,
      position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: ' '
  });  
    AdMob.prepareInterstitial({
      adId: admobid.interstitial,
    isTesting: false, // TODO: remove this line when release
    autoShow: false
  });  */
  }
  function showBannerAtPosition(){
alert('run');
/*    if(AdMob) AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
    prepareInterstitialAd();*/
  }
  
  function showIndustrialAd()
  {
    alert('run');
    /*localStorage.setItem("interAdshown",'1');
    AdMob.showInterstitial();
    prepareInterstitialAd();*/
  }

  function  prepareInterstitialAd()
  {
    alert('run');
    /*AdMob.prepareInterstitial({
      adId: admobid.interstitial,
      autoShow: false,
    isTesting: false // TODO: remove this line when release
  });*/
  }
  function initAdmobWithoutBanner() {
console.log('run');
//    AdMob.hideBanner();
  }

  /*if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    onDeviceReady();
  }*/