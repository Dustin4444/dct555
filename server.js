const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample GET endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the Microservice API!' });
});

// Sample POST endpoint
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.status(201).json({ message: 'Data received', data });
});

// Sample PUT endpoint
app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json({ message: `Data with ID ${id} updated`, updatedData: data });
});

// Sample DELETE endpoint
app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `Data with ID ${id} deleted` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});