import "reflect-metadata";
import express from 'express';
import { initDB } from './db/datasource.js';
import userRoute from './router/userRouter.js';
import { Premission } from "./db/entites/Permission.js";
import { Role as userRole } from "./db/entites/Role.js";
const app = express();
const PORT = process.env.PORT || 3000;
import { In } from "typeorm";
app.use(express.json());
app.use('/user', userRoute);
app.post('/createRole', async (req, res) => {
    if (!req.body.name) {
        res.status(400).send('role name needed');
        return;
    }
    if (!req.body.permissions) {
        res.status(400).send('role permissions array needed');
        return;
    }
    const role = new userRole();
    role.name = req.body.name;
    let ids = req.body.permissions;
    let permissions = await Premission.find({
        where: {
            id: In(ids)
        }
    });
    role.Premissions = permissions;
    await role.save();
    res.status(201).send('Done');
});
app.post('/createPermission', async (req, res) => {
    if (!req.body.name) {
        res.status(400).send('permission name needed');
        return;
    }
    const permission = new Premission();
    permission.name = req.body.name;
    await permission.save();
    res.status(201).send('permission created');
});
app.listen(PORT, () => {
    initDB();
    console.log(`app is listening AT port ${PORT} `);
});
