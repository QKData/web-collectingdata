const infoForm = document.getElementById("info-form");
const email = document.getElementById("email");
const postalCode = document.getElementById("postal-code");
const country = document.getElementById("country");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

infoForm.noValidate = true;

infoForm.addEventListener("submit", (event) => {
    const zipCodePattern = /^\d{5}(?:-\d{4})?$/;
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
    } else {
        email.setCustomValidity("");
    }

    if (country.value.trim() === "") {
        country.setCustomValidity("Please enter a country name.");
    } else {
        country.setCustomValidity("");
    }

    if (postalCode.value.trim() !== "" && !zipCodePattern.test(postalCode.value.trim())) {
        postalCode.setCustomValidity("Please enter a valid US ZIP code (for example: 12345 or 12345-6789).");
    } else {
        postalCode.setCustomValidity("");
    }

    if (!strongPasswordPattern.test(password.value)) {
        password.setCustomValidity("Password must be at least 6 characters long and include uppercase, lowercase, and a number!");
    } else {
        password.setCustomValidity("");
    }

    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Please enter the same password!");
    } else {
        passwordConfirm.setCustomValidity("");
    }

    if (!infoForm.checkValidity()) {
        event.preventDefault();
        infoForm.reportValidity();
    }
});
