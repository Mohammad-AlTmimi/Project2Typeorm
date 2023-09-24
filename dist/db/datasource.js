import { DataSource } from "typeorm";
import { premission } from "./entites/permission.js";
import { profile } from "console";
import { User } from "./entites/User.js";
import { role } from "./entites/role.js";
const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'typeormproject',
    entities: [
        premission,
        profile,
        User,
        role
    ],
    synchronize: true
});
const init = async () => {
    try {
        await dataSource.initialize();
        console.log("Data Source has been initialized!");
    }
    catch (err) {
        console.error("Error during Data Source initialization", err);
    }
};
export default { dataSource, init };
