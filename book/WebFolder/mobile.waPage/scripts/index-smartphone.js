
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton2 = {};	// @buttonImage
	var textField14 = {};	// @textField
	var next_total = {};	// @button
	var select3 = {};	// @select
	var next_addons = {};	// @button
	var documentEvent = {};	// @document
	var next_paket = {};	// @button
	var next_booking = {};	// @button
	var textField2 = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		// Add your code here
		var namadt	= $$('textField14').getValue();
		sources.pemesanan.customer = namadt;
		sources.pemesanan.total_addons= vartotal_addons ;
		sources.pemesanan.tgl_masuk = varcheckin;
		sources.pemesanan.tgl_keluar = varcheckout;
		sources.pemesanan.jumlah_orang = varjumlahorang;
		sources.pemesanan.jumlah_hari= varhari ;
		sources.pemesanan.jumlah_breakfast= vartotalbreakfast ;
		sources.pemesanan.grandtotal= vargrand_total ;
		sources.pemesanan.save();
		sources.customer.country.set(sources.country);
		sources.customer.save();
//		alert("data ok");
	};// @lock

	textField14.focus = function textField14_focus (event)// @startlock
	{// @endlock
		sources.customer.newEntity();
	};// @lock

	next_total.click = function next_total_click (event)// @startlock
	{// @endlock
		sources.pemesanan.newEntity();
		sources.customer.newEntity();
		$$('navigationView1').goToNextView();
	};// @lock

	select3.change = function select3_change (event)// @startlock
	{// @endlock
		var hari_total = $$('textField3').getValue();
		var orang_total = $$('select1').getValue();
		var jumlah_sarapan;
		jumlah_sarapan = hari_total * orang_total;
		$$('richText12').setValue(total_sarapan);
		$$('textField22').setValue(jumlah_sarapan);
	};// @lock

	next_addons.click = function next_addons_click (event)// @startlock
	{// @endlock
		//hitung total paket
		var paket_total = $$('richText6').getValue();
		$$('textField8').setValue(paket_total);
		var hari_total = $$('textField3').getValue();
		$$('textField9').setValue(hari_total);
		var orang_total = $$('select1').getValue();
		$$('textField10').setValue(orang_total);
		var room_total;
		room_total = (hari_total * orang_total) * paket_total;
		$$('textField6').setValue(room_total);
		
		//hitung kasur
		var jumlah_kasur = $$('select2').getValue();
		var harga_kasur =  $$('textField4').getValue();
		var kasur_total;
		kasur_total = jumlah_kasur * harga_kasur;
		$$('textField12').setValue(kasur_total);
		
		//hitung sarapan
		var harga_sarapan = $$('textField5').getValue();
		var hari_total = $$('textField3').getValue();
		var orang_total = $$('select1').getValue();
		
		var total_sarapan;
		total_sarapan = (hari_total * orang_total) * harga_sarapan;
		
		var sarapan = $$('select3').getValue();
		if  (sarapan == 'yes') {				
			$$('textField13').setValue(total_sarapan);	 
		} else {
			$$('textField13').setValue('0');	
				
			}
		//total addons
		var total_sarapan = $$('textField13').getValue();
		var kasur_total =  $$('textField12').getValue();
		var total_addons;
		total_addons = parseInt(kasur_total) + parseInt(total_sarapan);
		$$('textField7').setValue(total_addons);
		
		//grand total
		var grandtotal_addons = $$('textField6').getValue();
		var grandtotal_booking = $$('textField7').getValue();
		grandtotal_all = parseInt(grandtotal_addons) + parseInt(grandtotal_booking);
		$$('textField11').setValue(grandtotal_all);

		
		$$('navigationView1').goToNextView();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
//		var  tc = $$('textField1')
//		if  (tc !== null) {
//			sources.pemesanan.newEntity();	
//				 alert('Selamat Datang');
//		}
		$$('textField1').datepicker();
		$$('textField3').disable();
		$$('textField4').disable();
		$$('textField5').disable();
		$$('textField6').disable();
		$$('textField8').disable();
		$$('textField9').disable();
		$$('textField10').disable();
		$$('textField7').disable();
		$$('textField11').disable();
		$$('textField12').disable();
		$$('textField13').disable();
		
	};// @lock

	next_paket.click = function next_paket_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToNextView();
		var hari_total = $$('textField3').getValue();
		var orang_total = $$('select1').getValue();
		var jumlah_sarapan;
		jumlah_sarapan = hari_total * orang_total;
		$$('textField22').setValue(jumlah_sarapan);
	};// @lock
	
	next_booking.click = function next_booking_click (event)// @startlock
	{// @endlock
		var hari = $$('textField3').getValue();
		if  (hari == "") {				
			alert("data kosong");	 
		} else {
			$$('navigationView1').goToNextView();	
				
			}	
		
	
	};// @lock
	function dateDiff() {
   var dtFrom = document.getElementById('textField1').value;
   var dtTo = document.getElementById('textField2').value;
 
   var dt1 = new Date(dtFrom);
   var dt2 = new Date(dtTo);
   var diff = dt2.getTime() - dt1.getTime();
   var days = diff/(1000 * 60 * 60 * 24);
   
   $$('textField3').setValue(days);
   return false;
}
	textField2.click = function textField2_click (event)// @startlock
	{// @endlock
		dateDiff();
	};// @lock

	textField2.change = function textField2_change (event)// @startlock
	{// @endlock
		dateDiff();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("textField14", "focus", textField14.focus, "WAF");
	WAF.addListener("next_total", "click", next_total.click, "WAF");
	WAF.addListener("select3", "change", select3.change, "WAF");
	WAF.addListener("next_addons", "click", next_addons.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("next_paket", "click", next_paket.click, "WAF");
	WAF.addListener("next_booking", "click", next_booking.click, "WAF");
	WAF.addListener("textField2", "click", textField2.click, "WAF");
	WAF.addListener("textField2", "change", textField2.change, "WAF");
// @endregion
};// @endlock
