<?php

    $array = [
        [1, 2, 3, 'A'],
        [1, 2, 'B', 'C'],
        [1, 'D', 'E', 'F']
    ];

    echo "<p>The declared 2D array:</p>";
    for($i = 0; $i < count($array); $i++){
        for($j = 0; $j < count($array[$i]); $j++){
            echo $array[$i][$j]." ";
        }
        echo "<br>";
    }

    echo "<p>Shape 1:</p>";
    for($i = 0; $i < 3; $i++){
        for($j = 0; $j <= $i; $j++){
            echo $array[$i][$j]." ";
        }
        echo "<br>";
    }

    echo "<p>Shape 2:</p>";
    for($i = 0; $i < 3; $i++){
        for($j = 3; $j > $i; $j--){
            echo $array[$i][$j]." ";
        }
        echo "<br>";
    }

?>

<?php

print('Results are above')
?>
