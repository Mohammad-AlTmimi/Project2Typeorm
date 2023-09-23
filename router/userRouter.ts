import express from 'express'
import { User } from '../db/entites/User.js'
import valid from '../middleWare/register.js';
import { Profile } from '../db/entites/profile.js';
import { role as userRole } from '../db/entites/role.js';
import { In } from 'typeorm';

const route = express()


export default route;
