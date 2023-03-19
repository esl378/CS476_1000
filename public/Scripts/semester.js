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
    
    // Set Term Name
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
        
        //  Set Term Info
        for(let i = 0; i < response.semResult.length; i++){
            if(semester === response.semResult[i].name){
                var hIn = document.getElementById("heldin");
                var div = document.createElement("div");
                div.id = "gf";
                var span = document.createElement("span");
                span.className = "bold";
                span.innerText = "Held In: ";
                var p = document.createElement("p");
                p.innerHTML = response.semResult[i].heldIn;
                div.appendChild(p);
                p.prepend(span);
                hIn.appendChild(div);
                getStat("Start of Term", response.semResult[i].strtDate, "termStart");
                getStat("End of Term", response.semResult[i].endDate, "termEnd");
            }
        }

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

            // Place Events
            for(let i = 0; i < events.length; i++){
                if(events[i].description === "Class Dates"){
                    getStat("Start of Classes", events[i].strtDate, "strtClass");
                    getStat("End of Classes", events[i].endDate, "endClass");
                }
                if(events[i].description === "Examination Dates"){
                    getStat("First Day of Exams", events[i].strtDate, "examStrt");
                    getStat("Last Day of Exams", events[i].endDate, "examEnd");
                }
                if(events[i].description === "Due Date for Tuition and Fee Payment"){
                    getStat("Due Date for Tuition and Fee Payment", events[i].strtDate, "dueDate");
                }
                if(events[i].description === "End of penalty-free payment period"){
                    getStat("End of Penalty-free Payment Period", events[i].strtDate, "pfpmt");
                }
                if(events[i].description === "End of Course Add Period"){
                    getStat("End of Course Add Period", events[i].strtDate, "addEnd");
                }
                if(events[i].description === "End of No-Record Drop Period"){
                    getStat("End of No-Record Drop Period", events[i].strtDate, "nrDrop");
                }
                if(events[i].description === "End of Grade-of-W Period"){
                    getStat("End of Grade-of-W Drop Period", events[i].strtDate, "gwDrop");
                }
                if(events[i].description === "End of 100% Refund Period"){
                    getStat("End of 100% Refund Period", events[i].strtDate, "fullRef");
                }
                if(events[i].description === "End of 50% Refund Period"){
                    getStat("End of 50% Refund Period", events[i].strtDate, "halfRef");
                }

                //  Reading Week
                if(events[i].description === "Reading Week"){
                    var wkDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    var sWeekDay = wkDay[new Date(events[i].strtDate).getDay()];
                    var startDay = "Start (" + sWeekDay + ")";
                    var eWeekDay = wkDay[new Date(events[i].endDate).getDay()];
                    var endDay = "End (" + eWeekDay + ")";
                    getStat(startDay, events[i].strtDate, "readStrt");
                    getStat(endDay, events[i].endDate, "readEnd");
                }

                // Stat Holidays
                if(events[i].description === "Family Day"){
                    getStat("Family Day", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "Good Friday"){
                    getStat("Good Friday", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "Victoria Day"){
                    getStat("Victoria Day", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "Canada Day"){
                    getStat("Canada Day", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "Saskatchewan Day"){
                    getStat("Saskatchewan Day", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "Labour Day"){
                    getStat("Labour Day", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "National Day for Truth and Reconciliation"){
                    getStat("National Day for Truth and Reconciliation", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "Thanksgiving Day"){
                    getStat("Thanksgiving Day", events[i].strtDate, "statHoli");
                }
                if(events[i].description === "Remembrance Day"){
                    getStat("Remembrance Day", events[i].strtDate, "statHoli");
                }

                // Other Dates
                if(events[i].description === "Undergraduate Student Orientation"){
                    getStat("Undergraduate Student Orientation", events[i].strtDate, "otherHoli");
                }
                if(events[i].description === "Spring Convocation"){
                    getStat("Spring Convocation", events[i].strtDate, "otherHoli");
                }
                if(events[i].description === "Last Day to Apply to Graduate for Fall Convocation"){
                    getStat("Last Day to Apply to Graduate for Fall Convocation", events[i].strtDate, "otherHoli");
                }
                if(events[i].description === "Fall Convocation"){
                    getStat("Fall Convocation", events[i].strtDate, "otherHoli");
                }
                if(events[i].description === "Winter Break Start"){
                    getStat("Faculty and Admin Offices Close at Noon", events[i].strtDate, "otherHoli");
                }
                if(events[i].description === "Winter Break End"){
                    getStat("Faculty and Admin Offices Open at 8:15 a.m.", events[i].strtDate, "otherHoli");
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
    document.getElementById("eventally").classList.add("hidable");
    var termHin = document.getElementById("heldin");
    while(termHin.children.length > 0){
        termHin.removeChild(termHin.lastChild);
    }
    var termS = document.getElementById("termStart");
    while(termS.children.length > 0){
        termS.removeChild(termS.lastChild);
    }
    var termE = document.getElementById("termEnd");
    while(termE.children.length > 0){
        termE.removeChild(termE.lastChild);
    }
    var sClass = document.getElementById("strtClass");
    while(sClass.children.length > 0){
        sClass.removeChild(sClass.lastChild);
    }
    var eClass = document.getElementById("endClass");
    while(eClass.children.length > 0){
        eClass.removeChild(eClass.lastChild);
    }
    var examS = document.getElementById("examStrt");
    while(examS.children.length > 0){
        examS.removeChild(examS.lastChild);
    }
    var examE = document.getElementById("examEnd");
    while(examE.children.length > 0){
        examE.removeChild(examE.lastChild);
    }
    var dueD = document.getElementById("dueDate");
    while(dueD.children.length > 0){
        dueD.removeChild(dueD.lastChild);
    }
    var penFree = document.getElementById("pfpmt");
    while(penFree.children.length > 0){
        penFree.removeChild(penFree.lastChild);
    }
    var AddE = document.getElementById("addEnd");
    while(AddE.children.length > 0){
        AddE.removeChild(AddE.lastChild);
    }
    var noRec = document.getElementById("nrDrop");
    while(noRec.children.length > 0){
        noRec.removeChild(noRec.lastChild);
    }
    var gradeW = document.getElementById("gwDrop");
    while(gradeW.children.length > 0){
        gradeW.removeChild(gradeW.lastChild);
    }
    var oneRef = document.getElementById("fullRef");
    while(oneRef.children.length > 0){
        oneRef.removeChild(oneRef.lastChild);
    }
    var fiftyRef = document.getElementById("halfRef");
    while(fiftyRef.children.length > 0){
        fiftyRef.removeChild(fiftyRef.lastChild);
    }
    var readS = document.getElementById("readStrt");
    while(readS.children.length > 0){
        readS.removeChild(readS.lastChild);
    }
    var readE = document.getElementById("readEnd");
    while(readE.children.length > 0){
        readE.removeChild(readE.lastChild);
    }
    var stats = document.getElementById("statHoli");
    while(stats.children.length > 0){
        stats.removeChild(stats.lastChild);
    }
    var holidays = document.getElementById("otherHoli");
    while(holidays.children.length > 0){
        holidays.removeChild(holidays.lastChild);
    }
}

function getStat(statName, event, dayType){
    var stat = document.getElementById(dayType);
    var div = document.createElement("div");
    div.id = "gf";
    var span = document.createElement("span");
    span.className = "bold";
    span.innerText = statName + ": ";
    var p = document.createElement("p");
    p.innerHTML = getDate(event);
    div.appendChild(p);
    p.prepend(span);
    stat.appendChild(div);
}
function eventChange(){
    var evtChg = document.getElementById("mthBtn");
    if(window.scrollY > 15){
        evtChg.classList.remove("event");
        evtChg.classList.add("eventNoPos");
    }else{
        evtChg.classList.add("event");
        evtChg.classList.remove("eventNoPos");
    }
}

window.onload = semPopulate;
window.onscroll = eventChange;