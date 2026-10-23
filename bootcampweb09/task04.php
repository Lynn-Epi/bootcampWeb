<?php

function whoami() {
    $name = $_POST["name"] ?? "";
    $age = $_POST["age"] ?? "";

    $ageIsValid = ctype_digit($age);

    if ($name != "" && $ageIsValid) {
        echo "Hi, my name is $name and I'm $age years old.";
    } elseif ($name == "" && $ageIsValid) {
        echo "Hi, I have no name and I'm $age years old.";
    } elseif ($name != "") {
        echo "Hi, my name is $name.";
    } else {
        echo "Hi, I have no name.";
    }
}