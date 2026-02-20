document.getElementById('otp-btn').addEventListener('click', function() {
    var heading = document.querySelector('.container h1');
    var inputField = document.getElementById('phone-number');
    var button = document.getElementById('otp-btn');
    var phoneNumber = inputField.value;

    if (phoneNumber.trim() !== "") {
        // Change heading text
        heading.textContent = 'Verify OTP';

        // Change input placeholder text
        inputField.placeholder = 'Enter OTP';
        inputField.value = ""; // Clear the input field

        // Change button text
        button.textContent = 'Verify OTP ->';

        // Disable the radio button and input field to prevent changes
        inputField.readOnly = true;
        document.getElementById('updates').disabled = true;
    } else {
        alert("Please enter a valid mobile number.");
    }
});
