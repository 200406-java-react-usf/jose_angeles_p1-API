import express from 'express';
import {userService} from '../config/app';
import { brotliDecompressSync } from 'zlib';

export const UserRouter = express.Router();

const UserService = userService;

UserRouter.get('', async (req, res) => {
    try {
        let payload = await UserService.getAllUsers();
        res.status(200).json(payload);
    } catch (e) {
        res.status(e.statusCode).json(e);
    }
});

UserRouter.get('/:id', async (req, res) => {
    const id = +req.params.id;
    try {
        let payload = await UserService.getUserById(id);
        res.status(200).json(payload);
    } catch (e) {
        res.status(e.statusCode).json(e);
    }
});

UserRouter.post('', async (req, res) => {
    console.log('POST REQUEST RECEIVED AT /users');
    console.log(req.body);

    try {
        let newUser = await UserService.addNewUser(req.body);
        return res.status(200).json(newUser);
    } catch (e) {
        res.status(e.statusCode).json(e);
    }  
});

UserRouter.put('', async (req, res) => {
    console.log('PUT REQUEST RECEIVED AT /users');
    console.log(req.body);

    try {
        let updatedUser = await userService.updateUser(req.body);
        res.status(200).json(updatedUser);
    } catch (e) {
        res.status(e.statusCode).json(e);
    }    
});

UserRouter.delete('', async (req, res) => {
    console.log('DELETE REQUEST RECEIVED AT /users');
    console.log(req.body);
    try {
        let deletedUser = await userService.deleteUserById(req.body);
        res.status(200).json(deletedUser);
    } catch (e) {
        res.status(e.statusCode).json(e);
    }    
});