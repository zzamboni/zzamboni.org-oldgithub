<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<title><?php bloginfo('name'); ?> <?php if ( is_single() ) { ?> &raquo; Blog Archive <?php } ?> <?php wp_title(); ?></title>
<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats -->
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="all" />
<!-- RETIRED
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
-->
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php wp_get_archives('type=monthly&format=link'); ?>
	<?php //comments_popup_script(); // off by default ?>
	<?php wp_head(); ?>
</head>
<body>
<!-- RETIRED
<?php if(function_exists('wp_admin_bar')) wp_admin_bar(); ?>
-->


<div class="wrapper">
		
<div class="top">
	<div class="blogname">
		<h1><a href="<?php bloginfo('siteurl');?>/" title="<?php bloginfo('name');?>"><?php bloginfo('name');?></a></h1>
		<h2><?php bloginfo('description'); ?></h2>
	</div>
</div>
<div id="foxmenucontainer">
	<div id="foxmenu">
		<ul>
		<li class="<?php if (is_home()) { echo "current"; } ?>"><a href="<?php echo get_settings('home'); ?>">Home</a></li>		
			<?php wp_list_pages('sort_column=menu_order&depth=1&title_li=');?>
		</ul>
	</div>		
</div>
<div class="content">
