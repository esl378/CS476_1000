
const form = document.getElementById("del")
form.addEventListener("submit", function(Event) {
    Event.preventDefault();
    main(form);
})

async function main(form) {
    
    const formData = new FormData(form);
    const val = formData.get('Year');
    const send = {"year": val};
    console.log(val);
    
    try{
        const res = await fetch('http://localhost:4111/del', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(send)
        });
        const response = await res.json();
        var num = response.deleted;
        if(!res.ok){
            if(res.status === 401){
                return await sendRefreshToken();
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }

        if(num > 0){
            window.location = 'confirm.html?type=0&number=' + num;
        }

    } catch(err){
        console.log(err.stack);
    }
}

async function populate() {
    console.log("balls");
    try{
        const res = await fetch('http://localhost:4111/delp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        const response = await res.json();
        var select = document.getElementById("yearVals");

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