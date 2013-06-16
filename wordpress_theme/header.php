<?php
/**
 * The Header for the blog.
 *
 * @package WTTheme
 * @since WTTheme 2.0
 */
?><!DOCTYPE html>
	
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php
/*
* Print the <title> tag based on what is being viewed.
*/
global $page, $paged;
 
wp_title( '|', true, 'right' );
 
// Add the blog name.
bloginfo( 'name' );
 
// Add the blog description for the home/front page.
$site_description = get_bloginfo( 'description', 'display' );
if ( $site_description && ( is_home() || is_front_page() ) )
echo " | $site_description";
 
// Add a page number if necessary:
if ( $paged >= 2 || $page >= 2 )
echo ' | ' . sprintf( __( 'Page %s', 'shape' ), max( $paged, $page ) );
 
?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link href='http://fonts.googleapis.com/css?family=Sail|Merriweather+Sans:400,700,300' rel='stylesheet' type='text/css'>

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); ?>
</head>
 
<body <?php body_class(); ?>>

<div id="page" class="hfeed site">
    <header id="masthead" class="site-header" role="banner">
        	<nav> 
				<a id="title" class="selected">windy tunnel media</a>
				<a id="artistslink">artists</a> 
				<a id="bloglink" href="http://blog.windytunnel.co">blog</a>
				<a id="storelink" href="http://store.windytunnel.co">store</a> 
			</nav> 
			<div id="artists" class="selected initblank">
				<a>Alexander Ross</a> 
				<a href="http://www.windytunnel.co/halfs.html">The Halfs</a> 
				<a>Missing Twin</a>
				<a>Michael Brown</a> 
				<a href="http://www.windytunnel.co/nnf.html">Nathaniel Noton-Freeman</a>
				<a>Nick Pagan</a> 
				<a>The Purest Cacophony</a> 
			</div> 
    </header><!-- #masthead .site-header -->
<div id="main" class="site-main">