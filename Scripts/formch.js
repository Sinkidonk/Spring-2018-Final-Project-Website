/// <reference path="jquery-3.3.1.js" />

$("#btn-submit").on("click", function (e) {
    validateAll();
    var validValue = validateAll();
    console.log(validValue);
})


function validateAll() {

    var valid = false;
    let errorArray = [];
    let errorCount = 0;

    let fname = document.getElementById("firstname").value;
    let regexNameCheck = new RegExp("^[a-zA-Z]+$");

    if (!regexNameCheck.test(fname)) {
        console.log("have non letters 1");
        errorArray[errorCount] = "fnameErr";
        errorCount++;
        $('#errorFName').css('display', 'inline');
        valid = false;

    } else {
        console.log("have letters 1");
        $('#errorFName').css('display', 'none');
        valid = true;
    }

    let lname = document.getElementById("lastname").value;

    if (!regexNameCheck.test(lname)) {
        console.log("have non letters 2");
        errorArray[errorCount] = "lnameErr";
        errorCount++;
        $('#errorLName').css('display', 'inline');
        valid = false;

    } else {
        console.log("have letters 2");
        $('#errorLName').css('display', 'none');
        valid = true;
    }

    let email = document.getElementById("email").value;
    let regexEmailCheck = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!regexEmailCheck.test(email)) {
        console.log("invalide email");
        errorArray[errorCount] = "emailErr";
        errorCount++;
        $('#errorEmail').css('display', 'inline');
        valid = false;
    } else {
        console.log("email");
        $('#errorEmail').css('display', 'none');
        valid = true;
    }

    let phone = document.getElementById("phone").value;
    let regexPhoneCheck = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    if (!regexPhoneCheck.test(phone)) {
        console.log("non value phone number");
        errorArray[errorCount] = "phoneErr";
        errorCount++;
        $('#errorPhone').css('display', 'inline');
        valid = false;
    }
    else {
        console.log("value phone number");
        $('#errorPhone').css('display', 'none');
        valid = true;
    }

    let linuxInfo = {};
    let linuxCount = 0;
    let linux = document.getElementsByName("linux");

    for (let i = 0; i < linux.length; i++) {
        if (linux[i].checked) {
            linuxCount++;
            linuxInfo[linuxCount] = linux[i].value;
        }
    }
    console.log(linuxInfo);
    console.log(errorArray);

    console.log(valid);

    return valid;
}