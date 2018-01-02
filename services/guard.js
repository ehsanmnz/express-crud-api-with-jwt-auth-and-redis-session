module.exports = (req, res, next) => {
    console.log(req.session);
    if (req.session && "user" in req.session) {
        next();
        return;
    }
    res.statusCode = 401;
    res.json({
        msg: "Unauthorized"
    });
};