import express from 'express';

const app  = express();

app.use(express.json());

const PORT = 5000;

app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Your ExpressTs App is working!"
    });
});

app.listen(PORT, ()=>{
    console.log('Server  running!')
})