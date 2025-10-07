

let r_name = document.querySelector("#r-name");
let r_email = document.querySelector("#r-email");
let r_password = document.querySelector("#r-password");

function getUsers() {
    let users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users)
    } else {
        users = [];
    }
    return users;
}
function register() {
    if (r_email.value === '' || r_name.value === '' || r_password.value === '') {
        alert("please fill the form ")
    } else {
        var users = getUsers()
        let user = {
            name: r_name.value,
            email: r_email.value,
            password: r_password.value,
        }
        users.push(user)
        console.log(users);
        localStorage.setItem("users", JSON.stringify(users))
    }

}

function loginForm() {
    let l_password = document.querySelector("#l-password");
    let l_email = document.querySelector("#l-email");
    var users = getUsers()
    let saveUser = {}
    for (let i = 0; i < users.length; i++) {
        if (l_email.value == users[i].email) {
            saveUser = users[i]
            break;
        }
    }
    if (saveUser.email) {
        if (l_password.value == saveUser.password) {
            console.log("login succesfully");
        } else {
            console.log("Encorrect Password");
        }
    }
    else {
        console.log("user Not Found");

    }


}