var checkedRadioBtnElem = document.querySelector("input[name='billItemType']:checked");
var addBtnElem = document.querySelector(".radioBillAddBtn");
var callTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem= document.querySelector(".smsTotalTwo");
var totalSumElem = document.querySelector(".totalTwo");

var callTotal = 0;
var smsTotal = 0;

function radioBillTotal(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked").value;
  if(checkedRadioBtn === "call"){
    callTotal += 2.75;
  }
  else if(checkedRadioBtn= "sms"){
    smsTotal += 0.75;
  }
callTotalElem.innerHTML = callTotal.toFixed(2);
smsTotalElem.innerHTML = smsTotal.toFixed(2);
var totalSum = callTotal + smsTotal;
totalSumElem.innerHTML = totalSum.toFixed(2);

if (totalSum >= 50){
      // adding the danger class will make the text red
      totalSumElem.classList.add("danger");
  }
  else if (totalSum >= 30){
      totalSumElem.classList.add("warning");
  }


}
addBtnElem.addEventListener('click', radioBillTotal);
