
// Shows a warning message if the blog post is more than six months old

// Get the date from the data attribute
var postDate = $(".blog__date").data("date");

// Get the current date
function yyyymmdd(dateIn) {
   var yyyy = dateIn.getFullYear();
   var mm = dateIn.getMonth()+1; // getMonth() is zero-based
   var dd  = dateIn.getDate();
   return String(10000*yyyy + 100*mm + dd); // Leading zeros for mm and dd
}
var today = new Date();
var currentDate = (yyyymmdd(today));


if( (postDate + 600) < currentDate ) {
	$( "#blog__date-warning" ).show();
}
