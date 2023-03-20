//used to get form data to send to the server side
const form = document.getElementById("del")
form.addEventListener("submit", function(Event) {
    Event.preventDefault();
    main(form);
})


//Sends the selected calendar year to the server side that is to be removed from the database
async function main(form) {
    const formData = new FormData(form);
    const val = formData.get('Year');
    const send = {"year": val};
    
    try{
        //Send message to server with data to be deleted
        const res = await fetch('http://jfdklfjdf.azurewebsites.net/del', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(send)
        });
        //retrieve the number of items deleted from the database 
        const response = await res.json();
        var num = response.deleted;
        if(!res.ok){
            if(res.status === 401){
                return await sendRefreshToken();
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }

        //if anything was deleted move user to the confirmation page sending the number of items deleted in the URL
        if(num > 0){
            window.location = 'confirm.html?type=0&number=' + num;
        }

    } catch(err){
        console.log(err.stack);
    }
}

async function populate() {

    try{
        //retrieve all calendar years from the database that can be deleted
        const res = await fetch('http://jfdklfjdf.azurewebsites.net/delp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        const response = await res.json();
        var select = document.getElementById("yearVals");

        //place the retrieved data into a selection form option
        for(let i = 0; i < response.length; i++){
            var option = document.createElement("option");
            option.value = response[i].year;
            option.name = "year";
            option.innerHTML = response[i].year;
            select.appendChild(option);
        }

        if(!res.ok){
            if(res.status === 401){
                return await sendRefreshToken();
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }
        
    }catch(err){
        console.log(err.stack);
    }
}
window.onload = populate();
