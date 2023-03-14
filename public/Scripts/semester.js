async function main(val) {
    const year = val;

    try{
        const response = await fetch('http://localhost:4111/sroute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({year})
        });

        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log(response);
    } catch(err){
        console.log(err.stack);
    }
}
window.onload = populate;