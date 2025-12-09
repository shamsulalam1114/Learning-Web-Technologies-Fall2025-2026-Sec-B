<?php

    $numbers = [10, 25, 30, 45, 50, 65, 70, 85, 90];
    $search = 45;
    $found = false;

    echo "<p>Array elements: ";
    for($i = 0; $i < count($numbers); $i++){
        echo $numbers[$i]." ";
    }
    echo "</p>";

    echo "<p>Searching for: ".$search."</p>";

    for($i = 0; $i < count($numbers); $i++){
        if($numbers[$i] == $search){
            $found = true;
            echo "<p>Element ".$search." found at index ".$i."</p>";
        }
    }

    if($found == false){
        echo "<p>Element ".$search." not found in the array</p>";
    }

?>

<?php

print('Results are above')
?>
