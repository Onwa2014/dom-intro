//get a reference to the calculate button
var calcBillBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotal =  document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");






//create the function that will be called when the calculate button is pressed
// add event listener
function calculateBtnClicked(){
  billTotal.classList.remove("danger");
  billTotal.classList.remove("warning");
    var sum = 0;
    var inputString = billStringElement.value;
    //  * this function should read the string value entered - split it on a comma.
     var list = inputString.split(',');
//  * loop over all the entries in the the resulting list
     list.forEach(function(item){
       //  * check if it is a call or an sms and add the right amount to the overall total
       if(item.trim() === "call"){
         sum += 2.75;
       }
       else if(item.trim() === "sms"){
         sum += 0.75;
       }
     })
    //  console.log(sum);
    var totalBill = sum.toFixed(2);
    //  * once done looping over all the entries - display the total onto the screen in the billTotal element
    billTotal.innerHTML = totalBill;
    if (totalBill >= 30){
      console.log("onwa");
        // adding the danger class will make the text red
        billTotal.classList.add("danger");
    }
    else if (totalBill >= 20){
        billTotal.classList.add("warning");
    }

}
//link the function to a click event on the calculate button
calcBillBtn.addEventListener('click', calculateBtnClicked);
