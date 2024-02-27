const clickButton = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById('clickCount');
let count = 0;


clickCountDisplay.textContent = count;

clickButton.addEventListener('click', function() {
  
    count++;

    clickCountDisplay.textContent = count;
});
