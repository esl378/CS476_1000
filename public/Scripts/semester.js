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
    destroyEvents();
}

async function displayEvents(year, semester){
    const events = [];
    
    destroyEvents();    
    var termSelect = document.getElementById("termName");
    const firstLetter = semester.charAt(0).toUpperCase();
    const end = semester.indexOf('_');
    const remaining = semester.substring(1,end);
    const headYear = semester.substring(end + 1);
    termSelect.innerHTML = firstLetter + remaining + ' ' + headYear;
    document.getElementById("eventally").classList.remove("hidable");

    try{
        const res = await fetch('http://localhost:4111/semp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        const response = await res.json();
        console.log(response);

        // Populate the dropdown menu
        if(year == "Select Academic Year"){
            return;
        }
        else{
            for(let i = 0; i < response.evtResult.length; i++){
                if(year === response.evtResult[i].year && semester === response.evtResult[i].semester){
                    events[events.length] = response.evtResult[i];
                }
            }
            console.log(events);
            for(let i = 0; i < events.length; i++){
                if(events[i].description === "Class Dates"){
                    document.getElementById("strtClass").innerHTML = events[i].strtDate;
                    document.getElementById("endClass").innerHTML = events[i].endDate;
                }
                if(events[i].description === "Examination Dates"){
                    document.getElementById("examStrt").innerHTML = events[i].strtDate;
                    document.getElementById("examEnd").innerHTML = events[i].endDate;
                }
                if(events[i].description === "Due Date for Tuition and Fee Payment"){
                    document.getElementById("dueDate").innerHTML = events[i].strtDate;
                }
                if(events[i].description === "End of penalty-free payment period"){
                    document.getElementById("pfpmt").innerHTML = events[i].strtDate;
                }
                if(events[i].description === "End of Course Add Period"){
                    document.getElementById("addEnd").innerHTML = events[i].strtDate;
                }
                if(events[i].description === "End of No-Record Drop Period"){
                    document.getElementById("nrDrop").innerHTML = events[i].strtDate;
                }
                if(events[i].description === "End of Grade-of-W Period"){
                    document.getElementById("gwDrop").innerHTML = events[i].strtDate;
                }
                if(events[i].description === "End of 100% Refund Period"){
                    document.getElementById("fullRef").innerHTML = events[i].strtDate;
                }
                if(events[i].description === "End of 50% Refund Period"){
                    document.getElementById("halfRef").innerHTML = events[i].strtDate;
                }
                if(events[i].description === "Reading Week"){
                    document.getElementById("readStrt").innerHTML = events[i].strtDate;
                    document.getElementById("readEnd").innerHTML = events[i].endDate;
                }


                if(events[i].description === "Good Friday"){
                    var stat = document.getElementById("statHoli");
                    var div = document.createElement("div");
                    div.id = "gf";
                    var span = document.createElement("span");
                    span.className = "bold";
                    span.innerHTML = "Good Friday";
                    var p = document.createElement("p");
                    p.innerHTML = events[i].strtDate;
                    //var br = document.createElement("br/");
                    div.appendChild(span);
                    div.appendChild(p);
                    //div.appendChild(br);
                    stat.appendChild(div);
                }
                if(events[i].description === "Remembrance Day"){
                    var stat = document.getElementById("statHoli");
                    var div = document.createElement("div");
                    div.id = "gf";
                    var span = document.createElement("span");
                    span.className = "bold";
                    span.innerHTML = "Remembrance Day";
                    var p = document.createElement("p");
                    p.innerHTML = events[i].strtDate;
                    var br = document.createElement("br");
                    div.appendChild(span);
                    div.appendChild(p);
                    div.appendChild(br);
                    stat.appendChild(div);
                }
                if(events[i].description === "Student Orientation"){
                    var holidays = document.getElementById("otherHoli");
                    var div = document.createElement("div");
                    div.id = "gf";
                    var span = document.createElement("span");
                    span.className = "bold";
                    span.innerHTML = "Student Orientation:";
                    var p = document.createElement("p");
                    p.innerHTML = events[i].strtDate;
                    var br = document.createElement("br");
                    div.appendChild(span);
                    div.appendChild(p);
                    div.appendChild(br);
                    holidays.appendChild(div);
                }
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
    //termSelect.innerHTML = "";
    /* var p = document.getElementsByTagName("p");
    for(let i=0; i < p.length;i++){
        p[i].innerHTML = "";
    } */
    var holidays = document.getElementById("otherHoli");
    while(holidays.children.length > 0){
        holidays.removeChild(holidays.lastChild);
    }
    var stats = document.getElementById("statHoli");
    while(stats.children.length > 0){
        stats.removeChild(stats.lastChild);
    }
}

window.onload = semPopulate;