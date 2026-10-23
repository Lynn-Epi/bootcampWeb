<?php
function calc_average(array $numbers) {
    $total = 0;
    $length = count($numbers);

    foreach ($numbers as $number) {
        $total += $number;
    }

    $average = $total / $length;
    return(round($average, 1));
}
var_dump(calc_average(array(1, 4, 28, 12, 3, 4, 4, 27)));