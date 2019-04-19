"use strict";

/**
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */
var update = function(date) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var daysInCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  //   var year = getElementsById("form_year");

  // *** Remember to use getElementsByTagName when possible.  It avoids a lot of the hassle of looking through each child. ***

  // Calculate the previous and next month
  // (You may use this for adding links to the left arrow)
};
// function isFourDigitYear(year) {
//   if (year.length != 4) {
//     alert("The year must be four-digits");
//   } else {
//     return true;
//   }
// }

function next() {
  //   var nextMonth = getElementsByTagName("form_month");
  var nextMonth = date.getMonth() + 1;
  var nextYear = date.getFullYear();
  if (nextMonth >= 12) {
    // Remember:  Months are numbered beginning with 0.
    nextMonth = 0;
    nextYear++;
  }
}

function previous() {
  //   var previousMonth = getElementsByTagName("form_year");
  var previousMonth = date.getMonth() - 1;
  var previousYear = date.getFullYear();
  if (previousMonth < 0) {
    // Remember:  Months are numbered beginning with 0.
    previousMonth = 11;
    previousYear--;
  }
}

function calendar() {
  var febDays = "";

  if (month == 1) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
      febDays = 29;
    } else {
      febDays = 28;
    }
  }
}

function showDates() {
  var d = new Date();
  var n = d.getDate();
  document.getElementsByTagName("tr").innerHTML = n;
}
