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
    displayYr();
}

function getChosenYear(){
    var yearDropDown = document.getElementById("yearVals").value;
    displaySem(yearDropDown);
    return yearDropDown;
}

function getChosenSem(){
    var semDropDown = document.getElementById("semVals").value;
    var yearDropDown = document.getElementById("yearVals").value;
    displayEvents(yearDropDown, semDropDown);
    return semDropDown;
}

async function displayYr() {
    try{
        const res = await fetch('http://localhost:4111/semp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        const response = await res.json();
        var yearSelect = document.getElementById("yearVals");

        // Populate the dropdown menus
        for(let i = 0; i < response.yrResult.length; i++){
            var option = document.createElement("option");
            option.value = response.yrResult[i].year;
            option.name = "semester";
            option.innerHTML = response.yrResult[i].year;
            yearSelect.appendChild(option);
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

async function displaySem(year){
    destroySemesters();
    try{
        const res = await fetch('http://localhost:4111/semp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        const response = await res.json();
        
        var semSelect = document.getElementById("semVals");

        // Populate the dropdown menu
        if(year == "Select Academic Year"){
            return;
        }
        else{
            for(let i = 0; i < response.semResult.length; i++){
                if(year === response.semResult[i].year){
                    var option = document.createElement("option");
                    option.value = response.semResult[i].name;
                    option.name = "semester";
                    const firstLetter = response.semResult[i].name.charAt(0).toUpperCase();
                    const end = response.semResult[i].name.indexOf('_');
                    const remaining = response.semResult[i].name.substring(1,end);
                    option.innerHTML = firstLetter + remaining;
                    semSelect.appendChild(option);
                }
            }}

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

function destroySemesters() {
    let sem = document.getElementById("semVals");
    while(sem.lastElementChild) {
        sem.removeChild(sem.lastElementChild);
    }
    var option = document.createElement("option");
    option.innerHTML = "Select a Semester";
    sem.appendChild(option);
}

async function displayEvents(year, semester){
    const events = [];
    //events.length = 0;
    
    destroyEvents(events);    
    var termSelect = document.getElementById("termName");
    const firstLetter = semester.charAt(0).toUpperCase();
    const end = semester.indexOf('_');
    const remaining = semester.substring(1,end);
    const headYear = semester.substring(end + 1);
    termSelect.innerHTML = firstLetter + remaining + ' ' + headYear;

    try{
        const res = await fetch('http://localhost:4111/semp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        const response = await res.json();
        //console.log(year);
        //console.log(semester);

        // Populate the dropdown menu
        if(year == "Select Academic Year"){
            return;
        }
        else{
            for(let i = 0; i < response.evtResult.length; i++){
                if(year === response.evtResult[i].year && semester === response.evtResult[i].semester){
                    events[events.length] = response.evtResult[i];
                }
                    /* var option = document.createElement("option");
                    option.value = response.semResult[i].name;
                    option.name = "semester";
                    const firstLetter = response.semResult[i].name.charAt(0).toUpperCase();
                    const end = response.semResult[i].name.indexOf('_');
                    const remaining = response.semResult[i].name.substring(1,end);
                    option.innerHTML = firstLetter + remaining;
                    semSelect.appendChild(option); */
            }
            let regTerm = /term/i;
            console.log(events);
            for(let i = 0; i < events.length; i++){
                let location = events[i].description.match(regTerm);
            }
            

        }

        if(!res.ok){
            if(res.status === 401){
                return await sendRefreshToken();
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }
        //console.log(res);
    }catch(err){
        console.log(err.stack);
    }
}

function destroyEvents() {
    var termSelect = document.getElementById("termName").innerHTML = "";/* 
    let even = document.getElementById("dates");
    console.log(even);
    while(even.lastElementChild) {
        even.removeChild(even.lastElementChild);
    } */
}

/* function newSem(description, strtDate, endDate, year, heldIn){

    //  Get the semester
    var sems = document.getElementById("semVals");
    var semQuan = sems.childNodes.length + 1;

} */

window.onload = semPopulate;