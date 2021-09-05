import app from './app';
require('dotenv').config();
import './database';

app.listen(process.env.PORT || 3000);
console.log('server listen on port', process.env.PORT);