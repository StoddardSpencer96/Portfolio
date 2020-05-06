//References used: 
//https://www.geeksforgeeks.org/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format/
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
//https://stackoverflow.com/questions/45073911/how-to-get-the-month-name-instead-of-month-number-in-javascript

//Function to get the current time
function startTime() {
	const months = ["January", "February", "March", "April", 
					"May", "June", "July", "August", "September", 
					"October", "November", "December"];
	var today = new Date();
	var year = today.getFullYear();
	var day = today.getDate()
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	
	seconds = checkTime(seconds); //call the checkTime() function
	
	var newformat = hours >= 12 ? 'PM' : 'AM';  
                
	// Find current hour in AM-PM Format 
	hours = hours % 12;  

	// To display "0" as "12" 
	hours = hours ? hours : 12;  
	minutes = minutes < 10 ? '0' + minutes : minutes; 

	document.getElementById("date").innerHTML = "Today is: " + months[today.getMonth()] 
	+ ' ' + day + ' ' + year + ", and the current time is: " + hours + ':' + minutes + ':' + seconds + ' ' + newformat; 
	
	var t = setTimeout(startTime, 500); //refresh the time every 500 milliseconds, or 0.5 seconds
}

//Function to check for the current time, and if the number is less than 10,
//then add a zero in front of it (ex: 3 becomes 03)
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}