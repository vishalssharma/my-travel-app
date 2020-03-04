const middlewares = require('./middlewares')
const express = require('express');
// clean logs
const morgan = require('morgan');
// hide headers
const helmet = require('helmet');
// cross origin resource sharing
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(helmet());
// set origin :: only req from this can reach our backend
app.use(cors({
    origin : 'http://locathost:3000'
}));

app.get('/', (req,res) => {
    res.json({
        message: "Hello World",
    })
})
// creating a Not Found error , set status and forward to actual error handler
app.use(middlewares.notFound);

// General error handler
app.use(middlewares.errorHandler);
const port = process.env.PORT || 1339;

app.listen(port , () => {
    console.log(`Listening at  http://localhost:${port}`)
});