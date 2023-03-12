//  This JavaScript file is needed for all pages

//  Current Date Configuration
function getD() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dt = new Date();
    var year = dt.getFullYear();
    var month = months[dt.getMonth()];
    var day = dt.getDate();
    document.getElementById("date").innerHTML = month + " " + day + ", " + year;
    /* console.log("balls"); */
}

window.onload = getD;