<?php
/*
function render_body(string $page) {
    if ($page == "home.html" || $page == "php.html" || $page == "sql.html") {
        return file_get_contents($page);
    } else {
        return "<p>Unknown page</p>";
    }
}
*/

function render_body(string $page) {
    if ($page == "home" || $page == "php" || $page == "sql") {
        return file_get_contents($page . ".html");
    } else {
        return "<p>Unknown page</p>";
    }
}