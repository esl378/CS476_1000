

function display(){
    var form = document.getElementById("forms");
    var div = document.getElementById("div1");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const type = urlParams.get('type');
    
    if(type == 0){
        const num = urlParams.get('number');
        var head = document.createElement("h2");
        
    }
}

