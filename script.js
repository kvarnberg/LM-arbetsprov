document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("form");
    var submitBtn = document.getElementById("submitBtn");
    var name = document.getElementById("name");
    var numAdress = document.getElementById("numAdress");
    var compname = document.getElementById("compname");
    var orgnum = document.getElementById("orgnum");

    // checkValidity to be used to validate input and disable button, if needed.
    /* form.addEventListener('input', function () {
        var isValid = form.checkValidity();

        if (isValid) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }); */

    form.addEventListener('submit', function (event) {
        console.log("Name: " + name.value)
        console.log("Phone or email: " + numAdress.value)
        console.log("Company: " + compname.value)
        console.log("Org.number: " + orgnum.value)
        // system alert window, should be swapped to a custom window
        alert("Tack för din anmälan!");
        
        // clear the form from info
        form.reset();

        /* // reload the page if necessary
        setTimeout(function () {
            window.location.reload(true);
        }, 100); */
    });
});