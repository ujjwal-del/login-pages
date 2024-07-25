const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const id = document.getElementById('id').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('name-error').innerHTML = 'Please enter your name';
        isValid = false;
    } else {
        document.getElementById('name-error').innerHTML = '';
    }

    if (id === '') {
        document.getElementById('id-error').innerHTML = 'Please enter your ID';
        isValid = false;
    } else {
        document.getElementById('id-error').innerHTML = '';
    }

    if (email === '') {
        document.getElementById('email-error').innerHTML = 'Please enter your email';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('email-error').innerHTML = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('email-error').innerHTML = '';
    }

    if (password === '') {
        document.getElementById('password-error').innerHTML = 'Please enter your password';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('password-error').innerHTML = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        document.getElementById('password-error').innerHTML = '';
    }

    if (isValid) {
        // Submit the form data to the server
        // You can add your server-side validation and login logic here
        console.log('Form submitted:', { name, id, email, password });
    }
})
