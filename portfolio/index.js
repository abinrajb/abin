console.log(sessionStorage.getItem("flag"))
if(localStorage.getItem("flag")=="success") {
localStorage.setItem("text","‘If you want a thing bad enough to go out and fight for it, to work day and night for it, to give up your time, your peace and your sleep for it. If all that you dream and scheme is about it, and life seems useless and worthless without it, and if you gladly sweat for it and fret for it and plan for it and lose all your terror of the opposition for it, and if you simply go after that thing that you want with all of your capacity, strength and sagacity, faith, hope and confidence and stern pertinacity, if neither cold, poverty, famine, nor gout, sickness nor pain, of body and brain, can keep you away from the thing that you want, if dogged and grim you beseech and beset it, with the help of God, you will get it!”"); 
   document.getElementById("about-text").innerHTML=localStorage.getItem("text");
}
else{
    alert("please login");
    window.location.href = 'login.html'; // Redirect to the main page
}
