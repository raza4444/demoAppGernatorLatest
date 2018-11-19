function sliderSettingWithData(pkgname) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://api.appgenny.com/api/vi/GetAppSlider/PakegName?pakgeName="+pkgname,
    "method": "GET",
    "headers": {
      "Cache-Control": "no-cache",
      "Postman-Token": "7e06f881-5916-48c3-afd5-579215d9afd5"
    }
  }
  var base_url = "http://appgenny.com/";
  $.ajax(settings).done(function (response) {

if(response == '' || response == null || response == 'undifined')
{
$('#myCarousel').css('display' , 'none');
}
else
{
  $('#myCarousel').css('display' , 'block');
}
    //console.log(response);
   var $sliderHtml = '';
   var activeClass = '';
   $.each( response, function( key, myresponse ) {
    
    var response = JSON.parse(localStorage.getItem("item"));
      var checkTitle = response[5];
    
    if(myresponse.Active == true && myresponse.Url != '')
    {

      if(key == 0){
          activeClass = 'active';
        }else{
          activeClass = '';
        }

      //if link is weburl
      if( myresponse.WebUrl != null )
      {
        var title = myresponse.Title;
        var url = myresponse.Url.split('~');
        var image_url = base_url+url[1];
        $sliderHtml += '<div class="item raza ' +activeClass+'">';
       $sliderHtml += '<a href="'+myresponse.WebUrl+'">';
        $sliderHtml += '<img src="'+image_url+'" alt="'+title+'" style="width:100%; height: 225px;">;'
        $sliderHtml += '</a>';
       if(checkTitle == 'withoutTitle' || myresponse.Title === null)
          {
            $sliderHtml += '';
          }
          else
          { 
            $sliderHtml += '<div class="caption">';
            $sliderHtml += '<div class="container">';
            $sliderHtml += '<a data-toggle="modal" id="'+myresponse.Id+'" onclick="openVideoModel(this)"><h2>'+title+'</h2></a><br><br><br>';
            $sliderHtml += '</div>';
            $sliderHtml += '</div>';
          }
      $sliderHtml += '</div>';
 
        
        
      }
      // end if link is weburl
      //if slider link is redierect app
      if(myresponse.RedirectApp != '' && myresponse.WebUrl != ''  || myresponse.WebUrl != null)
      {
        var title = myresponse.Title;
        var url = myresponse.Url.split('~');
        var image_url = base_url+url[1];
        $sliderHtml += '<div class="item ' +activeClass+'">';
        $sliderHtml += '<a href="https://play.google.com/store/apps/details?id='+myresponse.RedirectApp+'" >';
        $sliderHtml += '<img src="'+image_url+'" alt="'+title+'" style="width:100%; height: 225px;">;'
        $sliderHtml += '</a>';
       if(checkTitle == 'withoutTitle' || myresponse.Title === null)
          {
            $sliderHtml += '';
          }
          else
          { 
            $sliderHtml += '<div class="caption">';
            $sliderHtml += '<div class="container">';
            $sliderHtml += '<a data-toggle="modal" id="'+myresponse.Id+'" onclick="openVideoModel(this)"><h2>'+title+'</h2></a><br><br><br>';
            $sliderHtml += '</div>';
            $sliderHtml += '</div>';
          }
      $sliderHtml += '</div>';
       
}
      //end if link is redierect app
//if slider is video 
if(myresponse.WebUrl == '' && myresponse.RedirectApp == '')
    {
        var title = myresponse.Title;
        var url = myresponse.Url.split('~');
        var image_url = base_url+url[1];
        $sliderHtml += '<div class="item slides '+activeClass+'">';
        $sliderHtml += '<a data-toggle="modal" id="'+myresponse.Id+'" onclick="openVideoModel(this)"><img src="'+image_url+'" alt="'+title+'" style="width:100%; height: 225px;"></a>';
        if(checkTitle == 'withoutTitle' || myresponse.Title === null)
          {
            $sliderHtml += '';
          }
          else
          { 
            $sliderHtml += '<div class="caption">';
            $sliderHtml += '<div class="container">';
            $sliderHtml += '<a data-toggle="modal" id="'+myresponse.Id+'" onclick="openVideoModel(this)"><h2>'+title+'</h2></a><br><br><br>';
            $sliderHtml += '</div>';
            $sliderHtml += '</div>';
          }
 $sliderHtml += '</div>';
}

//end if slider is video

    }
    
  });
$('#myCarousel .carousel-inner').html($sliderHtml);
});
}


