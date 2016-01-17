
<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Solo SM
 * @subpackage Fruitful theme
 * @since Fruitful theme 1.0
 */

	get_header(); 
?>
<link href="<?php echo get_template_directory_uri(); ?>/css/pageAllpost.css" rel="stylesheet" type="text/css" />
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if ( has_post_thumbnail() && ! post_password_required() ) : ?>
		<div class="entry-thumbnail"><?php the_post_thumbnail(); ?></div>
	<?php endif; ?>
	<?php if (!is_front_page()) {?>	
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title(); ?></h1>
	</header><!-- .entry-header -->
	<?php } ?>
	<div class="entry-content">
		<?php the_content(); ?>
		<div id="page-allpost">
			<h1 class="widget-title"><img src="<?php bloginfo("template_directory");?>/images/logo.@2x.png"/></h1>
		    <table>
		    	<?php $count_posts = wp_count_posts(); $published_posts = $count_posts->publish;
		    	query_posts( 'posts_per_page=-1' );
		    	while ( have_posts() ) : the_post();
		    	echo '<tr>';
		    	echo '<td style="padding-left:28px !important;"><h3 class="post-title"><a href="';
		    	the_permalink();
		    	echo '" title="'.esc_attr( get_the_title() ).'">';
		    	the_title();
		    	echo '</a></h3>';
		    	echo'<span>';
		    	the_time(get_option( 'date_format' ));
		    	$published_posts--;
		    	echo '</span></td></tr>';
		    	endwhile;
		    	wp_reset_query(); ?>
		    </table>
 		</div>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->


	
<?php 
	get_footer(); 
?>
