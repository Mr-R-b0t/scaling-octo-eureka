const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));

const posts = require('./routes/posts.routes.js');


app.use(express.json());

app.use(/api/v1/posts, posts);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);  

