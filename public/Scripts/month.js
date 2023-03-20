async function main(val) {
    const year = val;

    try{
        const res = await fetch('http://jfdklfjdf.azurewebsites.net/mRoute', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({year})
        });

        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
    } catch(err){
        
    }
}
