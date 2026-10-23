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