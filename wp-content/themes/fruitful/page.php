<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the Solo SM construct of pages
 * and that other 'pages' on your Solo SM site will use a
 * different template.
 *
 * @package Solo SM
 * @subpackage Fruitful theme
 * @since Fruitful theme 1.0
 */

get_header(); ?>
	
	<?php fruitful_get_content_with_custom_sidebar('page'); ?>
	
<?php get_footer(); ?>