const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is required",
        });
    }

    // Check for Bearer token format
    if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        // Check token against the string
        if (token === "123465789") {
            return next();
        }
    }

    // If Bearer token is invalid, return unauthorized
    return res.status(401).json({
        success: false,
        message: "Invalid token",
    });
};

module.exports = authMiddleware;
