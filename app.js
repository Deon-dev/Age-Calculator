document.getElementById('calculate-btn').addEventListener('click', function () {
    const dobInput = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    if (!dobInput) {
        resultDiv.textContent = 'Please select your date of birth.';
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    resultDiv.textContent = `You are ${age} years old.`;
});