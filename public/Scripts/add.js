
//Created a class to get the semesters into a nice easy to use object
class Semester {
    constructor(name,heldIn,strtDate,endDate,year) {
        this.name = name;
        this.start_date = strtDate;
        this.end_date = endDate;
        this.year = year;
        this.heldIn = heldIn;
    }
    print() {
        console.log("Name: " + this.name);
        console.log("Start Date: " + this.strtDate);
        console.log("End date: " + this.endDate);
        console.log("Year: " + this.year);
    }
};

//Created a class to get the Events into a nice easy to use object
class Event {
    constructor(strtDate, endDate, semester="invalid", year, description) {
        this.strtDate = strtDate;
        this.endDate = endDate;
        this.semester = semester;
        this.year = year;
        this.description = description;
    }
    print() {
        console.log("Description: " + this.description);
        console.log("Start Date: " + this.strtDate);
        console.log("End date: " + this.endDate);
        console.log("Year: " + this.year);
        console.log("Semester: " + this.semester);
    }
};

//Created a class to get the Year into a nice easy to use object
class Year {
    constructor(year) {
        this.year = year;
    }
    print() {
        console.log("The year is: " + year);
    }
};

//Added a new class to make a nice easy to use class to send stuff from front to back
class DTO {
    constructor(semesters,events,year) {
        this.semesters = semesters;
        this.events = events;
        this.year = year;
    }
    print() {
        console.log("The DTO was created\n");
        console.log("The semesters are: ");
        for(let i = 0; i < semesters.length; i++) {
            semesters[i].print();
        }
        console.log("\n");
        console.log("The events are: ");
        for(let i = 0; i < events.length; i++) {
            events[i].print();
        }
        console.log("\n")
        console.log("The year is: " + this.year[0].year);
        console.log('\n');
    }
}

var semHidden = false;
var dateHidden = false;

var semesters = new Array();
var events = new Array();
var years = new Array();

var numAdded = 0;

//Hide semesters tab
function hideSemesters() {
    var semesters = document.getElementById("semesters");
    var button = document.getElementById("hideSemesters");
    var semButton = document.getElementById("addSemester");
    if (semHidden) {
        semHidden = !semHidden;
        button.value = "Hide the semesters";
        semesters.style.display = "initial";
        semButton.style.display = "initial";
        
    }
    else {
        button.value = "Show the semesters";
        semesters.style.display = "none";
        semButton.style.display = "none";
        semHidden = !semHidden;
    }
}

//Hide dates tab
function hideDates() {

    var dates = document.getElementById("dates");
    var button = document.getElementById("hideDate");
    var dateButton = document.getElementById("addDate");
    if (dateHidden) {
        dateHidden = !dateHidden;
        button.value = "Hide the dates";
        dates.style.display = "initial";
        dateButton.style.display = "initial";

    }
    else {
        button.value = "Show the dates";
        dates.style.display = "none";
        dateButton.style.display = "none";
        dateHidden = !dateHidden;
    }
}

//Adds a new semester object to the form
function createSemesterObject() {

    //Get the semesters div
    var semesters = document.getElementById("semesters");
    var num = semesters.childNodes.length + 1;

    //Create outer div
    var div = document.createElement("div");
    div.className = "semester";

    //Title
    var name = document.createElement("h3");
    name.innerHTML = "Semester " + num;
    div.appendChild(name);

    //Description
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Description";
    //Input
    var input = document.createElement("input");
    input.type = "text";
    input.className = "sem";
    input.name = "name";
    input.id = "sem";
    input.addEventListener("blur", validateName);
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);


    //Start date
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Start date";
    //Input
    var input = document.createElement("input");
    input.type = "date";
    input.className = "start";
    input.name = "strt_date";
    input.id = "start";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //End date
    //Title
    var name = document.createElement("p");
    name.innerHTML = "End date";
    //Input
    var input = document.createElement("input");
    input.type = "date";
    input.className = "end";
    input.name = "end_date";
    input.id = "end";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //year
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Held In";
    //Input
    var input = document.createElement("input");
    input.type = "text";
    input.className = "heldIn";
    input.name = "heldIn";
    input.id = "heldIn";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);


    //add div to semesters div
    semesters.appendChild(div);


}

//Adds a new date object
function createDateObject() {

//Get the form to add a new object
    var dates = document.getElementById("dates");
    var num = dates.childNodes.length + 1;
//Create the outer div
    var div = document.createElement("div");
    div.className = "date";

    //Title
    var name = document.createElement("h3");
    name.innerHTML = "Date " + num;
    div.appendChild(name);

    //Add the inputs to form
    //Description
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Description";
    //Input
    var input = document.createElement("input");
    input.type = "text";
    input.className = "desc";
    input.name = "description";
    input.id = "desc";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //Start date
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Start date";
    //Input
    var input = document.createElement("input");
    input.type = "date";
    input.className = "start";
    input.name = "strtDate";
    input.id = "start";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //End date
    //Title
    var name = document.createElement("p");
    name.innerHTML = "End date";
    //Input
    var input = document.createElement("input");
    input.type = "date";
    input.className = "end";
    input.name = "endDate";
    input.id = "end";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //Description
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Semester";
    //Input
    var input = document.createElement("input");
    input.type = "text";
    input.className = "sm";
    input.name = "sm";
    input.id = "sm";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //Append the div to the form
    dates.appendChild(div);
}

function getAllEvents(yr) {
    let dates = document.getElementsByClassName("date");
    for(const dateObj of dates) {
        var event = new Event;
        
        //This will add the values to an event object and then add it to events array
        //Note that there is a p element around the input so I have to add the childNodes[1]
        //Get the description
        event.description = dateObj.children[1].childNodes[1].value;
        //Get the start date
        event.strtDate = dateObj.children[2].childNodes[1].value;
        //Get the end date
        event.endDate = dateObj.children[3].childNodes[1].value;
        //Get the end date
        event.semester = dateObj.children[4].childNodes[1].value;

        event.year = yr;

        //Push the values to array
        events.push(event);
    }
}

function getAllSemesters(yr) {
    let semstrs = document.getElementsByClassName("semester");

    for(const semesterObj of semstrs) {
        var semester = new Semester;
        //This will add the values to an event object and then add it to events array
        //Note that there is a p element around the input so I have to add the childNodes[1]
        //Get the description
        semester.name = semesterObj.children[1].childNodes[1].value;
        //Get the start date
        semester.strtDate = semesterObj.children[2].childNodes[1].value;
        //Get the end date
        semester.endDate = semesterObj.children[3].childNodes[1].value;
        //Get the end date
        semester.heldIn = semesterObj.children[4].childNodes[1].value;

        semester.year = yr;

        //Push values to array
        semesters.push(semester);
    }
}

function getAllYears() {
    let yrs = document.getElementById("year");
    let yers = new Year;

    yers.year = yrs.value;
    years.push(yers);
}

function createDTO() {

    years = new Array();
    events = new Array();
    semesters = new Array();

    getAllYears();
    let dto = new DTO(semesters,events,years);

    getAllSemesters(dto.year[0].year);
    getAllEvents(dto.year[0].year);

    for(let i = 0; i < dto.events.length; i++) {
        for(let j = 0; j < dto.semesters.length; j++) {
            if(dto.events[i].strtDate >= dto.semesters[j].start_date) {
                dto.events[i].semester = dto.semesters[j].name;
                break;
            }
        }
    }
    return JSON.stringify(dto);

}

async function daddyFunky() {
    const dto = createDTO();

    if(validateData()) {
        document.getElementById("msg").innerHTML = "Please fix the data before submitting";
        return;
    }
    try{
        const result = await fetch('http://localhost:4111/add', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: dto
        });

        if(!result.ok) {
            if(result.status == 401) {
                return await sendRefreshToken();
            }
            throw new Error(`${result.status} ${result.statusText}`);
        }
        numAdded = semesters.length + events.length + years.length;
        window.location = 'confirm.html?type=2&number=' + numAdded;

    } catch(err) {
        console.log("Big error");
    }
}

function validateData() {
    document.getElementById("msg").innerHTML = "";
    var data = document.getElementsByClassName("hint");
    for(let i = 0; i < data.length; i++) {
        if(data[i].innerHTML === "") {} else {return false;}
    }
    return true;
}

function validateName() {
    const pattern = /^[a-zA-Z]+[_]\d{4}$/;
    //If it doesn't match the pattern, it adds a hint to match the pattern
    //If it does then delete the hint
    if(this.parentNode.childNodes.length > 2) {
        this.parentNode.removeChild(this.parentNode.lastChild);
    }
    if(!pattern.test(this.value)) {
        var node = document.createElement("p");
        node.className="hint";
        node.innerHTML="This needs to be in the form \'Semester Name\'_\'Year in the form yyyy\'";
        this.parentNode.appendChild(node);  
        return false;
    } 
    return true;
}

function validateAllNames(dto) {
    if(dto.semesters == undefined) {
        return true;
    }
    for(let i = 0; i < dto.semesters.length; i++) {
        if(!validateNameInd(dto.semesters[i])) {
            return false;
        }
    }
    return true;
}

function validateNameInd(name) {
    const pattern = /^[a-zA-Z]+[_]\d{4}$/;
    if(!pattern.test(name)) {
        return false;
    } 
    return true;
}


function validateYear() {
    const pattern = /^\d{4}[-]\d{4}$/;

    if(this.parentNode.childNodes.length > 2) {
        this.parentNode.removeChild(this.parentNode.lastChild);
    }
    if(!pattern.test(this.value)) {
        var node = document.createElement("p");
        node.className="hint";
        node.innerHTML="This needs to be in the form \'Year in the form yyyy\'-\'Year in the form yyyy\'";
        this.parentNode.appendChild(node);  
        return false;
    }
    return true;
}

function validateYearInd(year) {
    const pattern = /^\d{4}[-]\d{4}$/;
    if(!pattern.test(year)) {
        return false;
    }
    return true;
}

function validateAllYears(dto) {

    if(dto.semesters == undefined) {
        return true;
    }

    for(let i = 0; i < dto.semesters.length; i++) {
        if(!validateYearInd(dto.semesters[i].heldIn)) {
            return false;
        }
    }
    return true;
}