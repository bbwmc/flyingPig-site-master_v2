$(function(){
  // alert('test');
  $('#innerDivNavigation').on('click',function(){
    console.log('working');
    $(this).parent().toggleClass('active');
  });
});
