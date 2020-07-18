/// <reference path="jquery-3.3.1.min.js" />


$(document).ready(function () {


    //backward compatible event listener
    var submitButton = document.getElementById("submit");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", validationAllFields, false)
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", validationAllFields)
    }
    
})

function validationNameText() {
    var fname = document.getElementById("firstname").value
    var lname = document.getElementById("lastname").value

    //var regexCheck = "[a-zA-Z]"
    var regexCheck = new RegExp("^[a-zA-Z]+$")

    if (!regexCheck.test(fname)) {
        console.log("have non letters 1")
    } else {
        console.log("have letters 1")
    }

    if (!regexCheck.test(lname)) {
        console.log("have non letters 2")
    } else {
        console.log("have letters 2")
    }

}

function validationEmail() {

    var email = document.getElementById("email").value

    var regexCheck = new RegExp("/\A[^@][\w.-]+@[\w.-]+[.]+[a-z]{2,4}\z/i")

    if (!regexCheck.test(email)) {
        console.log("invalide email");
    }else {
        console.log("email")
    }
}

function validationPhone() {
    var phone = document.getElementById("phone").value
    var regexCheck = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    if (!regexCheck.test(phone)) {
        console.log("non value phone number");
    }
    else {
        console.log("value phone number");
    }
}

function useLinux() {
    var linuxInfo = {};
    var linuxCount = 0;
    var linux = document.getElementsByName("linux");

    for (var i = 0; i < linux.length; i++) {
        if (linux[i].checked) {
            linuxCount++;
            linuxInfo[linuxCount] = linux[i].value;
        }
    }
    console.log(linuxInfo);
}


function validationAllFields() {
   // var linux = document.querySelector('input[name="linux"]:checked')

    validationNameText();
    validationEmail();
    validationPhone();
    useLinux();
}