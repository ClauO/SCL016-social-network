import Home from "../views/home.js"
import Login from "../views/login.js"
import Signup from "../views/signup.js"
import Selection from "../views/selection.js"
import Wall from "../views/Wall.js"

const firstPage = document.getElementById("first-page");


const routes = (route) => {
    firstPage.innerHTML = "";
    console.log(route);
    switch(route) {
        case "#/home":
            return firstPage.appendChild(Home());
        case "#/login":
            //return console.log(Login());
            return firstPage.appendChild(Login());
        case "#/signup":
            return firstPage.appendChild(Signup());
        case "#/selection":
            return firstPage.appendChild(Selection());
        case "#/wall":
            return firstPage.appendChild(Wall());
        default:
            return console.log("404!")
    }
}

export {routes};