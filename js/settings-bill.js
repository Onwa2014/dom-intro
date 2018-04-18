var checkedRadioBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
var addBtn = document.querySelector(".add");
var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");
var totalSum = document.querySelector(".totalSettings");


//get the setted values.
var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var warningValueElem = document.querySelector(".warningLevelSetting");
var criticalValueElem = document.querySelector(".criticalLevelSetting");
var updateBtnElem = document.querySelector(".updateSettings");

var initCallCost = 0;
var initSmsCost = 0;
var initWarning = 0;
var initCritical = 0;
var initTotal = 0;

function settingsUpdate(){
  callCost = callCostElem.value;
  //console.log(callCost);
  smsCost = smsCostElem.value;
  warningLevel = warningValueElem.value;
  criticalLevel = criticalValueElem.value
}

updateBtnElem.addEventListener('click', settingsUpdate)

function calcBillWithSetting(){

  console.log(callCost);

  checkedRadioBtn = checkedRadioBtnElem.value;

  if(checkedRadioBtn === "call"){
    callTotal += callCost;
  }
  else if(checkedRadioBtn= "sms"){
    smsTotal += smsCost;
  }
callTotalElem.innerHTML = callTotal.toFixed(2);
smsTotalElem.innerHTML = smsTotal.toFixed(2);
var totalSum = callTotal + smsTotal;
totalSumElem.innerHTML = totalSum.toFixed(2);

if (totalSum >= criticalValue){
      // adding the danger class will make the text red
      totalSumElem.classList.add("danger");
  }
  else if (totalSum >= warningValue){
      totalSumElem.classList.add("warning");
  }

}
addBtn.addEventListener('click', calcBillWithSetting)
