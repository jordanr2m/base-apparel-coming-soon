const submitButton = document.querySelector(".submit-button");
const userInput = document.querySelector(".email-input");
const errorMsg = document.querySelector(".error-message");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    userInput.classList.add("hidden");
    const email = userInput.value;
    
    const validEmail = validateEmail(email);
  
});

// Function to validate player's email input
const validateEmail = function (input) {
    const acceptedCharacters = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (input.length === 0) {
        errorMsg.classList.remove("hidden");
    } else if (!input.match(acceptedCharacters)) {
        errorMsg.classList.remove("hidden");
    } else {
        return input; // If all conditions are met, return the input
    }
};
