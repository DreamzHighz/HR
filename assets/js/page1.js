$(document).ready(function() {
    var id = sessionStorage.getItem("userId");

    $.ajax({
        method: "POST",
        url: "../assets/php/page1.php",
        data: { userId: id },
        success: function(result) {
            var result = JSON.parse(result);

            $("#fullName").val(result[0]['name_user']);
            $("#position").val(result[0]['position_user']);
            $("#department").val(result[0]['department_user']);
            $("#group").val(result[0]['group_user']);
            $("#startDate").val(result[0]['startdate_user']);
            $("#enddate").val(result[0]['enddate_user']);
            $("#lastscore").val(result[0]['last_score_user']);
            $("#day_sickleave").val(result[0]['day_sickleave_user']);
            $("#per_sickleave").val(result[0]['per_sickleave_user']);
            $("#day_leave").val(result[0]['day_leave_user']);
            $("#per_leave").val(result[0]['per_leave_user']);
            $("#day_restleave").val(result[0]['day_restleave_user'])
            $("#per_restleave").val(result[0]['per_restleave_user'])
            $("#day_late").val(result[0]['day_late_user']);
            $("#per_late").val(result[0]['per_late_user']);
            $("#day_absence").val(result[0]['day_absence_user']);
            $("#per_absence").val(result[0]['per_absence_user']);
            $("#other_leave").val(result[0]['other_leave_user']);
            $("#committee1").val(result[0]['committee1_user']);
            $("#committee2").val(result[0]['committee2_user']);
            $("#committee3").val(result[0]['committee3_user']);
            $("#committee4").val(result[0]['committee4_user']);
            $("#committee5").val(result[0]['committee5_user']);
            $("#remark").val(result[0]['remark']);

            var startDate = $("#startDate").val();
            var newDate = startDate.split('/');
            var endDate = new Date();

            var day = (endDate.getDate()) - newDate[0];
            var month = (endDate.getMonth() + 1) - newDate[1];
            var year = Math.abs(endDate.getFullYear() - (newDate[2] - 543));

            if ((endDate.getMonth() + 1) < newDate[1]) {
                year--;
            }
            if (month < 0) {
                month = 12 - (Math.abs(month));
            }
            if ((endDate.getDate()) >= newDate[0]) {
                day = (endDate.getDate()) - newDate[0];
            } else {
                day = 31 + (endDate.getDate()) - newDate[0];
                month--;
            }

            //alert(day + " " + month + " " + year);
            $("#year").val(year);
            $("#month").val(month);
            $("#day").val(day);
        }
    });


});



function page1_save() {
    var id = sessionStorage.getItem("userId");

    var userName = sessionStorage.getItem("userName")
    var position = $("#position").val();
    var department = $("#department").val();
    var group = $("#group").val();
    var startdate = $("#startDate").val();
    var enddate = $("#enddate").val();
    var lastscore = $("#lastscore").val();
    var day_sickleave = $("#day_sickleave").val();
    var per_sickleave = $("#per_sickleave").val();
    var day_leave = $("#day_leave").val();
    var per_leave = $("#per_leave").val();
    var day_restleave = $("#day_restleave").val();
    var per_restleave = $("#per_restleave").val();
    var day_late = $("#day_late").val();
    var per_late = $("#per_late").val();
    var day_absence = $("#day_absence").val();
    var per_absence = $("#per_absence").val();
    var other_leave = $("#other_leave").val();
    var committee1 = $("#committee1").val();
    var committee2 = $("#committee2").val();
    var committee3 = $("#committee3").val();
    var committee4 = $("#committee4").val();
    var committee5 = $("#committee5").val();
    var remark = $("#remark").val();

    $.ajax({
        method: "POST",
        url: "../assets/php/page1_save.php",
        data: {
            userName: userName,
            position: position,
            department: department,
            group: group,
            startdate: startdate,
            enddate: enddate,
            lastscore: lastscore,
            userId: id,
            day_sickleave: day_sickleave,
            per_sickleave: per_sickleave,
            day_leave: day_leave,
            per_leave: per_leave,
            day_restleave: day_restleave,
            per_restleave: per_restleave,
            per_late: per_late,
            day_late: day_late,
            day_absence: day_absence,
            per_absence: per_absence,
            other_leave: other_leave,
            committee1: committee1,
            committee4: committee4,
            committee2: committee2,
            committee3: committee3,
            committee5: committee5,
            remark: remark
        },
        success: function(strSQL) {
            alert(strSQL)
            window.location.href = "../../hr/Index/page2.html"
        }

    });


}