function asyncErrorBoundary(delegate, defaultStatus) {
    return function (req, res, next) {
        Promise.resolve()
            .then(() => delegate(request, response, next))
            .catch((error = {}) => {
                const { status = defaultStatus, message = error } = error;
                next({
                    status,
                    message,
                })
            })
    }
}
module.exports = asyncErrorBoundary;