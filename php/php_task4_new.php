<?php

    $num1 = 25;
    $num2 = 42;
    $num3 = 18;

    if($num1 >= $num2 && $num1 >= $num3){
        $largest = $num1;
    }elseif($num2 >= $num1 && $num2 >= $num3){
        $largest = $num2;
    }else{
        $largest = $num3;
    }

    echo "<p>Number 1: ".$num1."</p>";
    echo "<p>Number 2: ".$num2."</p>";
    echo "<p>Number 3: ".$num3."</p>";
    echo "<p>The largest number is: ".$largest."</p>";

?>

<?php

print('Results are above')
?>
