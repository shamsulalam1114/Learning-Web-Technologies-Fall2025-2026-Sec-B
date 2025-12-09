<?php

    echo "<p>Shape 1:</p>";
    for($i = 1; $i <= 3; $i++){
        for($j = 1; $j <= $i; $j++){
            echo "* ";
        }
        echo "<br>";
    }

    echo "<p>Shape 2:</p>";
    for($i = 3; $i >= 1; $i--){
        for($j = 1; $j <= $i; $j++){
            echo $j." ";
        }
        echo "<br>";
    }

    echo "<p>Shape 3:</p>";
    $char = 'A';
    for($i = 1; $i <= 3; $i++){
        for($j = 1; $j <= $i; $j++){
            echo $char." ";
            $char++;
        }
        echo "<br>";
    }

?>

<?php

print('Results are above')
?>
