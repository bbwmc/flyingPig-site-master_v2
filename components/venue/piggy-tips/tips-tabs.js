$(function(){
	$('#piggy-tips-nav').find('li').click(function () {
		var index = $(this).parent().children().index(this);
		$(this).addClass('active').siblings().removeClass('active');
		console.log(index);
		$('#piggy-tips-content').children('article').eq(index).addClass('show').closest('article').siblings().removeClass('show');
	});
});
