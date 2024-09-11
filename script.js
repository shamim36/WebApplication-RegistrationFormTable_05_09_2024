$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        var isValid = true;

        // Name validation
        var name = $("#name").val().trim();
        if (name === "") {
            alert("Please enter your name.");
            isValid = false;
        }

        // Email validation
        var email = $("#email").val().trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Password validation
        var password = $("#password").val().trim();
        var confirmPassword = $("#confirm_password").val().trim();
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        } else if (password !== confirmPassword) {
            alert("Passwords do not match.");
            isValid = false;
        }

        // District validation
        if ($("#district").val() === "") {
            alert("Please select your district.");
            isValid = false;
        }

        // About Me validation
        var aboutMe = $("#about_me").val().trim();
        if (aboutMe === "") {
            alert("Please tell us about yourself.");
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});
