$(function(){
  $('#booking').on('click', function(){
    $('#booking-widget').show();
    console.log('foo');
  });
  $('.close').on('click', function(){
    $('#booking-widget').hide();
    console.log('bar');
  });
});
