var result = document.getElementById('result').value;

var temp_num = 0;

var $result_show = document.getElementById('result_show');

function cal(input) {
    if(input == '*' || input == '/' || input == '+' || input == '-') {
        if (result == '0') {
            result = temp_num;
        }
        result += input;
        temp_num = 0;
    } else {
        if(temp_num == '0') {
            temp_num = input;
            if(result == '0') {
                result = input;
            } else {
                result += input;
            }
        } else {
            if(result == '0') {
                result = input;
                temp_num = input;
            } else {
                result += input;
                temp_num += input;
            }
        }
        $result_show.innerHTML = temp_num;
    }

    console.log(result);
}

function removeAll() {
    result = '0';
    $result_show.innerHTML = result;
    console.log(result);
}


function calculate() {
    try {
        result = Math.round(eval(result)*100)/100;
        $result_show.innerHTML = result;
        console.log(result);
        temp_num = result;
        result = '0';
    }catch(e){
        removeAll();
    }
}



