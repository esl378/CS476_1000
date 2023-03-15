//
//                                  Classes
//


//Created a class to get the semesters into a nice easy to use object
class Semester {
    constructor(name,heldIn,strtDate,endDate,year) {
        console.log(strtDate);
        this.name = name;
        this.strtDate = strtDate;
        this.endDate = endDate;
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
    constructor(strtDate, endDate, semester="invalid", year, description, id) {
        this.strtDate = strtDate;
        this.endDate = endDate;
        this.semester = semester;
        this.year = year;
        this.description = description;
        this.id = id;
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
    constructor(year, id) {
        this.year = year;
        this.id = id;
    }
    print() {
        console.log("The year is: " + this.year);
        console.log("The id is: " + this.id);
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

//
//                                        Variables
//

var semHidden = false;
var dateHidden = false;

var semesters = new Array();
var events = new Array();
var years = new Array();


//
//                                        Helper functions
//

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


//
//                        For adding HTML to the page
//

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
    name.innerHTML = "Start date";
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


    //add div to semesters div
    semesters.appendChild(div);


}

//Adds a new semester object to the form
function createSemesterObject(description, strtDate, endDate, year, heldIn) {

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
    var name = document.createElement("p");
    name.innerHTML = "Description: " + description;
    //Add name to div
    div.appendChild(name);


    //Start date
    var name = document.createElement("p");
    name.innerHTML = "Start date: " + strtDate;
    div.appendChild(name);

    //End date
    var name = document.createElement("p");
    name.innerHTML = "End date: " + endDate;
    div.appendChild(name);

    //year
    var name = document.createElement("p");
    name.innerHTML = "Year: " + year;
    div.appendChild(name);

    //Held in 
    var name = document.createElement("p");
    name.innerHTML = "Held in: " + heldIn;
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

    //Append the div to the form
    dates.appendChild(div);
}

//Adds a new date object
function createDateObject(description, strtDate, endDate, year, semester) {

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
        name = document.createElement("p");
        name.innerHTML = "Description: " + description;
        //Add name to div
        div.appendChild(name);
    
        //Start date
        name = document.createElement("p");
        name.innerHTML = "Start date: " + strtDate;
        //Add name to div
        div.appendChild(name);
    
        //End date
        name = document.createElement("p");
        name.innerHTML = "End date: " + endDate;
        //Add name to div
        div.appendChild(name);

        //Year
        name = document.createElement("p");
        name.innerHTML = "Year: " + year;
        //Add name to div
        div.appendChild(name);

        //Semester
        name = document.createElement("p");
        name.innerHTML = "Semester: " + semester;
        //Add name to div
        div.appendChild(name);
    
        //Append the div to the form
        dates.appendChild(div);
    }

    //Creates a new Year object
    function createYearObject(year) {
        var opt = document.getElementById("year");

        var name = document.createElement("option");
        name.value = year;
        name.innerHTML = year;

        opt.appendChild(name);
    }

//
//                              This function fills the objects
//

async function mommyFunky() {
    let jsonSemesters;
    let jsonYears;
    let jsonEvents;
    //-------------------------------Getting semester data--------------------------------------------------------------------------------
        try{
        const result = await fetch('http://localhost:4111/getSemesters', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        jsonSemesters = await result.json();

        if(!result.ok) {
            if(result.status == 401) {
                return await sendRefreshToken();
            }
            throw new Error(`${result.status} ${result.statusText}`);
        }

    } catch(err) {
        console.log("Couldn't get the semesters");
    }
    
    //------------------------Getting Event data----------------------------------------------------------------------------------------------
    try{
        const result = await fetch('http://localhost:4111/getEvents', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        jsonEvents = await result.json();

        if(!result.ok) {
            if(result.status == 401) {
                return await sendRefreshToken();
            }
            throw new Error(`${result.status} ${result.statusText}`);
        }

    } catch(err) {
        console.log("Couldn't get the events");
    }

    //----------------------Getting the Year data-------------------------------------------------------------------------------------------------
    try{
        const result = await fetch('http://localhost:4111/getYears', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        jsonYears = await result.json();

        if(!result.ok) {
            if(result.status == 401) {
                return await sendRefreshToken();
            }
            throw new Error(`${result.status} ${result.statusText}`);
        }

    } catch(err) {
        console.log("Couldn't get the year");
    }

    for(let i = 0; i < jsonYears.length; i++) {
        let tmpYear = new Year(jsonYears[i].year, jsonYears[i]._id);
        years.push(tmpYear);
    } 
    //name,heldIn,strtDate,endDate,year
    for(let i = 0; i < jsonSemesters.length; i++) {
        let tmpSem = new Semester(
            jsonSemesters[i].name, 
            jsonSemesters[i].heldIn, 
            jsonSemesters[i].start_date, 
            jsonSemesters[i].end_date, 
            jsonSemesters[i].year,
            jsonSemesters[i]._id
            );

        semesters.push(tmpSem);
    }  
    
    //strtDate, endDate, semester="invalid", year, description, id
    for(let i = 0; i < jsonEvents.length; i++) {
        let tmpEven = new Event(
            jsonEvents[i].strtDate,
            jsonEvents[i].endDate,
            jsonEvents[i].semester,
            jsonEvents[i].year,
            jsonEvents[i].description,
            jsonEvents[i]._id
            );
        events.push(tmpEven);
    } 

    for(let i = 0; i < years.length; i++) {
        createYearObject(years[i].year);
    }

    for(let i = 0; i < events.length; i++) {
        createDateObject(
            events[i].description, 
            events[i].strtDate, 
            events[i].endDate, 
            events[i].year, 
            events[i].semester);
    }

    for(let i = 0; i < semesters.length; i++) {
        createSemesterObject(
            semesters[i].name, 
            semesters[i].strtDate, 
            semesters[i].endDate, 
            semesters[i].year, 
            semesters[i].heldIn);
    }
}