const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4040;
const ctrl = require('./controller');
const sequelize = require('./sequelize');

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../build')));

//Endpoints
// app.get('./api/item', ctrl.getInfo);
app.post('/api/signup', ctrl.signUp);
app.post('/api/login', ctrl.logIn);

app.post('/api/cart', ctrl.cartOrder);
app.delete('api/cart', ctrl.removeCart);
//Listen
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
