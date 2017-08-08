$(function(){
  $('.tab-link').parent('li').click(function () {
    var index = $(this).parent().children().index(this);
    $('#piggy-inner-tabs').children('div').eq(index).addClass('show').closest('div').siblings().removeClass('show');
  });$('.tab-link').parent('li').click(function () {
    var index = $(this).parent().children().index(this);
    $('#piggy-inner-tabs').children('div').eq(index).addClass('show').closest('div').siblings().removeClass('show');
  });
});
