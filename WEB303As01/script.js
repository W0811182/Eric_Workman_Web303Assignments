/*
	WEB 303 Assignment 1 - jQuery
	{Eric Workman}
*/


$(document).ready(function(){

		$('#percent, #yearly-salary').on('change', function(){

				//alert("ding");

			let total = 0;
			let percent = Number($("#percent").val());
			let salary = Number($("#yearly-salary").val());
			let total = salary * percent /100;
			let total = total.toFixed(2);
			$('span#amount').replaceWith(total);
			});

}

);