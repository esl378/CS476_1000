async function main(val) {
    const year = val;

    try{
        const res = await fetch('http://localhost:4111/monthRoute', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({year})
        });

        if(!response.ok){
            if(response.status === 401){
                return await sendRefreshToken();
            }
            throw new Error
        }
    } catch(err){
        
    }
}