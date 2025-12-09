<?php
    $num1 = 10;
    $num2 = 20;
    $num3 = 30;
    
    if($num1 >= $num2 && $num1 >= $num3){
        $largest = $num1;
    }elseif($num2 >= $num1 && $num2 >= $num3){
        $largest = $num2;
    }else{
        $largest = $num3;
    }
    echo "<p>The largest number among ".$num1.", ".$num2.", and ".$num3." is: ".$largest."</p>";

?>