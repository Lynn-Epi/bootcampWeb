<?php

// function dog_bark(int $count);{
//     if ($count > 0) {
//             echo trim(str_repeat("woof ", $count));
//         }
//         echo "\n";
// }

function dog_bark(int $woof_nb) {
    $result = "";

    for ($count = 0; $count < $woof_nb; $count++) {
        $result .= "woof ";
    }

    echo trim($result) . "\n";
}
dog_bark(1);
dog_bark(-42);
dog_bark(3);

