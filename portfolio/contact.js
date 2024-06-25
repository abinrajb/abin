if(localStorage.getItem("flag")=="success") {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert(`Hai ${name},I recieved your comment "${message}" from the mail id ${email}`);
            // Here you can add the code to send the form data to your backend
            this.reset(); // Clear the form
        } else {
            alert('Please fill in all fields.');
        }
    });
}
else{
    alert("please login");
    window.location.href = 'login.html'; // Redirect to the main page
}