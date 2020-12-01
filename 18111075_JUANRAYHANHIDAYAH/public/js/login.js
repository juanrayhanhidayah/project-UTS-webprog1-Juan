let user = [{
    email: "admin@gmail.com",
    password: "qwe"
}, {
    email: "juan@gmail.com",
    password: "rty"
}]

function validasi() {
    var uemail = document.getElementById("Email").value;
    var upass = document.getElementById("Password").value;

    for (let i = 0; i < user.length; i++) {
        if (uemail == user[i].email && upass == user[i].password) {
            document.getElementById("form").action = "index.html";
            return
        }
    }
    toastr.error("Please Enter Your Email and Password");
}
