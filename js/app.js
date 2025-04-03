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

function updatedGrandtotalCost(){

    const totalCost = getConvertedValue('total-cost');
    document.getElementById('grand-total').innerText = totalCost;
    
}

function getConvertedValue(id) {

    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}