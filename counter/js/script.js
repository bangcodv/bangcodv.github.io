
// begginer card
var begginer = 0;
var komBeginner=100;

function sumB(){
	if (begginer+1==komBeginner) {
		document.getElementById('begginnerCard').style.background="red";
		begginer=begginer+1;
	}else if (begginer==komBeginner) {
		begginer=begginer;
	}else{
		begginer = begginer+1;
	}
	return begginer;
}

function reductionB(){
	if(begginer>0){
		document.getElementById('begginnerCard').style.background="black";
		begginer= begginer-1
	}
	return begginer;
}

function refreshB(){
	document.getElementById('begginnerCard').style.background="black";
	begginer=0;
	return begginer;
}

function checkBeginner(){

	komBeginner=document.forms["begginnerForm"]["vkBeg"].value;
	return komBeginner;
}

// end begginner

// Explorer card
var explorer = 0;
var komExplorer=100;

function sumExplorer(){
	if (explorer+1==komExplorer) {
		document.getElementById('explorerCard').style.background="red";
		explorer=explorer+1;
	}else if (explorer==komExplorer) {
		explorer=explorer;
	}else{
		explorer = explorer+1;
	}
	return explorer;
}

function reductionExplorer(){
	if(explorer>0){
		document.getElementById('explorerCard').style.background="black";
		explorer= explorer-1
	}
	return explorer;
}

function refreshExplorer(){
	document.getElementById('explorerCard').style.background="black";
	explorer=0;
	return explorer;
}

function checkExplorer(){

	komExplorer=document.forms["explorerForm"]["vkExplorer"].value;
	return komExplorer;
}

// end Explorer

// Advance card
var advance = 0;
var komAdvance=100;

function sumAdvance(){
	if (advance+1==komAdvance) {
		document.getElementById('advanceCard').style.background="red";
		advance=advance+1;
	}else if (advance==komAdvance) {
		advance=advance;
	}else{
		advance = advance+1;
	}
	return advance;
}

function reductionAdvance(){
	if(advance>0){
		document.getElementById('advanceCard').style.background="black";
		advance= advance-1
	}
	return advance;
}

function refreshAdvance(){
	document.getElementById('advanceCard').style.background="black";
	advance=0;
	return advance;
}

function checkAdvance(){

	komAdvance=document.forms["advanceForm"]["vkAdvance"].value;
	return komAdvance;
}

// end advance

// excelent card
var excelent = 0;
var komExcelent=100;

function sumExcelent(){
	if (excelent+1==komExcelent) {
		document.getElementById('excelentCard').style.background="red";
		excelent=excelent+1;
	}else if (excelent==komExcelent) {
		excelent=excelent;
	}else{
		excelent = excelent+1;
	}
	return excelent;
}

function reductionExcelent(){
	if(excelent>0){
		document.getElementById('excelentCard').style.background="black";
		excelent= excelent-1
	}
	return excelent;
}

function refreshExcelent(){
	document.getElementById('excelentCard').style.background="black";
	excelent=0;
	return excelent;
}

function checkExcelent(){

	komExcelent=document.forms["excelentForm"]["vkExcelent"].value;
	return komExcelent;
}

// end excelent


