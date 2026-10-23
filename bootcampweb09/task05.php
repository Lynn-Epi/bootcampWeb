<?php
function form_is_submitted() {
    return isset($_POST["submit"]);
}

function whoami() {
    $name = $_POST["name"] ?? "";
    $age = $_POST["age"] ?? "";
    $curriculum = $_POST["curriculum"] ?? "";

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

    if ($curriculum != "") {
        if ($curriculum == "pge") {
            $curriculum = "PGE (Programme Grande Ecole)";
        } elseif ($curriculum == "bachelor") {
            $curriculum = "Bachelor";
        } elseif ($curriculum == "msc") {
            $curriculum = "MSc Pro";
        } elseif ($curriculum == "coding") {
            $curriculum = "Coding Academy";
        } elseif ($curriculum == "wac") {
            $curriculum = "Web@cademie";
        }

        echo " I'm a student of $curriculum.";
    }
}


