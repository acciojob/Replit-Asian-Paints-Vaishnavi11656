//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset");
const blockId = document.getElementById("block_id");
const colourId = document.getElementById("colour_id");

function clearAll() {
  // select by class "grid-item" (not grid_item)
  document.querySelectorAll('.grid-item').forEach((el) => {
    el.style.background = 'transparent';
  });
}

changeBtn.addEventListener("click", () => {
  const idVal = blockId.value.trim();
  const colourVal = colourId.value.trim();

  const idNum = Number(idVal);
  if (!idVal || Number.isNaN(idNum) || idNum < 1 || idNum > 9) {
    alert('Please enter a valid block id between 1 and 9');
    return;
  }

  if (!colourVal) {
    alert('Please pick a colour');
    return;
  }

  clearAll();

  // getElementById expects a string; use String(idNum)
  const target = document.getElementById(String(idNum));
  if (!target) {
    alert('Grid not found — enter id between 1 and 9');
    return;
  }

  target.style.background = colourVal;
});

resetBtn.addEventListener("click", () => {
  clearAll();
  blockId.value = '';
  // optionally reset colour picker: colourId.value = '#000000';
});
