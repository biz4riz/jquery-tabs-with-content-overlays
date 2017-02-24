/************************************************************************/
/* JAVASCRIPT FUNCTIONS
/************************************************************************/

function overlay() {
	$('.overlay a.close').click(function(){
		//alert('everything is hidden except for that which is seen');
		$('.overlay').hide();
	});
}
function tabs() {
	var tabs = $('#tabs li');
	var content = $('.ui-tabs-panel.content .row');
	var contentHeight = content.innerHeight();
	
	$('#tabs').tabs();
	
	tabs.removeClass('ui-tabs-active');
	tabs.removeClass('ui-state-active');
	
	tabs.click(function(){
		$('#tabs .close').show();
		$('#tabs .ui-tabs-panel').css('z-index', 1);
		//alert(contentHeight);
	}) 	
	$('#tabs a.close').click(function(){
		$(this).hide();
		$('#tabs .ui-tabs-panel').css('z-index', -1);
	}) 
}
