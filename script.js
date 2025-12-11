document.addEventListener('DOMContentLoaded', () => {
  const changeBtn = document.getElementById('change_button');
  const resetBtn = document.getElementById('reset_button');
  const blockId = document.getElementById('block_id');
  const colourId = document.getElementById('colour_id');

  function clearAll() {
    document.querySelectorAll('.grid-item').forEach(el => {
      // ensure fully transparent (Cypress expects rgba(0,0,0,0))
      el.style.background = 'transparent';
    });
  }

  changeBtn.addEventListener('click', () => {
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

    // reset all cells first
    clearAll();

    // find the target by numeric id '1'..'9'
    const target = document.getElementById(String(idNum));
    if (!target) {
      alert('Grid not found — enter id between 1 and 9');
      return;
    }

    // Accept both named CSS colors like 'red' and hex values like '#ff0000'
    target.style.background = colourVal;
  });

  resetBtn.addEventListener('click', () => {
    clearAll();
    blockId.value = '';
    // leave colour input as-is or clear if you prefer:
    // colourId.value = '';
  });
});
