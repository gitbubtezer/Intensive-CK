//var modal = document.getElementById('id01');

//Login form log
account = [
    ["son@gmail.com", "son123"],
    ["admin@gmail.com", "admin"],
    ["account2@gmail.com", "account2"]
]

localStorage.setItem("account-data", JSON.stringify(account))

let accountData = JSON.parse(localStorage.getItem("account-data"))
console.log(accountData);


//local storage account data

const BtnLog = document.getElementById('Form-submit');

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    var email = document.getElementById("email-inp").value;
    var password = document.getElementById("password-inp").value;
    //console.log(username, password);
    for (i of accountData) {
        if (email == i[0] && password == i[1]) {
            setTimeout(notify, 700);
        }
    }
})

function notify() {
    alert("Login successfully");
    window.location = "/project-cuoi-khoa/index.html"; // Redirecting to other page.
    return false;
}