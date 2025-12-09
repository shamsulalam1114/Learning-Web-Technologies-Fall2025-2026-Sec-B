<?php

    $amount = 1000;
    $vat_rate = 0.15;
    
    $vat = $amount * $vat_rate;
    $total_with_vat = $amount + $vat;

    echo "<p>Original Amount: ".$amount."</p>";
    echo "<p>VAT (15%): ".$vat."</p>";
    echo "<p>Total Amount with VAT: ".$total_with_vat."</p>";

?>

<?php

print('Results are above')
?>
