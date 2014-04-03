

model.Pemesanan.jumlah_hari.events.onValidate = function() {
	// Add your code here;
	if(this.jumlah_hari == null){
                return {error: 100, errorMessage: 'Jumlah hari tidak boleh kosong.'}
            }
};
