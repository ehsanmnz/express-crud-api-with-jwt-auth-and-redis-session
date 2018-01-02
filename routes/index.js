module.exports = (app) => {
    app.use('/', require('./home'));
    app.use('/auth', require('./auth'));
    app.use('/developers', require('./developers'));
    app.use('/profile', require('./profile'));
};