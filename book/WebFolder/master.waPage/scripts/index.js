
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button45 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button45.click = function button45_click (event)// @startlock
	{// @endlock
		var mulai = $$('textField14').getValue();
		var akhir = $$('textField15').getValue();
		var myColl = sources.kamar;
//var myColl = sources.alamat.alamat();
		var i = "";
//i = 0
		var oneAlamat = myColl; 
//  while (oneAlamat != null)
  		for (i = 0; i<sources.kamar.length; i++)
  
    {
    	//alert(oneAlamat.alamat);
     	sources.detailkamar.newEntity();
        sources.detailkamar.nama_kamar = oneAlamat.nama_kamar;
        sources.detailkamar.harga = oneAlamat.harga;
        sources.detailkamar.jumlah_kamar = oneAlamat.jumlah_kamar;
//        sources.detailkamar.mulai = mulai;
//        sources.detailkamar.akhir = akhir;
//        sources.Detailkamar.nik = oneAlamat.pph21;
        sources.detailkamar.save();
        
        oneAlamat.next(i);
        sources.detailkamar.collectionRefresh();
    }
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button45", "click", button45.click, "WAF");
// @endregion
};// @endlock
