async function main(val) {
    const year = val;

    try{
        const res = await fetch('http://localhost:4111/semesterRoute', {
            method: 'POST',
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