const errorHanddler = (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        errorName: err.name || "Internal",
        message: err.message || "Internal Server Error"
    });
};

export default errorHanddler;