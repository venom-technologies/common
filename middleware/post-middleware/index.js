module.exports = {
    loadPostMiddleware
}

function loadPostMiddleware(app){
    app.use(appErrorHandling);
}

function appErrorHandling (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send({name: err.name, message : err.message});
};