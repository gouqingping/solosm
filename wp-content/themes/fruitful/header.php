<?php
/** 
* The Header for our theme. 
* Displays all of the <head> section and everything up till <div id="main"> 
* @package Solo SM 
* @subpackage Fruitful theme 
* @since Fruitful theme 1.0 
**/
?><!DOCTYPE html>
<!--[if IE 7]><html class="ie ie7" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 8]><html class="ie ie8" <?php language_attributes(); ?>><![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link href="<?php echo get_template_directory_uri(); ?>/css/common.css" rel="stylesheet" type="text/css" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link href="<?php echo get_template_directory_uri(); ?>/css/index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-2.2.0.min .js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/common.js"></script>
<?php fruitful_get_favicon(); ?>
<!--[if lt IE 9]><script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script><![endif]-->
<?php wp_head(); ?> 
</head> 
<body <?php body_class();?>>
	<nav class="nav">
	<div class="navbar">
		<div class="logo navber-left"><a href="<?php echo get_template_directory_uri(); ?>/allpost" name="logo"><img src="<?php bloginfo("template_directory");?>/images/logoFill.@2x.png"/></a></div>
		<div class="navber-right"><a href="javascript:void(0)" name="logo" class="morShow"> ··· </a></div>
		<div class="popover">
			<ul>
				<li><a href="<?php echo get_template_directory_uri(); ?>/allpost">全部文章</a></li>
				<?php wp_get_archives( array( 'type' => 'monthly' ) ); ?>
				<li><a href="<?php echo get_template_directory_uri(); ?>/my">关于站主</a></li>
				<li><?php wp_register(); ?>
					<li><?php wp_loginout(); ?></li>
					<?php wp_meta(); ?></li>
			</ul>
		</div>
		<div class="cle"></div>
	</div>
</nav>
	
	<?php fruitful_get_slider(); ?>
	
	<div id="page" class="page-container">		
		<div class="container">		
			<?php do_action( 'before' ); ?>		
				<div class="sixteen columns">