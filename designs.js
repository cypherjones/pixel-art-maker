
const heightInput = $('#input_height');
const widthInput = $('#input_width');
const colorInput  = $('#colorPicker');
const canvas = $('#pixel_canvas');

/**
 * this function will all us to create a grid
 */
function makeGrid(height,width) {
	// let he = heightInput.val();
	// let colWidth  = widthInput.val();
	/** let's clean the canvas on every submit */
	canvas.empty();
	/**  here we'll loop through each row and col */
	for (let row = 0; row < height; row++) {
		$('#pixel_canvas').append('<tr></tr>');
		for (let col = 0; col < width; col++) {
			$('tr').last().append('<td></td>');
		}
	}
}; 
/** 
 * we're going to watch when the submit button
 * is pushed so we can add color from the color picker
 */
$('#sizePicker').submit(function(e){
	let height = heightInput.val();
	let width  = widthInput.val();
	$('#input').next().text();
	/**
	 * With the event listener tied to the submit method
	 * we can listen for a new click and clear the grid
	 * to make way for a new grid
	 */
	e.preventDefault();
	/**
	 * Here we call the grid function with the submit button
	 */
	makeGrid(height,width);
	/** 
	 * Using the click method we can add color
	 * to each grid box from the color selector
	 */
	$('td').click(function(){
		$(this).css('backgroundColor', colorInput.val());
	});
});