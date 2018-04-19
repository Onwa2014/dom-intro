var addBtn = document.querySelector(".add");
var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");
var totalSumElem = document.querySelector(".totalSettings");


//get the setted values.
var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var warningValueElem = document.querySelector(".warningLevelSetting");
var criticalValueElem = document.querySelector(".criticalLevelSetting");
var updateBtnElem = document.querySelector(".updateSettings");

var callCost = 0;
var smsCost = 0;
var warning = 0;
var critical = 0;
var total = 0;

var totalCalls = 0;
var totalSms= 0

function settingsUpdate(){
  callCost = parseFloat(callCostElem.value);
  smsCost = parseFloat(smsCostElem.value);
  warning = parseFloat(warningValueElem.value);
  critical = parseFloat(criticalValueElem.value);

  totalSumElem.classList.remove("warning");
  totalSumElem.classList.remove("danger");

  if(total >= critical){
    totalSumElem.classList.remove("warning");
    totalSumElem.classList.add("danger");
  }
  else if (total >= warning) {
    totalSumElem.classList.add("warning");
    totalSumElem.classList.remove("danger");
  }




}

updateBtnElem.addEventListener('click', settingsUpdate)

function calcBillWithSetting(){

  var checkedRadioBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  checkedRadioBtn = checkedRadioBtnElem.value;
  console.log(critical);
  if(checkedRadioBtn === "call" && critical > total){
    totalCalls += callCost;
    total += callCost
  }
  else if(checkedRadioBtn= "sms" && critical > total){
    totalSms += smsCost;
      total += smsCost
  }
callTotal.innerHTML = totalCalls.toFixed(2);
console.log(totalCalls.toFixed(2));
smsTotal.innerHTML = totalSms.toFixed(2);
var totalSum = totalCalls + totalSms;
totalSumElem.innerHTML = totalSum.toFixed(2);

if (totalSum >= critical){
      // adding the danger class will make the text red
      totalSumElem.classList.add("danger");
  }
  else if (totalSum >= warning){
      totalSumElem.classList.add("warning");
  }





}
addBtn.addEventListener('click', calcBillWithSetting)
