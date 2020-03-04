// creating a Not Found error , set status and forward to actual error handler
const notFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    // send to next error handling middleware
    next(error);
};

// General error handler
const errorHandler = (error,req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? ' ' : error.stack,   // remove when in production
    });

};
// return object
module.exports = {
    notFound,
    errorHandler,
};