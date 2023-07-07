const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var currentHour = new Date().getHours();

var greetingLeftElement = document.getElementById("greeting-left");
var greetingRightElement = document.getElementById("greeting-right");

if (currentHour >= 0 && currentHour < 12) {
  greetingLeftElement.textContent = "Good Morning";
  greetingRightElement.textContent = "Good Morning";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingLeftElement.textContent = "Good Afternoon";
  greetingRightElement.textContent = "Good Afternoon";
} else {
  greetingLeftElement.textContent = "Good Evening";
  greetingRightElement.textContent = "Good Evening";
}