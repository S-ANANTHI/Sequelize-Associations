const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/routes.js');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const tagRoutes = require('./routes/tagRoutes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/profiles', profileRoutes);
app.use('/tags', tagRoutes);

const PORT = process.env.PORT || 8082;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));


