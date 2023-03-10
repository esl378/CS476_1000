const { MongoClient } = require('mongodb');

//function to connect to the dataBase
async function main(){

    //uri used as credentials to login to the database
    const uri = URI_SEC;

    //client used to connect to the database
    const client = new MongoClient(uri);

    try{
        //wait for a successful connection 
        await client.connect();
        //here is where you make any kind of function calls
        //that make DB queries.
        await doAthing(client, {
            name: "Fall_2022", 
            start_date: new Date("2023-08-28"),
            end_date: new Date("2023-12-23"),
            year: "2023"
        });
        /* The above function call creates an object that contains the data for a new semester
            name: "Fall_2023"
            start_date: August 08, 2023
            end_date: December 23, 2023
            Year: "2023" 
           The function passes the client object and the created data to the doAthing() function */

    }finally{
        await client.close(); //once all DB queries have been made close the dataBase connection
    }
}

main().catch(console.error); //call the main function and output any errors to the console

/* Takes client uri and object to insert a single entry into the collection "semesters" within 
the dataBase "academic_schedule" */
async function doAthing(client, item){
    const result = await client.db("academic_schedule").collection("semesters").deleteOne({name: "Fall_2023"});
    console.log('new semester added created with ID: ${result.insertId}');
}