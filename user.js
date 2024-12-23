document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const registrationMessage = document.getElementById('registrationMessage');
    const loginMessage = document.getElementById('loginMessage');

    let users = [];

    // Registration form submission
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;
        const email = document.getElementById('reg-email').value;

        // Validation checks
        if (users.some(user => user.username === username)) {
            registrationMessage.textContent = 'Username already exists!';
        } else if (password.length < 6) {
            registrationMessage.textContent = 'Password must be at least 6 characters!';
        } else if (!validateEmail(email)) {
            registrationMessage.textContent = 'Invalid email!';
        } else {
            // Save user details
            users.push({ username, password, email });
            registrationMessage.textContent = 'Registration successful!';
            registrationMessage.style.color = 'green';
        }
    });

    // Login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Validation check
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            loginMessage.textContent = `Welcome, ${user.username}!`;
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Invalid username or password!';
            loginMessage.style.color = 'red';
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});