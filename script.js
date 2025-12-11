//your JS code here. If required.
const changebtn = document.getElementById("change_button");
const resetbtn = document.getElementById("reset");
const blockid = document.getElementById("block_id");
const colourid = document.getElementById("colour_id");

function clearAll(){
	document.querySelectorAll('grid_item').forEach(e ()=>{
		e.target.background = 'transparent';
	});
}

changeBtn.addEventListner(click,()=>{
	const idval = blockInput.value.trim();
	const colourval = colourInput.value.trim();


	const idnum = Number(idnum);
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
return.addEventListner(click,()=>{
	clearAll();
		blckInput.value = '';
})
