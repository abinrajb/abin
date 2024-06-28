// Set initial flag value
sessionStorage.setItem("flag", "false");

// localStorage.setItem("id1","! invalid username");
localStorage.setItem("password1","invalid username/password !");
function cleartextfield(){
    document.getElementById('username-text').value = '';
    document.getElementById('password-text').value = '';
}
// Toggle password visibility
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password-text');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
// Event listener for login form
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-text').value;
    const password = document.getElementById('password-text').value;

    if (username && password) {
        const storedPassword = localStorage.getItem(username);

        if (storedPassword === password) {
            sessionStorage.setItem("flag", "success");
            window.location.href = 'index.html'; // Redirect to the main page
        } else {
            document.getElementById("invalid-password").innerHTML=localStorage.getItem("password1");
        }
    } else {
        alert('Please fill in both fields.');
    }
    document.getElementById('username-text').value = '';
    document.getElementById('password-text').value = '';
});