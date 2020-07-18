/// <reference path="jquery-3.3.1.js" />

$(".menu").click(function () {
    $("nav").toggle(1000)
})

$(document).ready(function () {

    $("nav ul li a").click(function () {
        /* I would had tried to use a function call that pulled the info it needed to display from another function within the iframes pages
        But this fit with one of the requiredment for the javascript class I am in,
        and the website is small enough to where doing it this way is fine */

        let clickNav = this.id;
        //titleText = document.getElementById("titleText")
        titleText = $("#titleText")

        switch (clickNav) {
            case 'mainNav':
                titleText.html('Linux Commands Line Code Home Page')
                //titleText.innerHTML = "Linux Commands Line Code Home Page"
                document.title = "Home Page"
                console.log(iframeAutoHeight() + "px")
                $("#iframeMain").css({ "height": iframeAutoHeight() })

                //jQuery('iframe').iframeAutoHeight();

                
                break;
            case 'sshNav':
                //titleText.innerHTML = "SSH - Secure Shell"
                titleText.html('SSH - Secure Shell')
                document.title = "SSH - Secure Shell"
                console.log(iframeAutoHeight())
                $("#iframeMain").css({ "height": iframeAutoHeight() })
            //    height = getPageHeight()
                break;
            case 'ddNav':
                //titleText.innerHTML = "DD - Format Tool"
                titleText.html('DD - Format Tool')
                document.title = "DD - Format Tool"
                console.log(iframeAutoHeight())
                $("#iframeMain").css({ "height": iframeAutoHeight() })
               // height = getPageHeight()
                break
            case 'findNav':
               // titleText.innerHTML = "find - Search Tool"
                titleText.html('find - Search Tool')
                document.title = "find - Search Tool"
                console.log(iframeAutoHeight())
                $("#iframeMain").css({ "height": iframeAutoHeight() })
              //  height = getPageHeight()
                break;
            case 'rmNav':
                //titleText.innerHTML = "RM - Delete Tool"
                titleText.html('RM - Delete Tool')
                document.title = "RM - Delete Tool"
                console.log(iframeAutoHeight())
                $("#iframeMain").css({ "height": iframeAutoHeight() })
               // height = getPageHeight()
                break;
            case 'formNav':
               // titleText.innerHTML = "Contact Page"
                titleText.html('Contact Page')
                document.title = "Contact Page"
                console.log(iframeAutoHeight())
                $("#iframeMain").css({ "height": iframeAutoHeight() })
               // height = getPageHeight()
                break;
            case 'securityNav':
                //titleText.innerHTML = "Web Security"
                titleText.html('Web Security')
                document.title = "Web Security"
                console.log(iframeAutoHeight())
                $("#iframeMain").css({ "height": iframeAutoHeight() })
                //height = getPageHeight()
                break;
            case 'extraCodeNav':
                titleText.html('Extra Code')
                document.title = "Extra Code"
                console.log(iframeAutoHeight())
                var fixString = iframeAutoHeight();
                console.log(fixString + "FixString")
                fixString = fixString.slice(0, -2);
                var fixStringInt = parseInt(fixString)
                console.log(fixStringInt + "fixStringInt")
                var codePageHeight = fixStringInt + 50 + "px"
                console.log(codePageHeight)
                $("#iframeMain").css({ "height": codePageHeight })
                break;
        }

    });
    svgeezy.init(false, 'png')


    function convert() {
        let degC = document.getElementById("CValue").value
        let degF = degC * 1.8 + 32
        document.getElementById("FValue").innerHTML = degF
    }
    /*
       document.getElementById("convert")
       addEventListener("click", convert, false);
       */
    //backward compatible event listener
    let convertButton = document.getElementById("convert");
    if (convertButton.addEventListener) {
        convertButton.addEventListener("click", convert, false)
    } else if (convertButton.attachEvent) {
        convertButton.attachEvent("onclick", convert)
    }
})
/*
function iframeAutoHeight() {
    var iFrameID = document.getElementById('iframeMain');
    if (iFrameID) {
        // here you can make the height, I delete it first, then I make it again
        //iFrameID.height = "";
        return iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    }

}
*/

function iframeAutoHeight() {
    var iFrameID = document.getElementById('iframeMain')
    var height = 0;
    height = iFrameID.contentWindow.document.body.scrollHeight + 55 + "px"
    return height
}
