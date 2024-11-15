// Function to suggest a strong password
function suggestStrongPassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:\"<>?|[];',./`~";
    let password = "";
    const passwordLength = 10; // You can change the length if needed

    // Generate a random password
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Set the generated password to both the password and confirmPassword fields
    document.getElementById("password").value = password;
    document.getElementById("confirmPassword").value = password;

    // Display the suggested password to the user
    document.getElementById("passwordSuggestion").innerText = "Suggested Password: " + password;

    // Clear any previous error messages
    clearErrors();
}

// Function to validate the form
function validateForm(event) {
    let isValid = true;

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    clearErrors();

    if (fullName.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters long.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        isValid = false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
        isValid = false;
    } else if (phone === "1234567890" || phone === "0123456789") {
        document.getElementById("phoneError").innerText = "Phone Number cannot be 1234567890 or 0123456789";
        isValid = false;
    }

    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (password.toLowerCase() === "password") {
        document.getElementById("passwordError").innerText = "Do not use weak passwords. Create a strong password.";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password should be at least 8 characters.";
        isValid = false;
    } else if (password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById("passwordError").innerText = "The password should not be your User Name.";
        isValid = false;
    } 

    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Confirm Password must match your password.";
        isValid = false;
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }else{
        alert("Form submitted successfully!");

    }

    return isValid;
}

// Function to clear error messages
function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
}