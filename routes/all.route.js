import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';


router.get('/', async (req, res) => {
    // Fetching data from Bored-API
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();
  
    // Rendering home page with data
    res.render('home', {
        key: data.key,
        activity: data.activity,
        type: data.type,
        price: data.price,
        accessibility: data.accessibility,
    });
  });

  
  for (let i = 1; i <= 10; i++) {
    router.get(`/home${i}`, async (req, res) => {
      // Fetching data from Bored-API
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
    
      // Rendering 10 dynamic pages with data
      res.render('home', { pageTitle: `Home ${i}`,
      key: data.key,
        activity: data.activity,
        type: data.type,
        price: data.price,
        accessibility: data.accessibility,
      });
    });
  }










export default router;