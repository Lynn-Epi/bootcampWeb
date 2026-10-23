
<?php

function calc(string $operator, int $nbr1, int $nbr2) {

    if ($nbr2 == 0 && ($operator == "/" || $operator == "%")) {
        return "Invalid input";
    }

    if ($operator == "+") {
        return $nbr1 + $nbr2;
    } elseif ($operator == "-") {
        return $nbr1 - $nbr2;
    } elseif ($operator == "*") {
        return $nbr1 * $nbr2;
    } elseif ($operator == "/") {
        return $nbr1 / $nbr2;
    } elseif ($operator == "%") {
        return $nbr1 % $nbr2;
    } else {
        return "Invalid operator";
    }
}
var_dump(calc("*", 7, 6));
var_dump(calc("/", 4, 3));
var_dump(calc("+/", 4, 2));
var_dump(calc("/", 4, 0));
