import "reflect-metadata";
import 'dotenv/config';
import express from 'express';
import db from './db/datasource.js';
import userRoute from './router/userRouter.js';
import { premission } from "./db/entites/permission.js";
import { role as userRole } from "./db/entites/role.js";
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
    let permissions = await premission.find({
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
    const permission = new premission();
    permission.name = req.body.name;
    await permission.save();
    res.status(201).send('permission created');
});
app.listen(PORT, () => {
    db.init;
    console.log(`app is listening AT port ${PORT} `);
});
