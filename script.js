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

    counter = counter + 1;
    console.log(counter);

    if(couponCode === "NEW15" ){
         const discountAmount = document.getElementById('discount-amount');
             const amount = sum * 0.15;

             discountAmount.innerText = amount;
            return;
        }
        else{
            e.target.setAttribute('disable', true);
            alert('You can book 4 seats at a time!');
      }
      applyBtn();
    })

    

     function applyBtn(){

    // get the value from input
    const couponElement = document.getElementById('input-field');
    const couponCode = couponElement.value;
    
        if(couponCode === "NEW15" || couponCode === "Couple 20" ){
            const inputDiscount = document.getElementById('input');
            inputDiscount.classList.add("hidden");
            const discountPrice = document.getElementById('discount-price');
            discountPrice.classList.remove('hidden');

            
           }
        else{
          alert('Invalid coupon')
         }
  }
    
}