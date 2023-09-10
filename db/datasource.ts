import { DataSource } from "typeorm";


const dataSource = new DataSource ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'typeormproject',
    entities: [ 
        
    ],
    synchronize: true
});

export default dataSource;