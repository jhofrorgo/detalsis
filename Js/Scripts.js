function fecha(){	
				
	var mydate=new Date() 
	var year=mydate.getYear() 
	if (year < 1000) 
	year+=1900 
	var day=mydate.getDay() 
	var month=mydate.getMonth() 
	var daym=mydate.getDate() 
	if (daym<10) 
	daym="0"+daym 
	var dayarray = new Array("Domingo,","Lunes,","Martes,","Miércoles,","Jueves,","Viernes,","Sábado,")
	var montharray = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre")
	document.write("<center>"+dayarray[day]+" "+daym+" de "+montharray[month]+" de "+year+"</center") 
}
/*aca va la funcion del slider*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
