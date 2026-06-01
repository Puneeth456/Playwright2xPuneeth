function runTest(name, status, duration) {
    return '${name}:${status} (${duration}ms)';

}

const r = runTest("login", "pass", 320);
console.log(r);



