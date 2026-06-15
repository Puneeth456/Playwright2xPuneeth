const Env = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"

}

console.log(Env.BASE_URL);
console.log(Env["BASE_URL"]);


const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "Admin", active: true }
    }
}


const config = {
    //base urls
    base_url: "http://localhost:3000',
    apiBaseurl: "http://localhost:3000/api',

    testUser: {
        username: 'testuser@example.com',
        password: 'securepass123',
    },

    //logging
    loglevel: 'info',

    //retry configuration
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10);
}








