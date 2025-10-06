import express from 'express';
import { nanoid } from 'nanoid';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/create', (req, res) => {
    const {url} = req.body;
    res.send(nanoid(7))    
})


app.listen(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`);
    
}) 