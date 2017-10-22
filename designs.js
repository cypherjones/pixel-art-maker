
const h = $('#input_height');
const w = $('#input_width');

let color  = $('#colorPicker');

$('#sizePicker').submit(function(e){
	let height = h.val();
	let width  = w.val();
	$('#input').next().text();
	e.preventDefault();

	makeGrid();

	function makeGrid() {
		$('#pixel_canvas').empty();
		for(let row = 0; row < width; row++) {
			$('#pixel_canvas').append('<tr></tr>');
			for (let col = 0; col < height; col++) {
				$('tr').last().append('<td></td>');
			}
		}
	};

  $('td').click(function(){
    $(this).css('backgroundColor', $(color).val());
  });
});


