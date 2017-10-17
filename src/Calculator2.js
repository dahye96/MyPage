
var $result = $("#result").value;

var temp_num = 0;

var $result_show = $("#result_show").innerHTML;

$(".number_btn").onclick = function () {
    var number = this.value();
    if(temp_num == '0') {
        temp_num = number;
        if($result == '0') {
            $result = number;
        } else {
            $result += number;
        }
     } else {
        if($result == '0') {
            $result = number;
            temp_num = number;
         } else {
            $result += number;
            temp_num += number;
        }
     }
     $result_show = temp_num;

    console.log($result);
}


$(".operation_btn").onclick = function () {
    var operator = this.value();

    if ($result == '0') {
         $result = temp_num;
    }
    $result += operator;
    temp_num = 0;

    console.log($result);
}

$("#cancel_btn").onclick = function removeAll() {
    $result = '0';
    $result_show = $result;
    console.log($result);
}


$("#equal_btn").onclick = function calculate() {
    try {
        $result = Math.round(eval($result)*100)/100;
        $result_show = $result;
        console.log($result);
        temp_num = $result;
        $result = '0';
    }catch(e){
        removeAll();
    }
}



