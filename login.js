document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '15082006' && password === '20022005') {
            // Success! Redirect to the main page
            window.location.href = 'main.html';
        } else {
            // Error
            errorMessage.textContent = 'Incorrect credentials. Try again! 💔';
            
            // Add a little shake animation class
            const container = document.querySelector('.login-container');
            container.classList.add('shake');
            setTimeout(() => {
                container.classList.remove('shake');
            }, 500);
        }
    });
});
