var billItemTypeElem = document.querySelector(".billTypeText");
//create a variable that will keep track of the total bill
var addBtnElem = document.querySelector(".addToBillBtn");
var callTotalElem= document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalSumElem = document.querySelector(".totalOne");


var callTotal = 0;
var smsTotal = 0;
function textBillTotal(){
var inputBillType = billItemTypeElem.value.trim();

if(inputBillType === "call"){
  callTotal += 2.75
}
else if(inputBillType === "sms"){
  smsTotal += 0.75;
}
  //check if it is a call or sms
  //add to its correct total
  //display the total
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
addBtnElem.addEventListener('click', textBillTotal);

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
