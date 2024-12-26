let count = 0;

/* Increment the counter */
function incrementCounter() {
  count += 1;
  const counterElement = document.getElementById('counterDisplay');
  counterElement.textContent = `Counter: ${count}`;
}

/* Show or hide the counter */
function toggleCounter() {
  const checkBox = document.getElementById("counterCheckbox");
  const counterControl = document.getElementById('counterDisplay');

  if (checkBox.checked) {
    counterControl.style.display = "block";
  } else {
    counterControl.style.display = "none";
  }
}

/* Play the main sound */
function playSound() {
  const playAudio = document.getElementById("playAudio");
  playAudio.currentTime = 0; // Reset to start
  playAudio.play();
}

/* Play the extended sound */
function playExtendedSound() {
  const extendPlayAudio = document.getElementById("extendPlayAudio");
  extendPlayAudio.currentTime = 0; // Reset to start
  extendPlayAudio.play();
}

/* Toggle the settings visibility */
function openSettings() {
  const settingsCard = document.getElementById('settingsCard');
  settingsCard.classList.toggle('show');
}

/* Toggle between default and custom themes */
function toggleTheme() {
  const themeCheckbox = document.getElementById("themeCheckbox");
  const backgroundInput = document.getElementById("newBackground");

  if (themeCheckbox.checked) {
    backgroundInput.style.display = "none";
    document.body.style.background = 'black';
  } else {
    backgroundInput.style.display = "block";
    document.body.style.background = backgroundInput.value;
  }
}

/* Change the background color based on user selection */
function changeBackgroundColor() {
  const backgroundInput = document.getElementById('newBackground');
  document.body.style.background = backgroundInput.value;
}

/* Initialize event listeners after the DOM content is loaded */
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('wrapper');
  const button = document.getElementById('button');
  const innerButton = document.getElementById('innerButton');
  const settingsIcon = document.getElementById('settingsIcon');
  const themeCheckbox = document.getElementById('themeCheckbox');
  const backgroundInput = document.getElementById('newBackground');
  const counterCheckbox = document.getElementById('counterCheckbox');

  // Increment counter when wrapper is clicked
  wrapper.addEventListener('click', incrementCounter);

  // Play main sound when button is clicked
  button.addEventListener('click', playSound);

  // Play extended sound when inner button is double-clicked
  innerButton.addEventListener('dblclick', playExtendedSound);

  // Toggle settings card when settings icon is clicked
  settingsIcon.addEventListener('click', openSettings);

  // Toggle counter display when counter checkbox is changed
  counterCheckbox.addEventListener('change', toggleCounter);

  // Toggle theme when theme checkbox is changed
  themeCheckbox.addEventListener('change', toggleTheme);

  // Change background color when color input is changed
  backgroundInput.addEventListener('change', changeBackgroundColor);

});