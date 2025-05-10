// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
   const button = document.getElementById("changeColorButton");
    button.style.backgroundColor = "Orange";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  const button = document.getElementById("changeColorButton");
  button.style.backgroundColor= "White";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay");
  keyPressDisplay.textContent = `${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
 const textInput = document.getElementById("textInput");
 const textInputDisplay = document.getElementById("textInputDisplay");
 textInput.addEventListener("input", function (event){
 textInputDisplay.textContent = event.target.value;
 })
}

// Attach Event Listenersz

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)
