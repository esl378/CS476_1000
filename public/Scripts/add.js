var semHidden = false;
var dateHidden = false;

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
    div.className = "semester" + num;

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
    div.className = "date" + num;

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
    input.id = "otherDate";
    //Add input to p
    name.appendChild(input);
    //Add name to div
    div.appendChild(name);

    //Append the div to the form
    dates.appendChild(div);
}