$(document).ready(function(){
    var id = sessionStorage.getItem("userId");

    $.ajax({
        method: "POST",
        url: "../assets/php/page3.php",
        data: { userId: id },
        success: function(result) {
            var result = JSON.parse(result);
            $("#point").val(result[0]['total_score_user']);
            $("#committee1").val(result[0]['committee1_user']);
            $("#committee2").val(result[0]['committee2_user']);
            $("#committee3").val(result[0]['committee3_user']);
            $("#committee4").val(result[0]['committee4_user']);
            $("#committee5").val(result[0]['committee5_user']);
            var point = $("#point").val();

            if (point >= 85) {
                document.getElementById('pointText').innerHTML = 'ระดับ ดีมาก (85 - 100 คะแนน)';
            }
            else if(point >= 75){
                document.getElementById('pointText').innerHTML = 'ระดับ ดี (75 - 84 คะแนน)';
            }
            else if(point >= 65){
                document.getElementById('pointText').innerHTML = 'ระดับ ปานกลาง (65 - 74 คะแนน)';
            }
            else if(point >= 55){
                document.getElementById('pointText').innerHTML = 'ระดับ ปรับปรุง (55 - 64 คะแนน)';
            }
            else{       
                document.getElementById('pointText').innerHTML = 'ระดับ ต่ำ (ต่ำกว่า 55 คะแนน)';
                }
            }
    });

});

function page3_save(){
    var id = sessionStorage.getItem("userId");
    var committee1 = $("#committee1").val();
    var committee2 =$("#committee2").val();
    var committee3 =$("#committee3").val();
    var committee4 =$("#committee4").val();
    var committee5 =$("#committee5").val();

    $.ajax({
        method: "POST",
        url: "../assets/php/page3_save.php",
        data: { committee1: committee1, committee2:  committee2, committee3: committee3, committee4: committee4, committee5: committee5, userId: id },
                success:function(strSQL){
                   
                }
               
        });
        alert("บันทึกสำเร็จ")
        window.location.href = "../../hr/Index/index.html"
}

