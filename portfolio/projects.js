console.log(localStorage.getItem("flag"))
if(localStorage.getItem("flag")=="success") {
   
}
else{
    alert("please login");
    window.location.href = 'login.html'; // Redirect to the main page
}
