document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
           
            // Perform login logic here (e.g., check credentials)
            console.log("Login submitted:", username, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const email = document.getElementById("email").value;
            const newUsername = document.getElementById("new-username").value;
            const newPassword = document.getElementById("new-password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            // Add client-side validation here
            if (newPassword !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return;
            }

            // Perform registration logic here (e.g., create a new user)
            console.log("Registration submitted:", firstName, lastName, email, newUsername, newPassword);
        });
    }
});
