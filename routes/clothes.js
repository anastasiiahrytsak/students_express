import express from 'express';
const router = express.Router();
import { getAllClothes, addClothing, deleteClothing } from '../controllers/clothingController.js';

router.get('/list', async (req, res) => {
    const items = await getAllClothes();
    res.render('clothing_page', { items });
});

router.get('/create', (req, res) => {
    res.render('forms/clothing_form', { title: 'Додати новий товар' });
});

router.post('/create', async (req, res) => {
    await addClothing(req.body);
    res.redirect('/clothing/list');
});

router.post('/delete/:id', async (req, res) => {
    await deleteClothing(req.params.id);
    res.redirect('/clothing/list');
});

export default router;
