
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton1 = {};	// @buttonImage
	var imageButton5 = {};	// @buttonImage
	var textField11 = {};	// @textField
	var imageButton7 = {};	// @buttonImage
	var image2 = {};	// @image
	var image1 = {};	// @image
	var button7 = {};	// @button
	var button6 = {};	// @button
	var documentEvent = {};	// @document
	var combobox2 = {};	// @combobox
	var checkbox2 = {};	// @checkbox
	var combobox1 = {};	// @combobox
	var imageButton4 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var textField2 = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		var night = $$('textField4').getValue();
		var paket = $$('textField5').getValue();
		var total ;
		total = night * paket;
		$$('textField3').setValue(total);
		var cetakkmr = 'IDR ' + total.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('pemesanantampil').setValue(cetakkmr);
	};// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		var night = $$('textField4').getValue();
		var paket = $$('textField5').getValue();
		var total ;
		total = night * paket;
		var cetakkmr = 'IDR ' + total.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('pemesanantampil').setValue(cetakkmr);
		$$('textField3').setValue(total);
	};// @lock

	textField11.change = function textField11_change (event)// @startlock
	{// @endlock
		sources.customer.newEntity();
	};// @lock
	
	imageButton7.click = function imageButton7_click (event)// @startlock
	{// @endlock
		
	};// @lock
	function showDatepicker1() {
    $('#textField1').datepicker('show');
	}
	image2.click = function image2_click (event)// @startlock
	{// @endlock
		showDatepicker1();		
	};// @lock
	function showDatepicker2() {
    $('#textField2').datepicker('show');
	}
	image1.click = function image1_click (event)// @startlock
	{// @endlock
		showDatepicker2();
	};// @lock
			           
	button7.click = function button7_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog();
	};// @lock

function customRange(input) 
{ 
return {
        minDate: (input.id == "textField2" ? $("#textField1").datepicker("getDate") : new Date())
      }; 
}

function customRangeStart(input) 
{ 
return {
        maxDate:(input.id == "textField1" ? $("#textField2").datepicker("getDate") : null)
      }; 
}
$(document).ready(function() {

   $('#textField1').datepicker(
   {
//       beforeShow: customRangeStart,
       minDate: 0,
       dateFormat: "yy-mm-dd",
       changeYear: true
   });

   $('#textField2').datepicker(
   {
       beforeShow: customRange,
       dateFormat: "yy-mm-dd",
       changeYear: true
   });
});
$(function () {
       var date = new Date();
       var currentMonth = date.getMonth();
       var currentDate = date.getDate();
       var currentYear = date.getFullYear();

       $('#textField1').datepicker({
            maxDate: new Date(currentYear, currentMonth, currentDate)
       });   
  });

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		$$('combobox2').addOption('0', '0', true )
		$$('combobox2').addOption('1', '1', true )
		$$('combobox2').addOption('2', '2', true )
		var  tc = $$('textField1');
		if  (tc !== null) {
			 alert('Selamat Datang');
		 sources.pemesanan.newEntity();
		}
		$$('container5').hide();
		$$('textField4').disable();
		
	};// @lock
//		
	combobox2.change = function combobox2_change (event)// @startlock
	{// @endlock
		
		var harga_kasur = $$('textField6').getValue();
		var jumlah_kasur = $$('combobox2').getValue();
		var jumlah_malam = $$('textField4').getValue();
		var total_kasur;
		total_kasur =  (harga_kasur * jumlah_kasur) * jumlah_malam;
		$$('textField19').setValue(total_kasur);
		var total_kasur = $$('textField19').getValue();
		var total_breakfast = $$('textField10').getValue();
		var total_addons;
		total_addons = parseInt(total_kasur) + parseInt(total_breakfast) * 1;
		var cetak = 'IDR ' + total_addons.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('addonstampil').setValue(cetak);
		$$('richText22').setValue(cetak);
		$$('textField8').setValue(total_addons);
		
//		var unik = $$('textField24').getValue();
		var total_paket = $$('textField3').getValue();
		var total_addons = $$('textField8').getValue();
		var total_seluruh = parseInt(total_paket) + parseInt(total_addons);
//		$$('textField22').setValue(total_seluruh);
		var cetakttl = 'IDR ' + total_seluruh.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('textField22').setValue(cetakttl);
	};// @lock

		
	checkbox2.change = function checkbox2_change (event)// @startlock
	{// @endlock
		var harga_breakfast = $$('textField7').getValue();
		var night = $$('textField4').getValue();
		var person = $$('combobox1').getValue();
		var jumlah_breakfast ;
		jumlah_breakfast = night * person;
		
		var total_breakfast;
		total_breakfast = harga_breakfast * jumlah_breakfast;
		$$('textField10').setValue(total_breakfast);
		
		if ($$('checkbox2').getValue()){
		$$('textField9').setValue(jumlah_breakfast);
		$$('textField8').setValue(total_addons);
		}
		else
		{
			$$('textField9').setValue('0');
			$$('textField10').setValue('0');
			
		}
		var total_kasur = $$('textField19').getValue();
		var total_breakfast = $$('textField10').getValue();
		var total_addons;
		total_addons = parseInt(total_kasur) + parseInt(total_breakfast) * 1;
		var cetak = 'IDR ' + total_addons.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('addonstampil').setValue(cetak);
		$$('richText22').setValue(cetak);
		$$('textField8').setValue(total_addons);
		
//		var unik = $$('textField24').getValue();
		var total_paket = $$('textField3').getValue();
		var total_addons = $$('textField8').getValue();
		var total_seluruh = parseInt(total_paket) + parseInt(total_addons);
//		$$('textField22').setValue(total_seluruh);
		var cetakttl = 'IDR ' + total_seluruh.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('textField22').setValue(cetakttl);
		
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		$$('richText11').show();
		var night = $$('textField4').getValue();
		var paket = $$('textField5').getValue();
		var total ;
		total = night * paket;
		var cetakkmr = 'IDR ' + total.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('pemesanantampil').setValue(cetakkmr);
		$$('textField3').setValue(total);
		
		
	};// @lock
	
	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		// pengurangan kamar
		sources.kamar.jumlah_kamar -=1;
		sources.kamar.save();

   		var firstname = $$('textField11').getValue();
   		var jumlah_hari = $$('textField4').getValue();
   		var firstname = $$('textField11').getValue();
   		var bookingnumber = $$('textField23').getValue();
   		var arrival = $$('textField1').getValue();
   		var departure = $$('textField2').getValue();
   		var room = $$('richText8').getValue();
   		var harga_kamar = $$('pemesanantampil').getValue();
   		var phone = $$('textField17').getValue();
   		var addons = $$('addonstampil').getValue();
   		var city = $$('textField15').getValue();
   		var postal = $$('textField16').getValue();
   		var address = $$('textField14').getValue();
   		var total = $$('textField22').getValue();
   		var mail = $$('textField18').getValue();
   		if (firstname == "") {
   			alert("isi dong");
   			}  
   		else if (mail != null){
				
			sources.customer.email=mail;    // data input by the user through Text Input widgets
			sources.customer.save(
				{
	        		onSuccess: function(event) {
		                // displays success message in a DisplayError area
		            	var xhr = new XMLHttpRequest();
				 		//Create an empty FormData object
						 var formdata = new FormData();
						 
						 //Fill the formdata object using the mail datasource values
						 formdata.append('From', 'knzo.fathy@gmail.com')
						 formdata.append('To', mail)
						 formdata.append('Pass', 'gandok1992')
						 formdata.append('Title', '[Book] Booking Details For '+bookingnumber+' ')
						 formdata.append('Content', '<table style="text-align:left;font-size:11px;line-height:15px;margin-top:5px" border="0" cellpadding="5" cellspacing="0" width="645px;"> <tbody> <tr valign="top"> <td width="50%"><table style="border:1px solid #cccccc" cellpadding="1" width="100%"> <tbody> <tr> <th colspan="3" style="font-size:12px;padding-left:15px;background:url(https://ci4.googleusercontent.com/proxy/-EEoGrYmAA88c-cefZJiyndseOx96Uibd36zITK1K8ruJvfGvt3nzXyFCQXFG9zDWmpgJkTY5Qo_7g=s0-d-e1-ft#http://images/email/header-arrow.png) left no-repeat">Transaction Details</th> </tr> <tr> <td width="110px"> Booking Code</td> <td width="8px">:</td> <td><b>'+bookingnumber+'</b></td> </tr> <tr> <td width="110px"> Arrival Date</td> <td width="5px">:</td> <td>'+arrival+'</td> </tr> <tr> <td width="110px"> Departure Date</td> <td width="5px">:</td> <td>'+departure+'</td> </tr> <tr> <td width="110px"> Room Name</td> <td width="5px">:</td> <td>'+room+'</td> </tr> <tr> <td width="110px"> Total Payment</td> <td width="5px">:</td> <td>'+total+'</td> </tr> <tr> <td width="110px"> </td> </tr> <tr> <td width="110px"> Payment Status</td> <td width="5px">:</td> <td style="font-weight:bold"><span style="color:red">BELUM LUNAS</span></td> </tr> </tbody> </table></td> <td width="50%"><table style="border:1px solid #cccccc" cellpadding="1" width="100%"> <tbody> <tr> <th colspan="3" style="font-size:12px;padding-left:15px;background:url(https://ci4.googleusercontent.com/proxy/-EEoGrYmAA88c-cefZJiyndseOx96Uibd36zITK1K8ruJvfGvt3nzXyFCQXFG9zDWmpgJkTY5Qo_7g=s0-d-e1-ft#http://images/email/header-arrow.png) left no-repeat"> Personal Information </th> </tr> <tr> <td width="100"> Recipient Name</td> <td width="8">:</td> <td><b>'+firstname+'</b></td> </tr> <tr> <td> Phone</td> <td>:</td> <td>'+phone+'</td> </tr> <tr> <td> Address</td> <td>:</td> <td>'+address+'</td> </tr> <tr> <td> City</td> <td>:</td> <td>'+city+'</td> </tr> <tr> <td> Postal Code</td> <td>:</td> <td>'+postal+'</td> </tr> <tr> <td>Total Hari</td> <td>:</td> <td>'+jumlah_hari+'</td> </tr></tbody> </table></td></tr></tbody></table><div style="width:650px"><div style="font-size:12px;font-weight:bold;padding-left:10px;margin-bottom:5px;margin-left:10px;background:url(https://ci4.googleusercontent.com/proxy/-EEoGrYmAA88c-cefZJiyndseOx96Uibd36zITK1K8ruJvfGvt3nzXyFCQXFG9zDWmpgJkTY5Qo_7g=s0-d-e1-ft#http://images/email/header-arrow.png) left no-repeat"> Order Details </div><div style="border:1px solid #ccc;margin:0 5px"><div style="background-color:#19c0f3;color:#0f7b9c;font-weight:bold;margin:2px"><div style="float:left;padding:3px 5px;text-align:center;width:70px">No</div><div style="float:left;padding:3px 5px;text-align:left;width:240px">Item Name</div><div style="float:left;padding:3px 5px;text-align:right;width:90px">Price</div><div style="float:left;padding:3px 5px;text-align:center;width:50px"></div><div style="float:left;padding:3px 5px;text-align:center;width:50px"></div><div style="float:left;padding:3px 5px;text-align:right;width:70px">Total</div><div style="clear:both"></div></div><div style="clear:both"></div><div><div style="float:left;padding:3px 5px;text-align:center;width:70px"></div><div style="float:left;padding:3px 5px;text-align:left;width:240px"> Total Harga Kamar</div><div style="float:left;padding:3px 5px;text-align:right;width:90px"> '+harga_kamar+' </div><div style="float:left;padding:3px 5px;text-align:center;width:50px"></div><div style="float:left;padding:3px 5px;text-align:center;width:50px"></div><div style="float:left;padding:3px 5px;text-align:right;width:70px">'+harga_kamar+'</div><div style="clear:both"></div></div><div style="margin-bottom:7px"><div style="float:left;padding:3px 5px;text-align:center;width:75px"></div><div style="clear:both"></div></div><div style="border:1px solid #ccc;margin:0 5px"></div><div style="float:left;padding:3px 5px;text-align:center;width:70px"> </div><div style="float:left;padding:3px 5px;text-align:left;width:260px">Total Addons</div><div style="float:left;padding:3px 5px;text-align:right;width:70px">'+addons+'</div><div style="float:left;padding:3px 5px;text-align:center;width:50px">-</div><div style="float:left;padding:3px 5px;text-align:center;width:50px">-</div><div style="float:left;padding:3px 5px;text-align:right;width:70px">'+addons+'</div><div style="clear:both"></div><div style="clear:both"></div><div style="float:left;padding:3px 5px;text-align:center;width:70px"> </div><div style="float:left;padding:3px 5px;text-align:left;width:240px"></div><div style="float:left;padding:3px 5px;text-align:right;width:90px"></div><div style="float:left;padding:3px 5px;text-align:center;width:50px">-</div><div style="float:left;padding:3px 5px;text-align:center;width:50px">-</div><div style="float:left;padding:3px 5px;text-align:right;width:70px"></div><div style="clear:both"></div><div style="border:1px solid #ccc;margin:0 5px"></div><div style="float:left;padding:3px 5px;text-align:center;width:70px"> </div><div style="float:left;padding:3px 5px;text-align:left;width:240px"> </div><div style="font-weight:bold;color:#0f7b9c;float:left;padding:3px 5px;text-align:right;width:90px">Grand Total</div><div style="font-weight:bold;color:#35689f;float:left;padding:3px 5px;text-align:center;width:50px"> </div><div style="font-weight:bold;color:#35689f;float:left;padding:3px 5px;text-align:center;width:50px"> </div><div style="font-weight:bold;color:#0f7b9c;float:left;padding:3px 5px;text-align:right;width:70px">'+total+'</div><div style="clear:both"></div></div><div style="padding-left:5px;font-style:italic"> </div><div style="font-size:12px; font-family:Tahoma, Geneva, sans-serif; padding:15px 5px 5px 5px"> Kepada Yth. <b>Bapak/Ibu '+firstname+'</b>, <br />Terima kasih atas kepercayaan Anda memilih kami sebagai rumah dalam liburan anda.Melalui email ini kami ingin memberi informasi sekaligus mengingatkan bahwa kami belum menerima pelunasan pembayaran dari Bapak/Ibu '+firstname+' atas invoice <b>'+bookingnumber+'</b> ini. </div><div style="font-size:12px; font-family:Tahoma, Geneva, sans-serif;padding:0 5px 0 5px"> Sebagai informasi, Nota Pembelian ini bukan sebagai bukti pembelian dan <b>hanya sah</b> apabila Anda telahmelakukan pembayaran ke nomor rekening resmi kami yang tertera di bawah.<div style="margin:10px 15px 10px 0px;padding:0px;border-top:1px solid #ddd;border-left:1px solid #ddd;width:630px"><div style="width:304px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;float:left;padding:5px"> <img src="http://s26.postimg.org/otueuwycl/unnamed.png" style="float:left" alt="BCA" /> <b>701-012-xxxx</b> a/n Andi<br />Cab. Central Park </div><div style="width:304px;border-right:1px solid #ddd;border-bottom:1px solid #ddd;float:left;padding:5px"> <img src="http://s26.postimg.org/72e72ptk5/unnamed_1.png" style="float:left" alt="Mandiri" /> <b>117000453xxxx</b> a/n Andi<br />Cab. Taman Anggrek</div><div style="clear:both"></div></div></div><div style="text-align:center;margin-bottom:10px;margin-top:8px"><div style="border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;padding:5px;text-align:center;width:450px;margin:auto"> <img src="http://s26.postimg.org/ptg4cvo4l/unnamed_2.png" alt="" align="left" /> <img src="http://s26.postimg.org/ptg4cvo4l/unnamed_2.png" alt="" align="right" /> Diharapkan untuk melakukan pembayaran transfer menggunakan&nbsp;<label style="color:#16acda;text-decoration:underline">kode unik</label>&nbsp;agar pesanan anda bisa segera diproses secara otomatis oleh sistem kami </div></div><div style="clear:both"></div><div style="padding:0px 5px 0px 5px"> </div></div><div style="width:650px;font-family:Tahoma,Geneva,sans-serif;font-size:11px"><div style="border-top:1px solid #ccc;margin:15px 2px 0px 2px;line-height:10px"> </div><div style="float:left;padding:10px;padding-top:0px;color:#444444"> Peucang Island Eco Resort <br />Batu Ceper, Kota Tangerang<br />Jl. Pembangunan 3 No. 81<br />Neglasari, Tangerang 15121&ndash;Indonesia </div><div style="float:left;padding:10px;padding-top:0px;color:#444444"> Telp : (021) 5573 4611 (Hunting)<br />Fax : (021) 5573 4613<br />SMS : 08 23 1261 6599<br />E-mail : <a href="mailto:info@peucangislandresort.com" target="_blank">info@peucangislandresort.com</a> </div><div style="padding:10px;padding-top:0px;color:#444444;float:right"><img src="http://www.peucangislandresort.com/wp-content/uploads/2013/10/new-logo1.gif" alt="" style="padding-top:7px" /></div><div style="clear:both"></div><div style="margin-bottom:10px"> <a href="http://www.peucangislandresort.com" target="_blank"> </a></div></div>');
						//Add a listener to read the response of the handler (server side)
						 xhr.addEventListener("load", function(evt) {
		    		 		if (evt.target.responseText=='true')
			    		 		{
			    		 			$$('richText21').setValue('Your message has been sent, please check your email');
							        $$('richText21').$domNode.css({color: '#2980b9'});
			    		 		}
			    		 		else
			    		 		{
			    		 			$$('richText21').setValue('failed to send your email!');
							        $$('richText21').$domNode.css({color: '#c0392b'});
			    		 		}
			    		 		
			     				$$('dialog1').displayDialog();
			 					}, false);

								xhr.open('POST', '/sendMail', true); //call the sendMail handler
								xhr.send(formdata); //Send the formdata object to the handler on the server
	         
	            
	        			},
	        	onError: function(result) {
	            	var x = result.error[0]; // get the exception
	            	//alert(x.errCode);
	            	
	            	if (x.errCode==1571)
	            	{
	            		//alert("input not email format!");
	            		$$('richText21').setValue('input not email format!');
						$$('richText21').$domNode.css({color: '#c0392b'});
						$$('dialog1').displayDialog()
	            	}
	            	if (x.errCode==1115)
	            	{
	            		//alert("Email already registered!");
	            		$$('richText21').setValue('Email already registered!');
						$$('richText21').$domNode.css({color: '#c0392b'});
						$$('dialog1').displayDialog();
	            	}
                 	//alert(x.message); // display the message
	        	}
	    	}
			
		);
			
		$$('textField1').clear();

		}
		else
		{
			alert("kosong");
		}

		//aduuhh	
		var namadt	= $$('textField11').getValue();
		var emaildt = $$('textField18').getValue();
		sources.pemesanan.total_addons= vartotadd ;
		sources.pemesanan.jumlah_hari= varhari ;
		sources.pemesanan.jumlah_breakfast= varbreakfast ;
		sources.pemesanan.grandtotal= vartotok ;
		sources.pemesanan.customer = namadt ;
		sources.pemesanan.email_customer = emaildt ;
		sources.pemesanan.nomor_booking = varnomorbooking ;
		sources.pemesanan.kode_unik = varkodeunik ;
		sources.pemesanan.nama_kamar.set(sources.kamar);
		sources.pemesanan.save();
		sources.customer2.country.set(sources.country2);
		sources.customer2.save();
		
	};// @lock
	//fucntion random number
	function randomString() {
	var chars = "123456789QAZWSXEDCRFV";
	var string_length = 4;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	$$('textField23').setValue(randomstring);
	}
	
	//fuction random kodeunik
	function kodeunik() {
	var chars = "12345678";
	var string_length = 2;
	var kodeunik = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		kodeunik += chars.substring(rnum,rnum+1);
	}
//	$$('textField24').setValue(kodeunik);
	}
	
	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		
		$$('container5').show();
		$$('textField11').focus();
		randomString();
		kodeunik();
		sources.customer2.newEntity();
//		var unik = $$('textField24').getValue();
		var total_paket = $$('textField3').getValue();
		var total_addons = $$('textField8').getValue();
		var total_seluruh = parseInt(total_paket) + parseInt(total_addons);
//		$$('textField22').setValue(total_seluruh);
		var cetakttl = 'IDR ' + total_seluruh.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('textField22').setValue(cetakttl);
		
		
	};// @lock
	//function datediff
   function dateDiff() {
		var dtFrom = document.getElementById('textField1').value;
		var dtTo = document.getElementById('textField2').value;
		var dt1 = new Date(dtFrom);
		var dt2 = new Date(dtTo);
		var diff = dt2.getTime() - dt1.getTime();
		var days = 0;
		if (dtFrom != "" && dtTo != "") {
			days = diff/(1000 * 60 * 60 * 24);
		}
		$$('textField4').setValue(days);
		return false;
	}
	
	textField2.change = function textField2_change (event)// @startlock
	{// @endlock
		var night = $$('textField4').getValue();
		var paket = $$('textField5').getValue();
		var total ;
		total = night * paket;
		var cetakkmr = 'IDR ' + total.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		$$('pemesanantampil').setValue(cetakkmr);
		
	// datedif
		dateDiff();
		
	};// @lock
	

// @region eventManager// @startlock
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener("textField11", "change", textField11.change, "WAF");
	WAF.addListener("imageButton7", "click", imageButton7.click, "WAF");
	WAF.addListener("image2", "click", image2.click, "WAF");
	WAF.addListener("image1", "click", image1.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("combobox2", "change", combobox2.change, "WAF");
	WAF.addListener("checkbox2", "change", checkbox2.change, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener("imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener("textField2", "change", textField2.change, "WAF");
// @endregion
};// @endlock
