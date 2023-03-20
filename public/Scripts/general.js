//  This JavaScript file is needed for all pages

//  Current Date Configuration
function getD() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dt = new Date();
    var year = dt.getFullYear();
    var month = months[dt.getMonth()];
    var day = dt.getDate();
    document.getElementById("date").innerHTML = month + " " + day + ", " + year;
    return month + " " + day + ", " + year;
}

function getDate(full) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dt = new Date(full);
    dt.setDate(dt.getDate() + 1);
    var year = dt.getFullYear();
    var month = months[dt.getMonth()];
    var day = dt.getDate();
    return month + " " + day + ", " + year;
}

async function sendRefreshToken(){

    try{
        const res = await fetch('http://jfdklfjdf.azurewebsites.net/del',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include'
        });
        if(res.ok){
            return res.status;
        }

    } catch(err){
        console.log(err.stack);
    }
}

window.onload = getD();
