const submitButton = document.querySelector("#submit-button");
const userInput = document.querySelector("#email-input");
const errorIcon = document.querySelector("#error-icon");
const errorMsg = document.querySelector(".error-message");

submitButton.addEventListener("click", function (e) {
    const acceptedEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const userEmail = userInput.value;

    if (!userEmail.match(acceptedEmail) || userEmail.length === 0) {
        e.preventDefault()
        userInput.style.border = "1px solid hsl(0, 93%, 68%)";
        errorIcon.classList.remove("hidden");
        errorMsg.classList.remove("hidden");
    } else {
        userInput.style.border = "1px solid hsl(0, 36%, 70%);";
        errorIcon.classList.add("hidden");
        errorMsg.classList.add("hidden");
    }
});

