$(document).ready(function(){
	//Welcome effect in the beginning
	var welcome = $('.welcome'),
	enter = welcome.find('.enter');

	setTimeout(function(){
		welcome.removeClass('hidden');
	}, 800);

	enter.on('click', function(e){
		e.preventDefault();
		welcome.addClass('hidden').fadeOut();
	});
});
