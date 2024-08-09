// Adding event listener to the form for submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing the default form submission behavior

    // Retrieving form input values
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var date = document.getElementById('date').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    
    // Regular expressions for validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{2}$/;
    var phonePattern = /^\d{10}$/;

    // Validating first name
    if (firstName.length < 5) {
        alert('First name must be at least 5 characters long.');
        return;
    }

    // Validating last name
    if (lastName.length < 5) {
        alert('Last name must be at least 5 characters long.');
        return;
    }

    // Validating email
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validating date
    if (!date.match(datePattern)) {
        alert('Date must be in the format dd/mm/yy.');
        return;
    }

    // Validating phone number
    if (!phone.match(phonePattern)) {
        alert('Phone must contain 10 digits.');
        return;
    }

    // Validating message
    if (message.length < 50) {
        alert('Message must be at least 50 characters long.');
        return;
    }

    alert('Form submitted successfully!');

    // Here you can add the code to send the form data to your email or server
});
