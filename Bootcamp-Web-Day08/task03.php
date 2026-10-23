<?php
function get_shortest(array $words): string {
    $result = $words[0];

    for ($i = 0; $i < count($words); $i++) {
        if (strlen($words[$i]) < strlen($result)) {
            $result = $words[$i];
        }
    }

    return $result;
}
var_dump(get_shortest(array("Time", "flowing", "like", "a", "river")));
var_dump(get_shortest(array("chou", "be", "do")));
