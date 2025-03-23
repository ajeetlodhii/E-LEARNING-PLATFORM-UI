document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;
    const startDate = document.getElementById('start-date').value;
    const message = document.getElementById('message').value;
    const terms = document.getElementById('terms').checked;
    const captcha = document.getElementById('captcha').value;

    if (captcha !== '8') {
        alert("Incorrect Captcha. Please try again.");
        return;
    }

    const phoneNumber = '919691822276'; // Your WhatsApp Number (India Country Code +91)
    const whatsappMessage = `
        Full Name: ${name}
        Email: ${email}
        Phone Number: ${phone}
        Date of Birth: ${dob}
        Selected Course: ${course}
        Preferred Start Date: ${startDate}
        Additional Message: ${message}
        Terms Agreed: ${terms}
    `;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, '_blank');

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('course').value = '';
    document.getElementById('start-date').value = '';
    document.getElementById('message').value = '';
    document.getElementById('terms').checked = false;
    document.getElementById('captcha').value = '';
});