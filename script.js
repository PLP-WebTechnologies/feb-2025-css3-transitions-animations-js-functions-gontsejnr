// Function to retrieve user preferences from localStorage
function getUserPreference() {
  const theme = localStorage.getItem("theme");
}

// Function to set user preferences in localStorage
function setUserPreference(theme) {
  localStorage.setItem("theme", theme);
}

// Function to toggle the theme and apply animation
function toggleThemeAndAnimate() {
  const button = document.getElementById("animateButton");
  const animatedElement = document.getElementById("animatedElement");

  // Toggle between dark and light themes
  if (button.classList.contains("theme-light")) {
    button.classList.remove("theme-light");
    button.classList.add("theme-dark");
    setUserPreference("theme-dark");
  } else {
    button.classList.remove("theme-dark");
    button.classList.add("theme-light");
    setUserPreference("theme-light");
  }

  // Add animation class to the element
  animatedElement.classList.add("animate");

  // Remove animation class after the animation is complete to allow re-triggering
  setTimeout(() => {
    animatedElement.classList.remove("animate");
  }, 1000); // Match the duration of the CSS animation
}

// Apply the stored user preference when the page loads
window.onload = () => {
  const theme = getUserPreference();
  const button = document.getElementById("animateButton");

  // Apply the saved theme to the button
  button.classList.add(theme);

  // Set up the button click event to trigger the animation and theme toggle
  document
    .getElementById("animateButton")
    .addEventListener("click", toggleThemeAndAnimate);
};
