const form = document.getElementById("yr")
form.addEventListener()

async function main(val) {
    const year = val;

    try{
        const res = await fetch('http://localhost:4111/sRoute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({year})
        });

        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
    } catch(err){
        console.log(err.stack);
    }
}

async function semPopulate() {
    try{
        const res = await fetch('http://localhost:4111/semp', {
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
        console.log(res);
    }catch(err){
        console.log(err.stack);
    }
}
window.onload = semPopulate;