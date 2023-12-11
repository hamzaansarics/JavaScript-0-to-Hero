class Database
{
    constructor(){
        alert("constructor is called")
    }
    variable_1="power of data"
    variable_2="power of second data"

    db_name(db){
        this.databasename=db;
        //console.log(this.databasename)
    }
    open_connection(cstring){
        console.log("connection is estableshed",cstring," with this database",this.databasename)
    }
    operation_processed(dbname){
            console.log("data is processed in this database ",this.databasename)
    }
    close_connection(){
        console.log("connection is closed")
    }
}

let oracle = new Database();
oracle.db_name("oracle")
oracle.open_connection("4092834093284");
oracle.operation_processed("oracle");
oracle.close_connection();
console.log("")
let sql_server = new Database();
sql_server.db_name("sql_server")
sql_server.open_connection("430-978");
sql_server.operation_processed("sql_server");
sql_server.close_connection();