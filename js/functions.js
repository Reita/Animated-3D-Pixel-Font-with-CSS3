/* Author: Ale Tello
   Sadly for some weird and unknown reason whenever you tab between anchors (or use tabindex in order to set
   active/focused states) Chrome seems to butcher the animation and you start getting choppy/laggy animation
   movements so I decided to omit tabindex and use some good 'ole jQuery. The choppy movement can still be 
   replicated if you tab though.
*/

$(document).ready(function() {
  $('a').click(function(){
    $('#letter-selector').find('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  
  // jQuery doesn't seem to have a built-in hash change setting, does it?
  window.onhashchange = hashChange;

  var hash = window.location.hash;
  if (hash != null) {
    $('a[href='+hash+']').addClass('selected');
  }
  
  // Once we detect a keystroke A~Z we just change the hash value; that way we keep browser history states.
  $(document).keydown(function(e) {
    var key = e.keyCode;
    if (key==65) { window.location.hash ="A" };
    if (key==66) { window.location.hash ="B" };
    if (key==67) { window.location.hash ="C" };
    if (key==68) { window.location.hash ="D" };
    if (key==69) { window.location.hash ="E" };
    if (key==70) { window.location.hash ="F" };
    if (key==71) { window.location.hash ="G" };
    if (key==72) { window.location.hash ="H" };
    if (key==73) { window.location.hash ="I" };
    if (key==74) { window.location.hash ="J" };
    if (key==75) { window.location.hash ="K" };
    if (key==76) { window.location.hash ="L" };
    if (key==77) { window.location.hash ="M" };
    if (key==78) { window.location.hash ="N" };
    if (key==79) { window.location.hash ="O" };
    if (key==80) { window.location.hash ="P" };
    if (key==81) { window.location.hash ="Q" };
    if (key==82) { window.location.hash ="R" };
    if (key==83) { window.location.hash ="S" };
    if (key==84) { window.location.hash ="T" };
    if (key==85) { window.location.hash ="U" };
    if (key==86) { window.location.hash ="V" };
    if (key==87) { window.location.hash ="W" };
    if (key==88) { window.location.hash ="X" };
    if (key==89) { window.location.hash ="Y" };
    if (key==90) { window.location.hash ="Z" };
  });
});

function hashChange() {
  var hash = window.location.hash;
  if (hash != null) {
    $('#letter-selector').find('.selected').removeClass('selected');
    $('a[href='+hash+']').addClass('selected');
  }
}