// Globally head date object for the month shown
var date = new Date();
date.setDate(1);
date.setMonth(0);

window.onload = function() {
    // Add the current month on load
    createMonth();
};

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            previousMonth();
            break;
        case 39:
            nextMonth();
            break;
    }
};

// Converts day ids to the relevant string
function dayOfWeekAsString(dayIndex) {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];
}
// Converts month ids to the relevant string
function monthsAsString(monthIndex) {
    return ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex];
}

// Creates a day element
function createCalendarDay(num, day, mon, year) {
    var currentCalendar = document.getElementById("calendar");

    var newDay = document.createElement("BUTTON");
    var date = document.createElement("p");
    var dayElement = document.createElement("p");
    var x = document.createElement("BUTTON");

    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    date.innerHTML = num;
    dayElement.innerHTML = day;

    newDay.className = "calendar-day";

    // Set ID of element as date formatted "8-January" etc
    newDay.id = num + "-" + mon + "-" +year;

      var months=["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      newDay.onclick = function(){
      // var cal= num+'-'+ (months.indexOf(mon)+1);
       // When the user clicks on <span> (x), close the modal

         modal.style.display = "block";

         span.onclick=function(){
             modal.style.display="none";
         }

       /*var header = 'Here\'s what you did on ' + mon + ' ' + num + ':';
       var jsonstring = JSON.stringify(cal.calendar[JSON.stringify([num,(months.indexOf(mon)+1)])]);
       var encouragement = 'Keep on working!';
*/
       //var message =jsonstring.substr(1, jsonstring.length-2);





       //var obj=JSON.parse(cal.calendar[JSON.stringify([num,(months.indexOf(mon)+1)])])
      // console.log("here is how to parse");

          var currday=cal.calendar[JSON.stringify([num,(months.indexOf(mon)+1)])];
       var i;

       if(currday!= undefined) {
           var header = 'Here\'s what you did on ' + mon + ' ' + num + ':\n';
           var string='';
           for (i = 0; i < currday.length; i++) {
               string += (currday[i][0]) + ' at an intensity of: ' + currday[i][1] + '\n';
           }

           $('#myModal').find('h3').text(header);
           $('#myModal').find('h6').text(string);
           $('#myModal').find('h4').text('Keep on working!');

       }
       else {
           $('#myModal').find('h3').text('You did nothing on ' + mon + ' ' + num + '.');
           $('#myModal').find('h6').text('');
           $('#myModal').find('h4').text('Keep on working!');
       }

   };



    newDay.appendChild(date);
    newDay.appendChild(dayElement);

    currentCalendar.appendChild(newDay);
}

// Clears all days from the calendar
function clearCalendar() {
    var currentCalendar = document.getElementById("calendar");

    currentCalendar.innerHTML = "";

}

// Clears the calendar and shows the next month
function nextMonth() {
    clearCalendar();

    date.setMonth(date.getMonth() + 1);

    createMonth(date.getMonth());
}

// Clears the calendar and shows the previous month
function previousMonth() {
    clearCalendar();
    date.setMonth(date.getMonth() - 1);
    var val = date.getMonth();
    createMonth(date.getMonth());
}

// Creates and populates all of the days to make up the month
function createMonth() {
    var currentCalendar = document.getElementById("calendar");

    var dateObject = new Date();
    dateObject.setDate(date.getDate());
    dateObject.setMonth(date.getMonth());
    dateObject.setYear(date.getFullYear());

    createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), monthsAsString(dateObject.getMonth()), dateObject.getFullYear());

    dateObject.setDate(dateObject.getDate() + 1);

    while (dateObject.getDate() != 1) {
        createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), monthsAsString(dateObject.getMonth()), dateObject.getFullYear());
        dateObject.setDate(dateObject.getDate() + 1);
    }

    // Set the text to the correct month
    var currentMonthText = document.getElementById("current-month");
    currentMonthText.innerHTML = monthsAsString(date.getMonth()) + " " + date.getFullYear();


}