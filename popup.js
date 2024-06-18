// popup.js

// Add an event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its ID
  const btn = document.getElementById("btn");

  // Add a click event listener to the button
  btn.addEventListener("click", function () {
    // Send a message to the background script to set the alarm
    chrome.runtime.sendMessage({ time: "5" }, function (response) {
      // Handle the response if needed
      console.log(response);
    });
  });
});
