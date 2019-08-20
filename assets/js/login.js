function validate() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    $.ajax({
        method: "POST",
        url: "../assets/php/login.php",
        data: { user: user, pass: pass },
        success: function(result) {
            var result = JSON.parse(result);
            if (result.length != 0) {
                window.location = "index.html"; // Redirecting to other page.
                return false;
            } else {
                alert("username or password not valid");
            }

        }
    });


}