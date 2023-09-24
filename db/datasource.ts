import { DataSource } from "typeorm";
import { Premission } from "./entites/Permission.js";
import { Profile } from "./entites/Profile.js";
import { User } from "./entites/User.js";
import  { Role }  from "./entites/Role.js";
import "reflect-metadata"

const dataSource = new DataSource ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'typeormproject',
    entities: [ 
        Premission, 
        Profile,
        User,
        Role
    ]
});

export const initDB = async () => {
  try{
    await dataSource.initialize()
    console.log("Connected to DB!");
  }catch(err) {
    console.error('Failed to connect to DB: ' + err);
  };
}
  


export default dataSource;