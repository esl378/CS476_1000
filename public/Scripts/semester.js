const yearForm = document.getElementById("yr")
const semForm = document.getElementById("sem")

async function main(yearForm, semForm) {
    const year = yearForm;
    const semester = semForm;
    
    const yearFormData = new FormData(yearForm);
    const semFormData = new FormData(semForm);
    const yearVal = yearFormData.get('Year');
    const semVal = semFormData.get('semester');
    const yearSend = {"year": yearVal};
    const semSend = {"semester": semVal};
    console.log(yearVal);
    console.log(semVal);

    try{
        const res = await fetch('http://localhost:4111/sRoute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({yearSend}),
            body: JSON.stringify({semSend})
        });

        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
    } catch(err){
        console.log(err.stack);
    }
}
// Populate the dropdown menus
async function semPopulate() {
    try{
        const res = await fetch('http://localhost:4111/semp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        const response = await res.json();
        console.log(response);
        var yearSelect = document.getElementById("yearVals");
        var semSelect = document.getElementById("semVals");

        // Populate the dropdown menus
        for(let i = 0; i < response.yrResult.length; i++){
            var option = document.createElement("option");
            option.value = response.yrResult[i].year;
            option.name = "semester";
            option.innerHTML = response.yrResult[i].year;
            yearSelect.appendChild(option);
        }

        for(let i = 0; i < response.semResult.length; i++){
            var option = document.createElement("option");
            option.value = response.semResult[i].name;
            option.name = "semester";
            const firstLetter = response.semResult[i].name.charAt(0).toUpperCase();
            const end = response.semResult[i].name.indexOf('_');
            const remaining = response.semResult[i].name.substring(1,end);
            option.innerHTML = firstLetter + remaining;
            semSelect.appendChild(option);
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