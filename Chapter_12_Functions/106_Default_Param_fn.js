function retry(testName, maxRetries, delay) {
    console.log('Retrying ${testName} up to ${MaxRetries} times, ${delay}ms apart');
}

retry("Login Test", 3, 100);

//

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log('Retrying ${testName} up to ${MaxRetries} times, ${delay}ms apart');
}

retry("Login Test");

///

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log('Retrying ${testName} up to ${MaxRetries} times, ${delay}ms apart');
}

retry("Fuinction test", 200, 1000);// It will take the argument value






