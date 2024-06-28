console.log(sessionStorage.getItem("flag"))
if(localStorage.getItem("flag")=="success") {
   localStorage.setItem("f1","Projects");
   localStorage.setItem("f2","Emotion Based Music Player");
   localStorage.setItem("f3","Project 1");
   localStorage.setItem("f4","AI Trainer");
   localStorage.setItem("f5","Project 2");

   document.getElementById("projects-heading").innerHTML=localStorage.getItem("f1");
   document.getElementById("ebmp_title").innerHTML=localStorage.getItem("f2");
   document.getElementById("project1-heading").innerHTML=localStorage.getItem("f3");
   document.getElementById("AITtitle").innerHTML=localStorage.getItem("f4");
   document.getElementById("project2-heading").innerHTML=localStorage.getItem("f5");
}
else{
    alert("please login");
    window.location.href = 'login.html'; // Redirect to the main page
}
