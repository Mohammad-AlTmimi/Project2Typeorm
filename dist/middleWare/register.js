let register = (req, res, next) => {
    let err = [];
    if (!req.body.password) {
        err.push("Make sure you full your password");
    }
    if (!req.body.email) {
        err.push("You should full your email");
    }
    if (err.length) {
        res.status(401).send(err);
        return;
    }
    next();
};
export default register;
