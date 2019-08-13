$(document).ready(function(){
    $.ajax({
        url: "../assets/js/page3.php",
        success: function(result) {
            var result = JSON.parse(result);
            console.log(result);
            $("#committee1").val(result[0]['emp_name']);
            $("#committee2").val(result[1]['emp_name']);
            $("#committee3").val(result[2]['emp_name']);
            $("#committee4").val(result[3]['emp_name']);
            $("#committee5").val(result[4]['emp_name']);
            
        }
    });
});