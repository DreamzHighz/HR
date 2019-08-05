// var userid = localStorage.getItem("user_id");
$.ajax({
    method: "POST",
    url: "formupdate.php",
    data: { user_id: userid },
    success: function(result) {

        var result = JSON.parse(result);
        var detail_table = "";
        detail_table += "<thead><td></td><tr><th>ชื่อหมวด</th><th>ชื่อบทความ</th><th>ผู้เขียนบทความ</th><th>เวลาสร้างบทความ</th><th>ความคิดเห็น</th><th>สถานะ</th></tr></thead><tbody>"
        for (var i = 0; i < result.length; i++) {
            detail_table += "<tr><td>";
            detail_table += result[i]['Topic_name'];
            detail_table += "</td><td>";
            detail_table += result[i]['Blogs_name'];
            detail_table += "</td><td>";
            detail_table += result[i]['User_firstname'];
            detail_table += "</td><td>";
            detail_table += result[i]['Blogs_datetime'];
            detail_table += "</td><td>";
            detail_table += result[i]['Blogs_comment'];
            detail_table += "</td><td><button type='button' class='glyphicon glyphicon-ok btn btn-success disabled' > อนุมัติ</button></td></tr>";
        }
        detail_table += "</tbody>";
        $("#approvednotificationUser").html(detail_table);
        // $('#user').DataTable();
    }
});