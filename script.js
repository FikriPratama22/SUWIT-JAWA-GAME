var tanya = true;
while (tanya){
//menangkap pilihan player
var p = prompt ("Pilih : gajah, semut atau orang");

//pilihan dari COM.
//random
var comp = Math.random();

if(comp < 0.34){
	comp = "gajah";
}else if (comp >= 0.34 && comp < 0.67){
	comp = "orang";
}else{
	comp = "semut";
}


var hasil = "";
//menentukan rules
if(p == comp){
	hasil = "SERI! anda turut diperhitungkan sih.";

}else if( p == "gajah"){
	hasil = (comp == "orang")? "ANDA menang? ini sebuah ke-MUSTAHILAN bagaikan MUSTAHILNYA AKU BERSATU PADAMU" : "ASW!! malah kalah, BERI MALU aja anda seperti FERDY SAMBO yang memberi malu kepada INSTANSI geng COKLAT!";

}else if ( p  == "orang") {
	hasil = (comp == "gajah")? "WADUH ENTE KALAH BODOH!" : "NYAN PEKK KAU MENANG! hadiahnya minta aja SEPEDA ama si JOKO";

}else if (p == "semut"){

		hasil = (comp == "orang") ? "LAH KOK KAU KALAH GOBLOK?!!" : "EH PANDAI PULAK KAU MENANG YE QMAK!! tang kepong-pong kosang kesong-song NangKASEH nangUNTAT kuyongSayang yang!";
	}else{
		hasil = ("YANG ANDA INPUT TAK SESUAI KONTOL! mana ade binatang "+ p +" tuh ade didalam PERMAINAN SUWET JAWE nih bodoh! bende "+ p +" tuh ade dalam kepalak hotak kau kalik nam! dah tue pon BODOH! BAPAK KAU AGIK MENG-"+p+"!");
}


//tampilkan hasilnya
alert("ANDA memilih : "+ p +", dan KOMPUTER memilih : " + comp + "\nmaka saya berkata kepadamu bahwa......... " + hasil);

tanya = confirm("KAU NAK MAEN AGIK NDAK WAK?");
}

alert("MAKKASEH BANYAK DAH MAEN BENDE INI YE WAK!\nMaaf Kalo saye ade berkate TOXIC, HEHEHE!");