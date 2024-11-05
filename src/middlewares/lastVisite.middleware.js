// Exporting the LastVisit middleware function to track the last visit date of a user
export const LastVisit = (req, res, next) => {
    // Check if there is a 'lastVisit' cookie in the request
    if (req.cookies.lastVisit) {
        // If 'lastVisit' cookie exists, set a formatted date as a local variable accessible in views
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }

    // Set a new 'lastVisit' cookie with the current date and time in ISO format
    res.cookie('lastVisit', new Date().toISOString(), {
        maxAge: 2 * 24 * 60 * 60 * 1000, // Cookie expiration set to 2 days (in milliseconds)
    });

    // Call the next middleware function in the stack
    next();
};
