/// <reference path="date.js" />
/// <reference path="jquery-3.3.1.min.js" />
/*
Expand your individual website to include a page
that calculates the time elapsed since a date
entered by a user. The page should include a form
that allows users to enter a day, month, and year.
The page should then calculate and display the elapsed
time in years, months, and days. Note that your program
must include code to convert day values in excess of
into months, and months in excess of into years.
*/


/* https://github.com/datejs/Datejs */

$(document).ready(function () {
    //backward compatible event listener
    let submitButton = document.getElementById("submit");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", dateDiffTime, false)
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", dateDiffTime)
    }
})
function dateDiffTime() {
    let date1Info = Date.parse(document.getElementById("date1Info").value) /*.toString('M/d/yyyy') */
    let date2Info = Date.parse(document.getElementById("date2Info").value)


    let dateDiff = date2Info - date1Info

    let daysDate = Math.floor(dateDiff / 86400000)
    let monthsDate = Math.floor(dateDiff / 2629746000)
    let yearsDate = Math.floor(dateDiff / 31556952000)

    $("#totalDays").html("Days: " + daysDate)
    $("#totalMonths").html("Months: " + monthsDate)
    $("#totalYears").html("Years: " + yearsDate)

    console.log(daysDate)
    console.log(date2Info)
}