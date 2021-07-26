const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipBtn = document.querySelectorAll(".perc_btn");
const customTip = document.getElementById("custom");

const tipAmount = document.querySelector("#tip_Amount");
const totalAmount = document.querySelector("#total_Amount");
const resetBtn = document.getElementById("reset");
const errMsg = document.querySelector(".err-mssg");

let amt, tip, ppl;
reset();
resetBtn.addEventListener("click", reset);
billInput.addEventListener("input", () => {
  amt = Number(billInput.value);
  if (ppl > 0) calc();
});
peopleInput.addEventListener("input", () => {
  ppl = Number(peopleInput.value);
  if (ppl < 1) {
    peopleInput.classList.add("error");
    errMsg.style.visibility = "visible";
  } else {
    peopleInput.classList.remove("error");
    errMsg.style.visibility = "hidden";
  }
  if (ppl > 0) calc();
});
// for (i in tipBtn) {
//   tipBtn[i].onclick = function () {
//     tip = Number(this.value);
//     customTip.value = "";
//   };
// }

tipBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipBtn.forEach((btnx) => {
      btnx.classList.remove("selected");
    });
    btn.classList.add("selected");
    tip = btn.dataset.percentage;
    custom.value = "";
    if (ppl > 0) calc();
  });
});

customTip.addEventListener("input", () => {
  document.querySelector(".perc_btn.selected").classList.remove("selected");
  tip = Number(customTip.value);
  if (ppl > 0) calc();
});

function reset() {
  document.querySelector('[data-percentage= "15"]').classList.add("selected");
  peopleInput.classList.remove("error");
  errMsg.style.visibility = "hidden";
  resetBtn.classList.add("gray");
  resetBtn.disabled = true;
  tip = 15;
  amt = ppl = 0;
  billInput.value = "";
  peopleInput.value = "";
  customTip.value = "";
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  tipBtn.forEach((e) => {
    e.classList.remove("selected");
    document.querySelector('[data-percentage= "15"]').classList.add("selected");
  });

  // document.querySelector(".perc_btn.selected").classList.remove("selected");
}
function calc() {
  resetBtn.disabled = false;
  resetBtn.classList.remove("gray");
  let totalTip = (tip * amt) / 100;
  let totalAmt = amt + totalTip;
  tipAmount.innerHTML = "$" + (totalTip / ppl).toFixed(2);
  totalAmount.innerHTML = "$" + (totalAmt / ppl).toFixed(2);
}
