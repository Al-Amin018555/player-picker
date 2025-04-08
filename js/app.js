const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-players-container');
        const div = document.createElement('div');
        div.classList.add('flex', 'gap-7', 'justify-center')

        const p1 = document.createElement('p');
        p1.innerText = name;

        const p2 = document.createElement('p');
        p2.innerText = price;

        const p3 = document.createElement('p');
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);
        
        event.target.setAttribute('disabled','true');
        
        if(getConvertedValue('cart') + 1 > 6){
            alert("You can't pick more player than six");
            return;
        }
        event.target.parentNode.parentNode.style.backgroundColor = 'gray';

        
        const budget = getConvertedValue('budget');
        document.getElementById('budget').innerText = budget - parseInt(price);

        const cartCount = getConvertedValue('cart');
        document.getElementById('cart').innerText = cartCount + 1;

        const leftPlayer = getConvertedValue('left');
        document.getElementById('left').innerText = leftPlayer - 1;  

        updatedTotalCost(price);
        updatedGrandtotalCost();


    })
}

function updatedTotalCost(price) {

    const totalCost = getConvertedValue('total-cost');
    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;
    document.getElementById('total-cost').innerText = sum;

}

function updatedGrandtotalCost(status) {
    const totalCost = getConvertedValue('total-cost');
    if (status) {
        const couponCode = document.getElementById('coupon').value;
        if (couponCode === "love420") {
            const discounted = totalCost * 0.2;
            const grandTotal = totalCost - discounted;
            document.getElementById('grand-total').innerText = grandTotal;

        }
        else {
            alert('enter a valid coupon code');
        }

    }

    else {
        document.getElementById('grand-total').innerText = totalCost;
    }


}

function getConvertedValue(id) {

    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}


