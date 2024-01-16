let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
    if (count === 3) {
      console.log("Your Instagram post gained 10 followers! Congratulations!");
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 6) {
      console.log("Your Instagram post gained 20 followers! Keep it up!");
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}