// JavaScript Document
// The script file for web-site, created by Boris Avdeev
// Accomodation part
// this function will get height of window and set to special div element to 
// make better position for footer
function footer(){
"use strict";
// special element which will be placed between container and footer elements
var rasporka = document.getElementById('rasporka');
// get window's height 	
var h = window.innerHeight - 340;
// set window's height to special element
rasporka.style.height = h + "px" ;
}
//initiate variables and get value from accomodation HTML page
var divBackpackers = document.getElementById('backpackers');
var divBedAndBreakfast= document.getElementById('BedAndBreakfast');
var divCottages = document.getElementById('cottages');
var divHotels = document.getElementById('hotels');
// get special element for footer
var rasporka = document.getElementById('rasporka');
// get line element
var hrA = document.getElementById('hrA');

// The function will show backpackers
function showBackpackers() {
// this part will hide all parts, if user will click on the button again(easy for use)
	"use strict";
	if(divBackpackers.className === "show"){
		divBackpackers.className = "hidden";
		divBedAndBreakfast.className = "hidden";
		divCottages.className = "hidden";
	    divHotels.className = "hidden";
		//show special element
		rasporka.className = "show";
		// show line element
		hrA.className = "show";
	}
// this code will show backpacker part of HTML page	
	else{
        divBackpackers.className = "show";
		divBedAndBreakfast.className = "hidden";
		divCottages.className = "hidden";
	    divHotels.className = "hidden";
		rasporka.className = "hidden";
		hrA.className = "hidden";
	}
}

// The function will show bed and breakfast
function showBedAndBreakfast() {
	// this part will hide all parts, if user will click on button again(easy for use)
	"use strict";
	if(divBedAndBreakfast.className === "show"){
		divBackpackers.className = "hidden";
		divBedAndBreakfast.className = "hidden";
		divCottages.className = "hidden";
	    divHotels.className = "hidden";
		rasporka.className = "show";
		hrA.className = "show";
		
	}
// this code will show bed and breakfast part of HTML page	
	else{
        divBackpackers.className = "hidden";
		divBedAndBreakfast.className = "show";
		divCottages.className = "hidden";
	    divHotels.className = "hidden";
		rasporka.className = "hidden";
		hrA.className = "hidden";
	}
}
// The function will show Cottages
function showCottages() {
	// this part will hide all parts, if user will click on the button again(easy for use)
	"use strict";
	if(divCottages.className === "show"){
		divBackpackers.className = "hidden";
		divBedAndBreakfast.className = "hidden";
		divCottages.className = "hidden";
	    divHotels.className = "hidden";
		rasporka.className = "show";
		hrA.className = "show";
	}
// this code will show Cottages part of HTML page	
	else{
        divBackpackers.className = "hidden";
		divBedAndBreakfast.className = "hidden";
		divCottages.className = "show";
	    divHotels.className = "hidden";
		rasporka.className = "hidden";
		hrA.className = "hidden";
	}
}
// The function will show hotels
function showHotels() {
	// this part will hide all parts, if user will click on the button again(easy for use)
	"use strict";
	if(divHotels.className === "show"){
		divBackpackers.className = "hidden";
		divBedAndBreakfast.className = "hidden";
		divCottages.className = "hidden";
	    divHotels.className = "hidden";
		rasporka.className = "show";
		hrA.className = "show";
	}
// this code will show hotels part of HTML page	
	else{
        divBackpackers.className = "hidden";
		divBedAndBreakfast.className = "hidden";
		divCottages.className = "hidden";
	    divHotels.className = "show";
		rasporka.className = "hidden";
		hrA.className = "hidden";
	}
}

// Gallery part
// This method will change pictures every five seconds (slide show)
// Initiate array, counter and get/set images to array	
	var images = new Array();
    var i = 0;
     
    images[0] = '../images/gallery/img1.jpg';
    images[1] = '../images/gallery/img2.jpg';
    images[2] = '../images/gallery/img3.jpg';
    images[3] = '../images/gallery/img4.jpg';
    images[4] = '../images/gallery/img5.jpg';
    images[5] = '../images/gallery/img6.jpg';
    images[6] = '../images/gallery/img7.jpg';
    images[7] = '../images/gallery/img8.jpg';
    images[8] = '../images/gallery/img9.jpg';
// This function is engine of slideshow 
    function showImages() {
	  "use strict";
	  // this code will get image from array and set to img element in gallery page and will change by increase counter
      document.getElementById("img_load").src = images[i]; 
      i++;
	  // this code will set counter to zero or in another word, it will make this function as infinitive function	
      if (i === images.length) {
          i = 0;
         }
	  // this is timer to change img every five seconds	
      setTimeout("showImages()",5000);
    }   
// Newsletters part
// this method validate all fields and check box on newsletters page
function dataValidation() 
{
	// initiate variables and get values from text fields on the web page
	// initiate checkbox
	"use strict";
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var email = document.getElementById('email');
	var checkbox = document.getElementById('agree');
	// initiate error messages
	var errorName = "";
	var errorSurname = "";
	var errorEmail = "";
	var errorAgriment = "";
	// validate fileds, if value less than 3 letters, print error message
	if ( name.value.length < 3 )
	{
		errorName = "Incorrect Name, it must be at list 3 letters";
	}
	// validate fileds, if value less than 5 letters, print error message
	if ( surname.value.length < 5 )
	{
		errorSurname += "Incorrect Surname, it must be at list 5 letters";
	}
	// validate email
	// first validate length, if 0, print error message
	if ( email.value.length === 0 )
	{
		errorEmail += "Email address can not be empty";
	}
	// than validate @ and . by special methods
	else if ( email.value.indexOf('@') < 1 ||  email.value.lastIndexOf('.') < 1 ) {
        errorEmail += "Incorrect email address";
	}
	// validate checkbox if false, print error message
	if ( checkbox.checked === false )
	{
		errorAgriment += "You must agree with terms of service";
	}
    // get p tags and set error messages to it
	document.getElementById('errorName').innerHTML = errorName;
	document.getElementById('errorSurmame').innerHTML = errorSurname;
	document.getElementById('errorEmail').innerHTML = errorEmail;
	document.getElementById('errorAgriment').innerHTML = errorAgriment;	
	// validate if error messages have value null, show allert message 
	if ( errorName === "" && errorSurname === "" && errorEmail === "" && errorAgriment === "")
	{
		alert("Thank you, you were subscribed");
	}
}
//end
