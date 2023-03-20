const express = require('express');
const redis = require('redis');
const app = express();

const port = 3001;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const client = redis.createClient(6379);

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.log('Something went wrong ' + err);
});






module.exports  = app;


