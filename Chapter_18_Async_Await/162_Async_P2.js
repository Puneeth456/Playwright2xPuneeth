function gettoken() {
    return Promise.resolve("abc123")

}


async function run() {
    let token = await gettoken();
    console.log(token);
}

run();

// #Rule 1
// Any function which return the Promise we need to use Await infront of it.

//     #Rule 2:
// Whenever the function may uses promise we use async infront of Function if its using the statement then it should be await.
