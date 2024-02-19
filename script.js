//tasks-

// 2.  and grand total price jog hobe
// bonus-
// coupon btn disable coupon code use korle apply kora possible, apply click korle coupon input hide hobe discount price koto paise display hobe, bhul coupon code dile alert dite hobe and 4 ta seat book korle unable hobe [disable nei]
// 4 tar beshi kew select korte parbe na, korle alert dekhate hobe
// new 15 hole grand total price e 15 % discount hobe
// couple 20 dile 20% discount





// updated task-



// 2. bonus- 4 ta seat select, coupon apply korle discount, grand total price e, 
const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
let seat = 40;
let counter = 0;

for(const btn of allBtn){
    btn.addEventListener('click', function(e){

        e.target.style.backgroundColor = "#1DD100"
        e.target.setAttribute('disabled', true);
        
     count = count + 1;
     const ticketCount = document.getElementById('ticket-count');
     ticketCount.innerText = count;


     seat = seat-1;
     const seatLeft = document.getElementById('seat-left');
     seatLeft.innerText = seat;

     const totalCost = document.getElementById('total-price').innerText;
     const convertedTotalCost = parseInt(totalCost);

     const sum = convertedTotalCost + parseInt('550')
     document.getElementById('total-price').innerText = sum;

      const grandTotal = document.getElementById('grand-total').innerText;
      const convertedGrandTotal = parseInt(grandTotal);

      const sum2 = convertedGrandTotal + parseInt('550');
      document.getElementById('grand-total').innerText = sum2;




     const selectContainer = document.getElementById('selected-ticket-container');
     const div = document.createElement('div');
     const seatName = e.target.innerText;

     const h3 = document.createElement('h3')
     h3.innerText = seatName;
     const p1 = document.createElement('p');
     p1.innerText = "Economy";
     const p2 = document.createElement('p');
     p2.innerText = "550";


    //  append child
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    selectContainer.appendChild(div);

    div.classList.add("flex" , "text-base" , "inter-medium" , "text-gray-400" , "gap-40");

    const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click' , function(){

    // get the value from input
    const couponElement = document.getElementById('input-field');
    const couponCode = couponElement.value;
    
    counter = counter + 1;
    

    if(counter = 4){
        if(couponCode === "NEW15" ){
            const inputDiscount = document.getElementById('input');
            inputDiscount.classList.add("hidden");
            const discountPrice = document.getElementById('discount-price');
            discountPrice.classList.remove('hidden');
            console.log('bravo')
            
            const discountAmount = document.getElementById('discount-amount');
            sum = sum *0.15;

            discountAmount.innerText = price;
            

            console.log( )

        }
        else{
            alert('Invalid coupon');
        }


    }
    else{
        alert('You have to book 4 seats to get the discount!')
    }
})

    })
}

// coupon button
// const applyBtn = document.getElementById('apply-btn');
// applyBtn.addEventListener('click' , function(){

//     // get the value from input
//     const couponElement = document.getElementById('input-field');
//     const couponCode = couponElement.value;

    

//     if(getseat > 2200){
//         if(couponCode === "NEW15" ){
//             const inputDiscount = document.getElementById('input');
//             inputDiscount.classList.add("hidden");
//             const discountPrice = document.getElementById('discount-price');
//             discountPrice.classList.remove('hidden');
//             console.log('bravo')
            
//             const discountAmount = document.getElementById('discount-amount');
//             price = price *0.15;

//             discountAmount.innerText = price;
            

//             console.log( )

//         }
//         else{
//             alert('Invalid coupon');
//         }


//     }
//     else{
//         alert('You have to book 4 seats to get the discount!')
//     }
// })


    // function setInnerText (id, value){
        // document.getElementById(id).innerText = value;
    // }









