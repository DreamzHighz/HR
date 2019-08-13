
var id = sessionStorage.getItem("userId");

$.ajax({
    method: "POST",
    url: "../assets/php/page1.php",
    data: { userId: id },
    success: function (result) {
        var result = JSON.parse(result);
        alert(result[0]['name_user']);
    }
});

