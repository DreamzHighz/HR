$(document).ready(function () {
    var id = sessionStorage.getItem("userId");

    $.ajax({
        method: "POST",
        url: "../assets/php/page1.php",
        data: { userId: id },
        success: function (result) {
            var result = JSON.parse(result);

            $("#fullName").val(result[0]['name_user']);
            $("#position").val(result[0]['position_user']);
            $("#department").val(result[0]['department_user']);
            $("#group").val(result[0]['group_user']);
            $("#startDate").val(result[0]['startdate_user']);

        }
    });
});


