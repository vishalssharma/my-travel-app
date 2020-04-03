const middlewares = require('./middlewares');
const express = require('express');
// clean logs
const morgan = require('morgan');
// hide headers
const helmet = require('helmet');
// cross origin resource sharing
const cors = require('cors');
const mongoose = require('mongoose');
const logs = require('./api/logs');
require('dotenv').config();
const app = express();
const uri = process.env.DATABASE_URL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
// set origin :: only req from this can reach our backend
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());
app.get('/', (req,res) => {
    res.json({
        message: "Hello World",
    })
})
app.use('/api/logs',logs);
// creating a Not Found error , set status and forward to actual error handler
app.use(middlewares.notFound);

// General error handler
app.use(middlewares.errorHandler);
const port = process.env.PORT || 1339;

app.listen(port , () => {
    console.log(`Listening at  http://localhost:${port}`)
});