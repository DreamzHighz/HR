$(document).ready(function () {
    var id = sessionStorage.getItem("userId");

    $.ajax({
        method: "POST",
        url: "../assets/php/page2.php",
        data: { userId: id },
        success: function (result) {
            var result = JSON.parse(result);

            $("#finalPoint1").val(result[0]['score1_user']);
            $("#finalPoint2").val(result[0]['score2_user']);
           
        }
    });
});


var total1 = 0;
var total2 = 0;
var lastPoint70 = 0;
var lastPoint20 = 0;
var lastPoint10 = 0;
var lastPoint1 = 0;
var lastPoint2 = 0;
var lastPoint3 = 0;
var lastPoint4 = 0;
var lastPoint5 = 0;
var lastPoint6 = 0;
var lastPoint7 = 0;
var lastPoint8 = 0;
var lastPoint9 = 0;
var lastPoint0 = 0;
var point70 = $("#point70").val();
var point20 = $("#point20").val();
var point10 = $("#point10").val();
var point1 = $("#point1").val();
var point2 = $("#point2").val();
var point3 = $("#point3").val();
var point4 = $("#point4").val();
var point5 = $("#point5").val();
var point6 = $("#point6").val();
var point7 = $("#point7").val();
var point8 = $("#point8").val();
var point9 = $("#point9").val();
var point0 = $("#point0").val();

$(document).ready(function(){

    //Part1***********************************************************
    //70%
    $("#option70_1").click(function(){
        lastPoint70 = 1;
        calcurator();
    });
    $("#option70_2").click(function(){
        lastPoint70 = 2;
        calcurator();
    });
    $("#option70_3").click(function(){
        lastPoint70 = 3;
        calcurator();
    });
    $("#option70_4").click(function(){
        lastPoint70 = 4;
        calcurator();
    });
    $("#option70_5").click(function(){
        lastPoint70 = 5;
        calcurator();
    });

    //20%
    $("#option20_1").click(function(){
        lastPoint20 = 1;
        calcurator();
    });
    $("#option20_2").click(function(){
        lastPoint20 = 2;
        calcurator();
    });
    $("#option20_3").click(function(){
        lastPoint20 = 3;
        calcurator();
    });
    $("#option20_4").click(function(){
        lastPoint20 = 4;
        calcurator();
    });
    $("#option20_5").click(function(){
        lastPoint20 = 5;
        calcurator();
    });

    //10%
    $("#option10_1").click(function(){
        lastPoint10 = 1;
        calcurator();
    });
    $("#option10_2").click(function(){
        lastPoint10 = 2;
        calcurator();
    });
    $("#option10_3").click(function(){
        lastPoint10 = 3;
        calcurator();
    });
    $("#option10_4").click(function(){
        lastPoint10 = 4;
        calcurator();
    });
    $("#option10_5").click(function(){
        lastPoint10 = 5;
        calcurator();
    });

    //Part2***************************************************
    //1
    $("#option1_1").click(function(){
        lastPoint1 = 1;
        calcurator();
    });
    $("#option1_2").click(function(){
        lastPoint1 = 2;
        calcurator();
    });
    $("#option1_3").click(function(){
        lastPoint1 = 3;
        calcurator();
    });
    $("#option1_4").click(function(){
        lastPoint1 = 4;
        calcurator();
    });
    $("#option1_5").click(function(){
        lastPoint1 = 5;
        calcurator();
    });

    //2
    $("#option2_1").click(function(){
        lastPoint2 = 1;
        calcurator();
    });
    $("#option2_2").click(function(){
        lastPoint2 = 2;
        calcurator();
    });
    $("#option2_3").click(function(){
        lastPoint2 = 3;
        calcurator();
    });
    $("#option2_4").click(function(){
        lastPoint2 = 4;
        calcurator();
    });
    $("#option2_5").click(function(){
        lastPoint2 = 5;
        calcurator();
    });

    //3
    $("#option3_1").click(function(){
        lastPoint3 = 1;
        calcurator();
    });
    $("#option3_2").click(function(){
        lastPoint3 = 2;
        calcurator();
    });
    $("#option3_3").click(function(){
        lastPoint3 = 3;
        calcurator();
    });
    $("#option3_4").click(function(){
        lastPoint3 = 4;
        calcurator();
    });
    $("#option3_5").click(function(){
        lastPoint3 = 5;
        calcurator();
    });

    //4
    $("#option4_1").click(function(){
        lastPoint4 = 1;
        calcurator();
    });
    $("#option4_2").click(function(){
        lastPoint4 = 2;
        calcurator();
    });
    $("#option4_3").click(function(){
        lastPoint4 = 3;
        calcurator();
    });
    $("#option4_4").click(function(){
        lastPoint4 = 4;
        calcurator();
    });
    $("#option4_5").click(function(){
        lastPoint4 = 5;
        calcurator();
    });

    //5
    $("#option5_1").click(function(){
        lastPoint5 = 1;
        calcurator();
    });
    $("#option5_2").click(function(){
        lastPoint5 = 2;
        calcurator();
    });
    $("#option5_3").click(function(){
        lastPoint5 = 3;
        calcurator();
    });
    $("#option5_4").click(function(){
        lastPoint5 = 4;
        calcurator();
    });
    $("#option5_5").click(function(){
        lastPoint5 = 5;
        calcurator();
    });

    //6
    $("#option6_1").click(function(){
        lastPoint6 = 1;
        calcurator();
    });
    $("#option6_2").click(function(){
        lastPoint6 = 2;
        calcurator();
    });
    $("#option6_3").click(function(){
        lastPoint6 = 3;
        calcurator();
    });
    $("#option6_4").click(function(){
        lastPoint6 = 4;
        calcurator();
    });
    $("#option6_5").click(function(){
        lastPoint6 = 5;
        calcurator();
    });

    //7
    $("#option7_1").click(function(){
        lastPoint7 = 1;
        calcurator();
    });
    $("#option7_2").click(function(){
        lastPoint7 = 2;
        calcurator();
    });
    $("#option7_3").click(function(){
        lastPoint7 = 3;
        calcurator();
    });
    $("#option7_4").click(function(){
        lastPoint7 = 4;
        calcurator();
    });
    $("#option7_5").click(function(){
        lastPoint7 = 5;
        calcurator();
    });

    //8
    $("#option8_1").click(function(){
        lastPoint8 = 1;
        calcurator();
    });
    $("#option8_2").click(function(){
        lastPoint8 = 2;
        calcurator();
    });
    $("#option8_3").click(function(){
        lastPoint8 = 3;
        calcurator();
    });
    $("#option8_4").click(function(){
        lastPoint8 = 4;
        calcurator();
    });
    $("#option8_5").click(function(){
        lastPoint8 = 5;
        calcurator();
    });

    //9
    $("#option9_1").click(function(){
        lastPoint9 = 1;
        calcurator();
    });
    $("#option9_2").click(function(){
        lastPoint9 = 2;
        calcurator();
    });
    $("#option9_3").click(function(){
        lastPoint9 = 3;
        calcurator();
    });
    $("#option9_4").click(function(){
        lastPoint9 = 4;
        calcurator();
    });
    $("#option9_5").click(function(){
        lastPoint9 = 5;
        calcurator();
    });

    //10
    $("#option0_1").click(function(){
        lastPoint0 = 1;
        calcurator();
    });
    $("#option0_2").click(function(){
        lastPoint0 = 2;
        calcurator();
    });
    $("#option0_3").click(function(){
        lastPoint0 = 3;
        calcurator();
    });
    $("#option0_4").click(function(){
        lastPoint0 = 4;
        calcurator();
    });
    $("#option0_5").click(function(){
        lastPoint0 = 5;
        calcurator();
    });
    
});

function calcurator(){
    total1 = (lastPoint70*70)+(lastPoint20*20)+(lastPoint10*10);
    $("#point70").val(lastPoint70*70);
    $("#point20").val(lastPoint20*20);
    $("#point10").val(lastPoint10*10);
    $("#totalPoint1").val(total1);
    $("#finalPoint1").val(total1/10);

    total2 = (lastPoint1*10)+(lastPoint2*10)+(lastPoint3*10)+(lastPoint4*10)+(lastPoint5*10)+(lastPoint6*10)+(lastPoint7*10)+(lastPoint8*10)+(lastPoint9*10)+(lastPoint0*10);
    $("#point1").val(lastPoint1*10);
    $("#point2").val(lastPoint2*10);
    $("#point3").val(lastPoint3*10);
    $("#point4").val(lastPoint4*10);
    $("#point5").val(lastPoint5*10);
    $("#point6").val(lastPoint6*10);
    $("#point7").val(lastPoint7*10);
    $("#point8").val(lastPoint8*10);
    $("#point9").val(lastPoint9*10);
    $("#point0").val(lastPoint0*10);
    $("#totalPoint2").val(total2);
    $("#finalPoint2").val(total2/10);
}

function page2_save(){
    var id = sessionStorage.getItem("userId");
    var finalPoint1 = $("#finalPoint1").val();
    var finalPoint2 = $("#finalPoint2").val();
    var finalPoint3 = parseInt(finalPoint1) + parseInt(finalPoint2)

    $.ajax({
        method: "POST",
        url: "../assets/php/page2_save.php",
        data: { finalPoint1: finalPoint1, finalPoint2:  finalPoint2, finalPoint3: finalPoint3, userId: id },
                success:function(strSQL){
                   
                }
               
        });
        window.location.href = "../../hr/Index/page3.html"
}