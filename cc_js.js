/* JS for Cassaundra Caldwell's site */

$('.icon').click(function() {
	var id = $(this).attr('id');
	console.log(id);
	showInfo(id);
});

$(document).mouseup(function(e) {
	var container = $('.popup');
	if (!container.is(e.target) && container.has(e.target).length === 0) {
		container.hide();
	}
});

function showInfo(id) {
	$('#' + id + 'Popup').show();
}

function hideInfo() {
	$('.popup').hide();
}