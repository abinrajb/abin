localStorage.setItem("flag","false");
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-text').value;
    const password = document.getElementById('password-text').value;

    if (username && password) {
        if (localStorage.getItem(username)) {
            alert('Username already exists. Please choose another one.');
        } else {
            localStorage.setItem(username, password);
            alert('Signup successful. You can now log in.');
            document.getElementById('login-form').reset();
        }
    } else {
        alert('Please fill in both fields.');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-text').value;
    const password = document.getElementById('password-text').value;

    if (username && password) {
        const storedPassword = localStorage.getItem(username);

        if (storedPassword === password) {
            localStorage.setItem("flag","success");
            alert('Login successful.');
            window.location.href = 'index.html'; // Redirect to the main page
           
        } else {
            alert('Invalid username or password.');            
        }
    } else {
        alert('Please fill in both fields.');
    }
});
