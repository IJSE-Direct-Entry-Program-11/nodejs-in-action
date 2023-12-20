import express from 'express';

const app = express();

app.use('/api/v1/customers', (req, res) => {
    let x=0;
    for (let i = 0; i < 1000000; i++) {
        x += i * 10;
        console.log(x);
    }
    res.send(`<h1>${x}</h1>`);
});

app.use('/api/v1/items', (req, res) => {
    res.send("<h1>Node: Hello Items</h1>");
});

app.use('/api/v1/orders', (req, res) => {
    res.send("<h1>Node: Hello Orders</h1>");
})

app.listen(5050, ()=> console.log("Server is listening at 5050"));