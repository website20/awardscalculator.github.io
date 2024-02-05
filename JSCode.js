var changeHandled = [].slice.call(document.querySelectorAll('.change-handled'));
var total = document.querySelector('.total');

function calc() {
    total.textContent = changeHandled.reduce(function(total, el) {
      return total += Number(el.value);
    }, 0);
}

changeHandled.forEach(function(el) {
   el.onblur = calc;
});
