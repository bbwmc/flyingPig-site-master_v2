$(document).ready(function(){
  $('#dropDownMenu a').on('click', function(e){
      e.preventDefault();
      $(this).next().slideToggle();
  });
});
