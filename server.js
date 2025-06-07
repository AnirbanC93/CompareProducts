const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/compare', async (req, res) => {
    const product = req.query.product;
    if (!product) return res.status(400).json({ error: 'Product name is required' });

    try {
        // Mock results (replace with real scraping/API logic if needed)
        const results = [
            {
                site: 'Amazon',
                title: `${product} - Amazon Edition`,
                price: '₹1,199',
                link: 'https://www.amazon.in/example-product'
            },
            {
                site: 'Flipkart',
                title: `${product} - Flipkart Model`,
                price: '₹1,299',
                link: 'https://www.flipkart.com/example-product'
            },
            {
                site: 'Myntra',
                title: `${product} - Myntra Special`,
                price: '₹1,249',
                link: 'https://www.myntra.com/example-product'
            }
        ];

        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
