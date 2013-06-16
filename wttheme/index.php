<?php
/**
 * The main template file.
 *
 * @package WTTheme
 * @since WTTheme 1.0
 */
 
get_header(); ?>

<div id="primary" class="content-area">
    <div id="content" class="site-content">
		<?php if ( have_posts() ) : ?>
			<?php wttheme_content_nav( 'nav-above' ); ?>
    		<?php while ( have_posts() ) : the_post(); ?>
          		<?php
          			/* Include the Post-Format-specific template for the content.
          			* If you want to overload this in a child theme then include a file
          			* called content-___.php (where ___ is the Post Format name) and    that will be used instead.
          			*/
          			get_template_part( 'content', get_post_format() );
         		 ?>
     		<?php endwhile; ?>
			<?php wttheme_content_nav( 'nav-below' ); ?>
		<?php else : ?>
     		<?php get_template_part( 'no-results', 'index' ); ?>
		<?php endif; ?>
    </div><!-- #content .site-content -->
</div><!-- #primary .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>