$.ajax({
    url: "user.php",
    success: function(result) {
        var result = JSON.parse(result);
        var detail_table = "";
        detail_table += "<thead><td></td><tr><th class='text-center'>ลำดับ</th><th class='text-center'>ชื่อ-สกุล</th><th class='text-center'>ตำแหน่ง</th><th class='text-center'>ฝ่าย</th><th class='text-center'>หน่วยงาน</th><th><input onchange='user(this.value)' id='search' type='text' placeholder='ป้อนชื่อ...' name='search'></th></tr></thead><tbody>"
        for (var i = 0; i < result.length; i++) {
            detail_table += "<tr><td>";
            detail_table += result[i]['id_user'];
            detail_table += "</td><td>";
            detail_table += result[i]['name_user'];
            detail_table += "</td><td>";
            detail_table += result[i]['position_user'];
            detail_table += "</td><td>";
            detail_table += result[i]['group_user'];
            detail_table += "</td><td>";
            detail_table += result[i]['department_user'];
            detail_table += "</td><td><button onclick='edit("+result[i]['id_user']+")' type='button' class='btn btn-primary'>รอการอนุมัติ</button></td></tr>";
        }
        detail_table += "</tbody>";
        $("#user").html(detail_table);
    }
});
function user(search) {
    var search = $('#search').val();
    $.ajax({
        method: "POST",
        url: "search.php",
        data: { search: search },
        success: function(result) {
            var result = JSON.parse(result);
            var detail_table = "";
            detail_table += "<thead><td></td><tr><th class='text-center'>ลำดับ</th><th class='text-center'>ชื่อ-สกุล</th><th class='text-center'>ตำแหน่ง</th><th class='text-center'>ฝ่าย</th><th class='text-center'>หน่วยงาน</th><th><input onchange='user(this.value)' id='search' type='text' placeholder='ป้อนชื่อ...' name='search'></th></tr></thead><tbody>"
            for (var i = 0; i < result.length; i++) {
                detail_table += "<tr><td>";
                detail_table += result[i]['id_user'];
                detail_table += "</td><td>";
                detail_table += result[i]['name_user'];
                detail_table += "</td><td>";
                detail_table += result[i]['position_user'];
                detail_table += "</td><td>";
                detail_table += result[i]['group_user'];
                detail_table += "</td><td>";
                detail_table += result[i]['department_user'];
                detail_table += "</td><td><button onclick='edit("+result[i]['id_user']+")' type='button' class='btn btn-primary'>รอการอนุมัติ</button></td></tr>";
            }
            detail_table += "</tbody>";
            $("#user").html(detail_table);
        }
    });
}