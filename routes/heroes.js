import express from 'express';
const router = express.Router();
import db from '../db/connector.js';

router.get('/', async function(req, res, next) {
  const heroes = await db.query('SELECT * FROM heroes ORDER BY id ASC');
  const rowheroes = heroes.rows.map(s => {
    return {
      ...s,
      created_at_time: s.created_at.toLocaleTimeString(), 
      created_at_date: s.created_at.toLocaleDateString()
    }
  })

  res.render('heroes', { heroes: rowheroes || [] });
});

export default router;