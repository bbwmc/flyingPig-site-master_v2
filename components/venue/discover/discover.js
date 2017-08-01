$(document).ready(function(){
  $('#dropDownMenu a').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('action').next().slideToggle();
  });
});
