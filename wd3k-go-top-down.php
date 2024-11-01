<?php
/*
Plugin Name: WD3K Go Top Down
Plugin URI: http://www.webdev3000.com/
Description: Creates animated Go Top/Go Down buttons in the right bottom corner of your blog. After click, scrolls to top or bottom of the page
Author: Csaba Kissi
Version: 0.92
Author URI: http://www.webdev3000.com
*/

function wd3k_go_top_down_init() {
    wp_register_script('wd3k_go_top_down', plugins_url('wd3k-go-top-down.js', __FILE__));
    wp_enqueue_script( 'wd3k_go_top_down' );
}

function wd3k_go_top_down_footer() {
    ?>
    <div id="nav_up" style="position: fixed; bottom: 5px; right: 5px; cursor: pointer; opacity: 1; " title="Scroll Back to Top"><img src="<?php echo plugins_url('gotop.png', __FILE__) ?>"></div>
    <div id="nav_down" style="position: fixed; bottom: 5px; right: 40px; cursor: pointer; opacity: 1; " title="Scroll Down"><img src="<?php echo plugins_url('godown.png', __FILE__) ?>"></div>
   <?php     
}

add_action('init', 'wd3k_go_top_down_init');
add_action('wp_footer', 'wd3k_go_top_down_footer');

