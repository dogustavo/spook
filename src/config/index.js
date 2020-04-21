const config = {
    prod: {
        app: {
            version: '1.00',
        },
        apiGateway: {
            URL: 'http://localhost:3001',
            version: 'v1',
        },
    },
    dev: {
        app: {
            version: '1.00',
        },
        apiGateway: {
            URL: 'https://spook-api.herokuapp.com/',
            version: 'v1',
        },
    }
}

module.exports = config.dev