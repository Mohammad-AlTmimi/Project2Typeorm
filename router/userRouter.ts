import express from 'express'
import { User } from '../db/entites/User.js'
import valid from '../middleWare/register.js';
import { Profile } from '../db/entites/profile.js';
import { role as userRole } from '../db/entites/role.js';
import { In } from 'typeorm';

const route = express()

route.post('/addRole/:id', async (req, res) => {
    try {
        let id = Number(req.params.id);
        const user = await User.findOneBy({id});
        let roleid = Number(req.body.id);
        const role = await userRole.findOneBy({id:roleid});
        if(!user){
            res.status(500).send('There is no User with this id')
            return;
        }
        if(!role){
            res.status(500).send('There is no role with this id')
            return;
        }
        user.roles.push(role)
        await user.save()
        res.status(201).send('Done')
    }
    catch (err) {
        res.status(401).send('something went wrong')
    }
})

route.post('/register', valid , async (req, res) => {

    try{
        const profile = new Profile();
        profile.dateOfBirth = req.body.dateOfBirth
        profile.firstName = req.body.firstName || "unknown";
        profile.lastName = req.body.lastName || "unknown";
        await profile.save();

        const newUser = new User();
        newUser.username = `${req.body.firstName} ${req.body.lastName}` || "unkown";
        newUser.email = req.body.email || 'no email';
        newUser.password = req.body.password;
        newUser.type = req.body.type || 'user';
        newUser.profile = profile;
        let ids = req.body.roles as number[];
        let roles = await userRole.find({
            where: {
                id: In(ids)
            }
        })
        newUser.roles = roles;
        await newUser.save()
        res.status(200).send('user created')
    }catch(err){
        console.error(err)
        res.status(500).send('something went wrong')
    }

})

route.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.send(user)
    }
    catch (err) {
        res.status(401).send('Problem had appear')
        console.error(err)
    }
})

route.get('/:id', async (req, res) => {
    try {
        let id = Number(req.params.id);
        const user = await User.findBy({id});
        res.send(user)
    }
    catch (err) {
        res.status(401).send('something went wrong')
        console.error(err)
    }
})

export default route;
