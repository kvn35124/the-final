import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let books = await db.Books.getAll();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code is not working");
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let {book} : any = await db.Books.getOne(req.params.id);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code is not working");
    }
})

router.post('/', async (req, res, next) => {
    try {
        let result = await db.Books.insertOne(req.body.title, req.body.author, req.body.price, req.body.categoryid);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code is not working");
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        let result = await db.Books.edit(req.body.title, req.body.author, req.body.price, req.body.id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code is not working");
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        let results = await db.Books.destroy(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code is not working");
    }
})



export default router;