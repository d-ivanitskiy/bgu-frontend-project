import express from 'express';

const PORT = process.env.PORT || 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin-dev', '*');
    next();
});

app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`);
});