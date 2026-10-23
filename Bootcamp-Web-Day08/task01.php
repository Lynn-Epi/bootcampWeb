<?php

function discover_type(int $age, string $name, float $gpa,  bool $isStudent){
if ($isStudent === True){
    echo "Hello my name is " . $name . ", I'm " . $age . "years old. Im a student at Epitech with a GPA of " . $gpa;  
} else {
echo "Hello my name is " . $name . ", I'm " . $age . "years old. I'm not a student";
}}
discover_type(21, "Maria", 3.53, true);
