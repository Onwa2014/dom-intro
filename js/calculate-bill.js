//get a reference to the calculate button
var calcBillBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotal =  document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");






//create the function that will be called when the calculate button is pressed
// add event listener
function calculateBtnClicked(){
    var sum = 0;
    var inputString = billStringElement.value;
     var list = inputString.split(',');

     list.forEach(function(item){
       if(item.trim() === "call"){
         sum += 2.75;
       }
       else if(item.trim() === "sms"){
         sum += 0.75;
       }
     })
    //  console.log(sum);
    var totalBill = sum.toFixed(2);
    billTotal.innerHTML = totalBill;

}

calcBillBtn.addEventListener('click', calculateBtnClicked);
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
