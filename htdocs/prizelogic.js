//Create an html list from array of strings
function prizeList(list) {
	document.write('<ul>');
	for (index = 0; index < list.length; ++index) {
		document.write('<li>');
    	document.write(list[index]);
		document.write('</li>');
	}
	document.write('</ul>');
}


//Create an html table from array of prize objects
function prizeTable(list, imageResolution) { //imageResolution can be 250, 400, 800
	imageResolution = typeof imageResolution !== 'undefined' ? imageResolution : 250; //default resolution to 250 if not passed in
	document.write('<table border=1>');

	//Header row
	document.write('<tr>');
	document.write('<td>Image</td>');
	document.write('<td>Points Value</td>');
	document.write('<td>Description</td>');
	document.write('<td>Item Number</td>');
	document.write('</tr>');

	//Detail rows
	for (index = 0; index < list.length; ++index) {
		document.write('<tr>');
		document.write('<td><img src="http://prizepoints.com/By_Part_Number/' + list[index].ImageID + '/' + list[index].ImageID + '_' + imageResolution + '.jpg"></td>');
		document.write('<td>' + list[index].Points + ' points</td>');
		document.write('<td>');
		document.write('<b>' + list[index].ShortDesc + '</b>');
		document.write('<br /><br />' + list[index].LongDesc);
		document.write('<br /><br />Suggested retail price: $' + list[index].MSRP);
		document.write('</td>');
		document.write('<td>' + list[index].PrizeID + '</td>');
		document.write('</tr>');
	}
	document.write('</table>');
}

//Create an html table from array of prize objects
function prizeThumbnailTable(list, imageResolution, imageSize) { //imageResolution can be 250, 400, 800
	imageResolution = typeof imageResolution !== 'undefined' ? imageResolution : 250; //default resolution to 250 if not passed in
	
	for (index = 0; index < list.length; ++index) {
		document.write('<div class="row"><div class="col-sm-6 col-md-4"><div class="thumbnail">');
		document.write('<div class="caption" style="text-align:center;"><h3>' + list[index].ShortDesc + '</h3>');
		document.write('<img width='+imageSize+' src="http://prizepoints.com/By_Part_Number/' + list[index].ImageID + '/' + list[index].ImageID + '_' + imageResolution + '.jpg">');
		document.write('<p>' + list[index].Points + ' points &nbsp;&nbsp;&nbsp;');
		document.write('<a href="#" class="btn btn-default" role="button">Add to cart</a></p>');
		document.write('</div></div></div></div>');
	}

}
