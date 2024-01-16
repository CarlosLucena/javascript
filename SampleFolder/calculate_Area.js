let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker(amounts) {
    amounts = [parseFloat(document.getElementById('amount1').value),
    parseFloat(document.getElementById('amount2').value),
    parseFloat(document.getElementById('amount3').value)]
    addAmountAndUpdateTotal(amounts)
} 

function addAmountAndUpdateTotal(amounts) {
    let total = amounts.reduce((acc, value) => acc + value)
    document.getElementById('Total').innerText = `The total amount is: ${total}`
} 