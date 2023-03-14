

class Semester {
    constructor(name,heldIn,strtDate,endDate,year) {
        this.name = name;
        this.year = year;
        this.strtDate = strtDate;
        this.endDate = endDate;
        this.heldIn = heldIn;
    }
    print() {
        console.log("Name: " + this.name);
        console.log("Start Date: " + this.strtDate);
        console.log("End date: " + this.endDate);
        console.log("Year: " + this.year);
    }
};

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

class Year {
    constructor(year) {
        this.year = year;
    }
    print() {
        console.log("The year is: " + year);
    }
};


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
    input.name = "sem" + num;
    input.id = "sem";
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
    input.name = "start" + num;
    input.id = "start";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //End date
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Start date";
    //Input
    var input = document.createElement("input");
    input.type = "date";
    input.className = "end";
    input.name = "end" + num;
    input.id = "end";
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
    input.name = "desc" + num;
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
    input.name = "start" + num;
    input.id = "start";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //End date
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Start date";
    //Input
    var input = document.createElement("input");
    input.type = "date";
    input.className = "end";
    input.name = "end" + num;
    input.id = "end";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //Other date
    //Title
    var name = document.createElement("p");
    name.innerHTML = "Other date";
    //Input
    var input = document.createElement("input");
    input.type = "checkbox";
    input.className = "otherDate";
    input.name = "otherDate" + num;
    input.id = "otherDate";
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
            if(dto.events[i].strtDate >= dto.semesters[j].strtDate) {
                dto.events[i].semester = dto.semesters[j].name;
                break;
            }
        }
    }

    dto.print();

}