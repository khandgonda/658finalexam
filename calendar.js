"use strict";

/**
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */
var showDate;
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
    date.getMonth() + 1
  ).getDate();

  document.getElementById("monthHeader").innerHTML = months[date.getMonth()];
  document.getElementById("yearHeader").innerHTML = date.getFullYear();

  showDate = date;
  var d = date;
  d.setDate(1);
  var day = d.getDay();
  var dayOne = day;
  var b = 1;
  var doc = document.getElementById("calendarTable");
  for (var x = dayOne; x <= daysInCurrentMonth + (dayOne - 1); x++) {
    doc.getElementsByTagName("td")[x].innerHTML = b;
    b++;
  }
  for (var x = dayOne - 1; x >= 0; x--) {
    doc.getElementsByTagName("td")[x].innerHTML = "&nbsp;";
  }
  for (var x = daysInCurrentMonth + dayOne; x < 42; x++) {
    doc.getElementsByTagName("td")[x].innerHTML = "&nbsp;";
  }

  //   var year = getElementsById("form_year");

  // *** Remember to use getElementsByTagName when possible.  It avoids a lot of the hassle of looking through each child. ***

  // Calculate the previous and next month
  // (You may use this for adding links to the left arrow)
};

function next() {
  var nextMonth = showDate.getMonth() + 1;
  var nextYear = showDate.getFullYear();
  if (nextMonth >= 12) {
    // Remember:  Months are numbered beginning with 0.
    nextMonth = 0;
    nextYear++;
  }
  update(new Date(nextYear, nextMonth, 1));
}

function previous() {
  var preMonth = showDate.getMonth() - 1;
  var preYear = showDate.getFullYear();
  if (preMonth < 0) {
    preMonth = 11;
    preYear--;
  }
  update(new Date(preYear, preMonth, 1));
}
