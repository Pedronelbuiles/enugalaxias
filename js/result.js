const url = "https://api.nasa.gov/planetary/apod?api_key=qKOXcVCoeBlZlR45PAuRKRrtmPNRO4SMKZGcf1B6";


let urlImg; 
(function($) {  
    $.geting = function(key)   {  
        key = key.replace(/[\[]/, '\\[');  
        key = key.replace(/[\]]/, '\\]');  
        var pattern = "[\\?&]" + key + "=([^&#]*)";  
        var regex = new RegExp(pattern);  
        var url = unescape(window.location.href);  
        var results = regex.exec(url);  
        if (results === null) {  
            return null;  
        } else {  
            return results[1];  
        }  
    }  
})(jQuery);
$(function() {
    setTimeout(function() {
        $('.cargando').hide("slow");
        $('#fondoPrincipal').css("visibility","visible");
        $('.carousel-item').removeClass("visibilidad");
    },3000);
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
      urlImg = "https://images-api.nasa.gov/search?q="+$.geting("id");
      console.log(urlImg);
      $('#contenedorCarrousel').css("display", "block");
      $.ajax({
          url : urlImg,
          success: function(result){
              console.log(result);
              
              if("collection" in result){
                  
                  $("#img1").attr("src", result.collection.items[0].links[0].href);
                  $("#img2").attr("src", result.collection.items[4].links[0].href);
                  $("#img3").attr("src", result.collection.items[2].links[0].href);
                  $("#img4").attr("src", result.collection.items[3].links[0].href);
              }
          }
      });
     
});