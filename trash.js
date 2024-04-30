
//getting checkboxes








shawarmaList.forEach(option => {
    const incrementButton = option.querySelector(".incrementButton");
    const decrementButton = option.querySelector(".decrementButton");
    const numberList = option.querySelector(".numberQuantity");
    let listedOption = option.querySelector(".listPrice");
    let listOption = listedOption.textContent;
   let optionValue = parseInt(listOption);
   let optionValueComma = optionValue.toLocaleString();
   listedOption.textContent = nairaSign + optionValueComma;
  
    let numberQuantity = 1;
  
    incrementButton.addEventListener('click', ()=> {
      if (numberQuantity >= 5) {
        console.log("not less than 1")
      } else {
  
         numberQuantity++;
       let orderAmount = listOption * numberQuantity;
       let orderAmountComma = orderAmount.toLocaleString();
       listedOption.textContent = nairaSign + orderAmountComma;
       console.log(listOption)
         console.log(listOption.toLocaleString());
         
        
      }
     
      numberList.textContent = numberQuantity;
     
    });
  
    decrementButton.addEventListener('click', ()=> {
      if (numberQuantity <= 1) {
        console.log("not more than 1")
      } else {
         numberQuantity--;
         let orderAmount = listOption * numberQuantity;
       let orderAmountComma = orderAmount.toLocaleString();
       listedOption.textContent = nairaSign + orderAmountComma;
         console.log(orderAmount.toLocaleString());
      }
     
      numberList.textContent = numberQuantity;
     
    });
    
  })



  
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

//add eventListener to each checkbox
checkboxes.forEach(function(checkbox){



  checkbox.addEventListener('change', function(){
    //get the label associated with the checkbox
    let label = document.querySelector('label[for="' + checkbox.id + '"]');

    // get the text content of the label
    let checkboxText = label.textContent;

    // get the text display element
    let textDisplay = document.getElementById('textDisplay');

    //check if the box is checked
  if(checkbox.checked) {

    // if checked append the text to the display elelment
    textDisplay.textContent += checkboxText + "\n";
    console.log(textDisplay.textContent);
  }

  else {
    //if unchecked remove the text from the display
    textDisplay.textContent = textDisplay.textContent.replace(checkboxText + "\n", '')
    console.log(textDisplay.textContent);
  }


  });


});





const OptionsList = [
  { name: "Chicken Shawarma", price: 5500 },
  { name: "Beef Shawarma", price: 5000 },
  { name: "Fish Shawarma", price: 6500 },
  { name: "Vegan Shawarma", price: 6000 },
  { name: "Mixed Shawarma", price: 9000 },
  { name: "Shawarma Plate", price: 8000 },
];


// increment button 

function increment(optionId) {
  let optionElement = document.getElementById(optionId);
  let priceElement = optionElement.querySelector('p:nth-of-type(2)');
  let currentPrice = parseInt(priceElement.innerText.split[1]);
  currentPrice +=1;
  priceElement.innerText = `${currentPrice};`
}




else if (cost2 === "") {
  const element2 = document.querySelector('.error2');
  let result2 = document.querySelector('.inputed2');
  result2.style.border = "2px solid red";
  element2.innerText =  "Please enter your email!";
  result2.focus();
  
setTimeout(function() {
  element2.innerText = "";
     }, 1500);

  } 

 else if (!cost2.includes("@") || !cost2.includes(".")) {
      const element2 = document.querySelector('.error2');
      let result2 = document.querySelector('.inputed2');
      result2.style.border = "2px solid red";
      element2.innerText =  "Please enter a valid email!";
      result2.focus();

        
  setTimeout(function() {
      element2.innerText = "";
         }, 1500);
  }

  


  else if (cost4 === "") {
      const element4 = document.querySelector('.error4');
      let result4 = document.querySelector('.inputed4');
      result4.style.border = "2px solid red";
      element4.innerText =  "Please enter your phone number!";
      result4.focus();
      
  setTimeout(function() {
      element4.innerText = "";
         }, 1500);
  } 

  else if (isNaN(cost4)) {
      const element4 = document.querySelector('.error4');
      let result4 = document.querySelector('.inputed4');
      result4.style.border = "2px solid red";
      element4.innerText =  "Please enter a valid phone number!";
      result4.focus();
      
  setTimeout(function() {
      element4.innerText = "";
         }, 1500);
  }

  else if (cost4.length < 11) {
    const element4 = document.querySelector('.error4');
    let result4 = document.querySelector('.inputed4');
    result4.style.border = "2px solid red";
    element4.innerText =  "Number must be up to 11 digits!";
    result4.focus();
    
setTimeout(function() {
    element4.innerText = "";
       }, 1500);
}

 else if (cost3 === "") {
      const element3 = document.querySelector('.error3');
      let result3 = document.querySelector('.inputed3');
      result3.style.border = "2px solid red";
      element3.innerText =  "Please enter your location!";
      result3.focus();
      
  setTimeout(function() {
      element3.innerText = "";
         }, 1500);
  } 

  
else if (cost3.length < 4 ) {
const element3 = document.querySelector('.error3');
let result3 = document.querySelector('.inputed3');
result3.style.border = "2px solid red";
    element3.innerText =  "Location must be more than 4 letters!";
    result3.focus();
    
setTimeout(function() {
    element3.innerText = "";
       }, 1500);
}

