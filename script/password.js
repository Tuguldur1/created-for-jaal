
        // Fixed Password
        const FIXED_PASSWORD = "huurhun tuguldur";

        function checkPassword(event) {
            event.preventDefault(); // Prevent form submission
            const inputPassword = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            if (inputPassword === FIXED_PASSWORD) {
                // Redirect to the protected page
                window.location.href = "main.html";
            } else {
                errorMessage.textContent = "Password оо зөв хийгээч";
                errorMessage.style.display = "block";

                // Remove the error message after 3 seconds
                setTimeout(() => {
                    errorMessage.style.display = "none";
                }, 3000);
            }
            return false; // Prevent form default action
        }
