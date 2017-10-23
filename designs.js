
const h = $('#input_height');
const w = $('#input_width');
let color  = $('#colorPicker');

function makeGrid() {
	let height = h.val();
	let width  = w.val();
	$('#pixel_canvas').empty();
	
	for(let row = 0; row < height; row++) {
		$('#pixel_canvas').append('<tr></tr>');
		for (let col = 0; col < width; col++) {
			$('tr').last().append('<td></td>');
		}
	}
}; 

$('#sizePicker').submit(function(e){
	let height = h.val();
	let width  = w.val();
	$('#input').next().text();
	e.preventDefault();

	makeGrid();

	$('td').click(function(){
		$(this).css('backgroundColor', $(color).val());
	});

});