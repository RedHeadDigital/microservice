// set the port you want your service to run on here
// NOTE: process.env.PORT will be prioritised over this one
var port = 8080

module.exports = {
    port: process.env.PORT || port,

    service: {
        "name": "micro-service-template",
    },

    mongo: {
        uri: process.env.MONGO_HOST || "mongodb://localhost"
    }

}