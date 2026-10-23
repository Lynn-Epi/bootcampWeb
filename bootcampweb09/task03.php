<?php

function dynamic_body() {
    $page = $_GET["page"] ?? "";

    if ($page == "home" || $page == "php" || $page == "sql") {
        return file_get_contents($page . ".html");
    } else {
        return "<p>Unknown page</p>";
    }
}