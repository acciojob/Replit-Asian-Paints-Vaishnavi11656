//your JS code here. If required.
const changebtn = document.getElementById("change_button");
const resetbtn = document.getElementById("reset");
const blockid = document.getElementById("block_id");
const colourid = document.getElementById("colour_id");

function clearAll(){
	document.querySelectorAll('.grid_item').forEach((e) ()=>{
		e.style.background = 'transparent';
	});
}

changeBtn.addEventListener("click",()=>{
	const idval = blockid.value.trim();
	const colourval = colourid.value.trim();


	const idnum = Number(idval);
	if(!idnum || Number.isNaN(idnum) || idnum<1 || idnum >9){
		alert('please enter a valid block id between 1 and 9');
		return;
	}

	if(!colourval){
		alert('please pick a colour');
		return;
	}

	clearAll();

	const target = document.getElementById(string(idnum));
	if(!target){
		alert('Grid not found ,enter id between 1 and 9');
		return;
	}
     target.style.background = colourval;
	
})
return.addEventListener("click",()=>{
	clearAll();
		blckInput.value = '';
})
