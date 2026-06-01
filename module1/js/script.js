function submitRegistration(event){

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    document.getElementById(
        "confirmationMessage"
    ).innerText =
        "Thank you " +
        name +
        " for registering.";
}

function validatePhone(){

    let phone =
        document.getElementById("phone").value;

    if(phone.length===10){

        document.getElementById(
            "phoneMessage"
        ).innerText =
            "Valid Phone Number";

    }
    else{

        document.getElementById(
            "phoneMessage"
        ).innerText =
            "Invalid Phone Number";
    }
}

function showFee(){

    let eventType =
        document.getElementById("eventType").value;

    document.getElementById(
        "feeDisplay"
    ).innerText =
        "Selected Event : " +
        eventType;
}

function enlargeImage(image){

    image.classList.toggle(
        "enlarged"
    );
}

function countCharacters(){

    let count =
        document.getElementById(
            "feedbackText"
        ).value.length;

    document.getElementById(
        "charCount"
    ).innerText =
        count;
}

function videoReady(){

    document.getElementById(
        "videoMessage"
    ).innerText =
        "Video Ready To Play";
}

function savePreference(){

    let value =
        document.getElementById(
            "eventType"
        ).value;

    localStorage.setItem(
        "eventType",
        value
    );
}

window.onload=function(){

    let saved =
        localStorage.getItem(
            "eventType"
        );

    if(saved){

        document.getElementById(
            "eventType"
        ).value=saved;
    }
}

function findNearbyEvents(){

    navigator.geolocation.getCurrentPosition(

        function(position){

            document.getElementById(
                "locationOutput"
            ).innerHTML=

            "Latitude : "+
            position.coords.latitude+

            "<br>Longitude : "+

            position.coords.longitude;
        },

        function(error){

            alert(
                "Location Access Denied"
            );
        },

        {
            enableHighAccuracy:true
        }
    );
}

window.onbeforeunload=function(){

    return "Unsaved changes may be lost.";
}