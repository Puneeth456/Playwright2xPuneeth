let isLoggedIn = false;
let userRole = "editor";


if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor -Edit access granted");
    }
    else if (userRole === "viewer") {
        console.log("Welcome Viewer - Read only access");
    }
    else {
        console.log("No Idea you may be the guest role");
    }
}
else {
    console.log("you are not logged in ");


}