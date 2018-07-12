/* 
function to perform actions on the DOM page.
*/

function validateFields() {

    var subjectVal = $('#subject');
    var eAppID = $('#appID').val();
	var eMail = $('#Email').val();
	var divisionVal = $('#division').val();
	var sectionVal = $('#section').val();
	var descriptionVal = $('#description').val();
	var lanUserId = $('#lUserId').val();
	var backupUserId = $('#bkupUserId').val();
	

if(eMail == '' && eAppID == '' && divisionVal == '' && sectionVal == '' && descriptionVal == '' && lanUserId == '' && backupUserId == '') {
	
	document.getElementById("errorHeader").style.display="block";
	document.getElementById("appIdCheck").innerHTML="App ID must not be empty";
	document.getElementById("emailCheck").innerHTML="Email must not be empty";
	document.getElementById("divisionCheck").innerHTML="Division must not be empty";
	document.getElementById("sectionCheck").innerHTML="Section must not be empty";
	document.getElementById("descriptionCheck").innerHTML="Description must not be empty";
	document.getElementById("userIdCheck").innerHTML="LAN User ID must not be empty";
    document.getElementById("bkupUserIdCheck").innerHTML="BackUp LAN User ID must not be empty";
	}
	
	//var regex = /^[0-9a-zA-Z\_]+$/;
	var regex = new RegExp('^[a-zA-Z0-9- ]*$');
    //var email = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');
	
	if(eAppID == '' || regex.test(eAppID) == false) {
    document.getElementById("errorHeader").style.display="block";
	document.getElementById("appIdCheck").innerHTML="App ID must not be empty and special characters not allowed";
		//alert("beta");
	}

	/*
	if(regex.test(eAppID) == false) {
    document.getElementById("errorHeader").style.display="block";
	document.getElementById("appIdCheck").innerHTML="special characters not allowed in eAppID";		
	alert("alpha");
	}
    */
  
	if(eMail == '') {
		
    document.getElementById("errorHeader").style.display="block";
	document.getElementById("emailCheck").innerHTML="Email must not be empty";
	}
	
	if(divisionVal == '') {
	
	document.getElementById("errorHeader").style.display="block";
	document.getElementById("divisionCheck").innerHTML="Division must not be empty";
	
	}
	
	if(sectionVal == '') {
	
	document.getElementById("errorHeader").style.display="block";
	document.getElementById("sectionCheck").innerHTML="Section must not be empty";
	
	}
	
	if(descriptionVal == '') {
	
	document.getElementById("errorHeader").style.display="block";
	document.getElementById("descriptionCheck").innerHTML="Description must not be empty";
	
	}
	
	if(lanUserId == '') {
	
	document.getElementById("errorHeader").style.display="block";
	document.getElementById("userIdCheck").innerHTML="LAN User ID must not be empty";
	
	}

	if(backupUserId == '') {
	
	document.getElementById("errorHeader").style.display="block";
	 document.getElementById("bkupUserIdCheck").innerHTML="BackUp LAN User ID must not be empty";
	
	}
	
	if(eMail != '' && eAppID != '' && divisionVal != '' && sectionVal != '' && descriptionVal != '' && lanUserId != '' && backupUserId != '') {
     
	 generateEmail();

	}
}

function generateEmail() {
	alert("i am on this");
    //Save references to elements. Don't do DOM walks in event handlers when not needed.
    var $sendEmailVal = $('#send-email');
    var $subjectVal = $('#subject');
    var $eAppID = $('#appID');
	var $eMail = $('#Email');
	var $divisionVal = $('#division');
	var $sectionVal = $('#section');
	var $descriptionVal = $('#description');
	var buttonClicked = true;
	
	if(buttonClicked) { 
	
	 $sendEmailVal.attr('href', 'mailto:antony.irudhaya@cra-arc.gc.ca?' +
            'subject=' + encodeURIComponent($subjectVal.val()) +
            '&body=' + encodeURIComponent("eAppID: " + $eAppID.val() + '\n') + encodeURIComponent("Manager Email: " + $eMail.val() + '\n') 
			         + encodeURIComponent("Division: " + $divisionVal.val() + '\n') + encodeURIComponent("Section: " + $sectionVal.val() + '\n') 
					 + encodeURIComponent("Description: " + $descriptionVal.val())).get(0).click();
	
	buttonClicked = false;
	}
	else {
		
		alert("button is not clicked");
	}

	
}


