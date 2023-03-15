

function display(){
    //get the two parent elements
    var form = document.getElementById("forms");
    var div = document.getElementById("div1");
    //get the confirmation data from the url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const type = urlParams.get('type');
    console.log("balls");
    //delete confirmation
    if(type == 0){
        //create the header for delete confirmation
        const num = urlParams.get('number');
        var head = document.createElement("h2");
        head.innerHTML = "Confirmation of Deletion";
        div.insertBefore(head, div.children[0]);
        //create the confirmation message
        var p = document.createElement("p");
        p.innerHTML = num + " total items were deleted from the data base.";
        form.insertBefore(p, form.children[0]);
    }

    //edit confirmation
    if(type == 1){
        //create the header for delete confirmation
        const num = urlParams.get('number');
        var head = document.createElement("h2");
        head.innerHTML = "Confirmation of Edit";
        div.insertBefore(head, div.children[0]);
        //create the confirmation message
        var p = document.createElement("p");
        p.innerHTML = num + " total items were edited in the data base.";
        form.insertBefore(p, form.children[0]);
    }

    //add confirmation
    if(type == 2){
        //create the header for delete confirmation
        const num = urlParams.get('number');
        var head = document.createElement("h2");
        head.innerHTML = "Confirmation of Calander Addition";
        div.insertBefore(head, div.children[0]);
        //create the confirmation message
        var p = document.createElement("p");
        p.innerHTML = num + " total items were added to the data base.";
        form.insertBefore(p, form.children[0]);
    }
}

window.onload = display;