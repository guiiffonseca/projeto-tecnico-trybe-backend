module.exports = (err, req, res, _next) => {
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Internal Server Error' });
};