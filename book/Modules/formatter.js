/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'formatter' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(formatter.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
var formatter = require("formatting"); // access to module
formatter.formatNumber(1234567, "$ ###,###,###.00"); //"$ 1,234,567.00" on a US system
formatter.formatNumber(0.3, "0%"); // "30%"
formatter.formatNumber(1234567, { format:"###,###,###.00", locale:"us" }); //"1,234,567.00"
formatter.formatNumber(1234567, { format:"###,###,###.00 €", locale:"fr" }); // "1 234 567,00 €"
exports.helloWorld = function helloWorld () {
	return ('Hello world');
	
};
