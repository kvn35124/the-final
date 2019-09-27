import { Router } from 'express';
import db from '../../db';

const router = Router();


router.get('/', async (req, res, next) => {
    try {
        let categories = await db.Categories.getAll();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code is not working");
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let category = await db.Categories.getOne(req.params.id);
        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code is not working");
    }
})


export default router;