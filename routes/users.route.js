const express = require("express");
const router=express.Router();

const userControllers=require('../controllers/users.controllers')
router.get('/', userControllers.index)
router.get('/create', userControllers.getCreate);
router.post('/create', userControllers.postCreate);
router.get('/:id', userControllers.view);
router.get('/:id/update', userControllers.getUpdate);
router.post('/:id/update', userControllers.postUpdate);
router.get('/:id/delete',userControllers.delete);
module.exports= router;