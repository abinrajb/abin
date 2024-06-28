sessionStorage.setItem("flag","false");
sessionStorage.setItem("already-exists",'Username already exists.!');
sessionStorage.setItem("new&confirm_password","New password & Confirm password doesn't match");
sessionStorage.setItem("fillAllFields","Fill all the above fields");

// Toggle password visibility
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('newpassword-text');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
document.getElementById('toggle-Confirmpassword').addEventListener('click', function() {
    const passwordField = document.getElementById('confirmpassword-text');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-text').value;
    const newpassword = document.getElementById('newpassword-text').value;
    const confirmpassword = document.getElementById('confirmpassword-text').value;
    if(newpassword == confirmpassword){
        if (username && newpassword && confirmpassword) {
            if (localStorage.getItem(username)) {
                
                document.getElementById("invalid-signup").innerHTML=sessionStorage.getItem('already-exists');
            } else {
                localStorage.setItem(username, password);
                alert('Signup successful. You can now log in.');
                document.getElementById('login-form').reset();
                sessionStorage.setItem("flag","true")
                window.location.href = 'index.html';
            }
        } 
        else {
            document.getElementById("invalid-signup").innerHTML=sessionStorage.getItem('fillAllFields');
        }
    }
    else {
        document.getElementById("invalid-signup").innerHTML=sessionStorage.getItem('new&confirm_password');
    }
});
