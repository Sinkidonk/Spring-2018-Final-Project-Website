$(document).ready(function () {
    function checkNumber(checkValue) {
        var regex = /^[a-zA-Z]+$/;
        if (checkValue.match(regex)) {
            alert("Must input numbers");
            return false;
        }
        return true;
    }

    function checkInfo() {
        var phone = document.getElementById("phone");
        var phoneValue = phone.value;
        checkNumber(phoneValue)
    }

    function submitInfo() {
        var fname = document.getElementById("firstname");
        var lname = document.getElementById("lastname");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var linux = document.querySelector('input[name="linux"]:checked');

        

            (fname.value && lname.value && email.value && phone.value && linux) ?
            alert("Thank You!") : alert("Please fill in all fields");
    }
    //backward compatible event listener
    var submitButton = document.getElementById("submit");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", checkNumber, false)
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", checkNumber)
    }
})



/* need to reviese this */