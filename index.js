const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

const { Eventos } = require('./app/models');


app.use(bodyParser.json())

app.get('/evento', async (req, res) => {
    const evento = await Eventos.findAll();
    res.json(evento);
});

app.delete('/evento/:id', async (req, res) => {
    
    await Eventos.destroy({ where: { id: req.params.id } })
    res.json(true);
});

app.post('/evento', async (req, res) => {
    const evento = await Eventos.create(req.body);
    res.json(evento);
});

app.listen(3000); 
