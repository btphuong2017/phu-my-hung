<?php 
if(!function_exists('image_url')) {
    function image_url($path = '') {
        return url("assets/images/$path");
    }
}


if(!function_exists('admin_url')) {
    function admin_url($path = "") {
        return url("admin/$path");
    }
}
