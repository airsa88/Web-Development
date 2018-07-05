/* 
function to perform actions on the DOM page.


*/

$(document).ready(function() {
    //Save references to elements. Don't do DOM walks in event handlers when not needed.
    var $sendEmailVal = $('#send-email');
    var $subjectVal = $('#subject');
    var $eAppID = $('#appID');
	var $eMail = $('#Email');
	var $divisionVal = $('#division');
	var $sectionVal = $('#section');
	var $descriptionVal = $('#description');
	
    function updateEmailLink() {
        $sendEmailVal.attr('href', 'mailto:antony.irudhaya@cra-arc.gc.ca?' +
            'subject=' + encodeURIComponent($subjectVal.val()) +
            '&body=' + encodeURIComponent("eAppID: " + $eAppID.val() + '\n') + encodeURIComponent("Manager Email: " + $eMail.val() + '\n') 
			         + encodeURIComponent("Division: " + $divisionVal.val() + '\n') + encodeURIComponent("Section: " + $sectionVal.val() + '\n') 
					 + encodeURIComponent("Description: " + $descriptionVal.val()));
    }
    $('#subject,#appID,#Email,#division,#section,#description').on('input', updateEmailLink);
    updateEmailLink();
});