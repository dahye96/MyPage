var $result = document.getElementById('result');

var temp_num = 0;

var $result_show = document.getElementById('result_show');

function cal(input) {
    if(input == '*' || input == '/' || input == '+' || input == '-') {
        if ($result.value == '0') {
            $result.value = temp_num;
        }
        $result.value += input;
        temp_num = 0;
    } else {
        if(temp_num == '0') {
            temp_num = input;
            if($result.value == '0') {
                $result.value = input;
            } else {
                $result.value += input;
            }
        } else {
            if($result.value == '0') {
                $result.value = input;
                temp_num = input;
            } else {
                $result.value += input;
                temp_num += input;
            }
        }
        $result_show.innerHTML = temp_num;
    }

    console.log($result.value);
}

function removeAll() {
    $result.value = '0';
    $result_show.innerHTML = $result.value;
    console.log($result.value);
}


function calculate() {
    try {
        $result.value = Math.round(eval($result.value)*100)/100;
        $result_show.innerHTML = $result.value;
        console.log($result.value);
        temp_num = $result.value;
        $result.value = '0';
    }catch(e){
        removeAll();
    }
}



