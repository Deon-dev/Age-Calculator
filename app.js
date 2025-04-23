// Add an event listener to the calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get the input value for the date of birth
    const dobInput = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is empty
    if (!dobInput) {
        resultDiv.textContent = 'Please select your date of birth.';
        return;
    }

    // Parse the date of birth and get today's date
    const dob = new Date(dobInput);
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Display the result
    resultDiv.textContent = `You are ${age} years old.`;
});