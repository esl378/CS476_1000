const form = document.getElementById("del")
form.addEventListener("submit", function(Event) {
    Event.preventDefault();
    main(form);
})

async function main(form) {
    
    const formData = new FormData(form);
    const val = formData.get('Year');
    const send = {"year": val};
    console.log(val);
    
    try{
        const res = await fetch('http://localhost:4111/del', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(send)
        });

        if(!res.ok){
            if(res.status === 401){
                return await sendRefreshToken();
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }


    } catch(err){
        console.log(err.stack);
    }
}

async function populate() {
    try{
        const res = await fetch('http://localhost:4111/delp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if(!res.ok){
            if(res.status === 401){
                return await sendRefreshToken();
            }
            throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log(res.body);
    }catch(err){
        console.log(err.stack);
    }
}
window.onload = populate;