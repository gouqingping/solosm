<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package Solo SM
 * @subpackage Fruitful theme
 * @since Fruitful theme 1.0
 */
?>
				</div>
			</div>
		</div><!-- .page-container-->
		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="container">
				<div class="sixteen columns">
					<div class="site-info">
						<ul>
							<li><a href="<?php echo get_template_directory_uri(); ?>/allpost">全部文章</a></li>
							<?php wp_get_archives( array( 'type' => 'monthly' ) ); ?>
							<li><a href="<?php echo get_template_directory_uri(); ?>/my">关于站主</a></li>
							<li><?php wp_register(); ?>
								<li><?php wp_loginout(); ?></li>
								<?php wp_meta(); ?></li>
						</ul>
					</div>
				</div>
			</div>
			<div id="back-top">
				<a rel="nofollow" href="#top" title="Back to top">&uarr;</a>
			</div>
		</footer><!-- #colophon .site-footer -->
	<!--Solo SM Development by Fruitful Code-->
<?php wp_footer(); ?>
</body>
</html>