class apiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode,
            this.data = data
        this.message = message
        this.statusCode = statusCode < 400
    }
}
export {apiResponse}