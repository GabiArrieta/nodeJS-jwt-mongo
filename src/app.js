import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
const app = express();
import productsRoutes from "./routes/products.routes";
app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    });
});

app.use('/products', productsRoutes);

export default app;