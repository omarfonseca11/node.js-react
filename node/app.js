import express from 'express';
import cors from 'cors';
// Importamos la base de datos
import db from './database/db.js';
// Importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);


    try {
        await db.authenticate();
        console.log('Conexión exitosa a la DB');
    } catch (error) {
        console.error(`El error de conexión es: ${error}`);
    };


app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/');
});
