//Created By: Denny Gunawan
//JSFile for: sign-up.html
//Date Created: --

function registration() {
email = document.getElementById("floatingInput").value;
}

function validate_email(email) {
    emailregex = /^[^@]+@\w+(\.\w+)+\w$/
    if (XPathExpression.test(email) == true) {
        return true 
    } else {
        return false
    }
}