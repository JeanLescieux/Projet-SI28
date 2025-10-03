$(document).ready(function() {
  
  // Metaphorsis Phonepad code
  var $phonePad = $('.phonepad'),
      $address = $('#address'); 
  clacks = 0;      
  $phonePad.on('click', 'input', function () {
     var $button = $(this), 
         value = $button.val();
     clacks++;
     if (!$button.is('#clear')) {
         if ($button.is('#mbutton')) {
            if( $address.val() === "1998772515" ){
                window.location.replace("Layer/GoWireless.html");
            }
            else{
            $address.val('');
            clacks = 0;
            }
         }    
         else{ 
            if (clacks < 20){
              $address.val(function (i, currentValue) {
                  return currentValue + value;
              });
            }
         }
     }   
     else {   
          $address.val('');
          clacks = 0;
     }
  });
  
  // Tab selection code  
  var mt = $(".maintab");
  var at = $(".admintab");
  
  mt.css('background-color','#00FF00');
  mt.css('color','black');
  
  $("#tab-2").hide();  
  
  mt.mousedown(function() {
    $("#tab-2").hide();
    $("#tab-1").show();
    at.css('background-color','black');
    at.css('color','#00FF00');
    $(this).css('background-color','#00FF00');
    $(this).css('color','black');
  });
    
  at.mousedown(function() {
    $("#tab-1").hide();
    $("#tab-2").show();
    mt.css('background-color','black');
    mt.css('color','#00FF00');
    $(this).css('background-color','#00FF00');
    $(this).css('color','black');
  });

  
// End of document    
});
