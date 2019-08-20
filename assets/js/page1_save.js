function page1_save(){
    var id = sessionStorage.getItem("userId");

    var fullname = $("#fullname").val();
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
    var committee2 =$("#committee2").val();
    var committee3 =$("#committee3").val();
    var committee4 =$("#committee4").val();
    var committee5 =$("#committee5").val();
    var remark = $("#remark").val();

alert(fullname)
    $.ajax({
        method: "POST",
        url: "../assets/php/page1_save.php",
        data: {  fullname: fullname, position: position, department: department, group: group,
                startdate: startdate, enddate: enddate, lastscore: lastscore, userId: id,
                day_sickleave: day_sickleave,per_sickleave: per_sickleave, day_leave: day_leave, 
                per_leave: per_leave, day_restleave: day_restleave, per_restleave: per_restleave, 
                per_late: per_late,day_late: day_late, day_absence: day_absence,
                per_absence: per_absence,other_leave: other_leave, committee1: committee1,
                committee4: committee4, committee2: committee2, committee3: committee3,
                committee5: committee5, remark: remark },
                success:function(strSQL){
                        alert(strSQL)
                }
               
        });

        window.location.href= "../../hr/Index/page2.html"
}