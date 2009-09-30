<?php get_header(); ?>

<?php get_sidebar(); ?>
<div id="content"><a name="content"></a>
<?php if (have_posts()) : ?>

		 <?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
<?php /* If this is a category archive */ if (is_category()) { ?>
		<h2 class="pagetitle">Archive for the &#8216;<?php echo single_cat_title(); ?>&#8217; Category</h2>

 	  <?php /* If this is a daily archive */ } elseif (is_day()) { ?>
		<h2 class="pagetitle">Archive for <?php the_time('F jS, Y'); ?></h2>

	 <?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
		<h2 class="pagetitle">Archive for <?php the_time('F, Y'); ?></h2>

		<?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
		<h2 class="pagetitle">Archive for <?php the_time('Y'); ?></h2>

	  <?php /* If this is an author archive */ } elseif (is_author()) { ?>
		<h2 class="pagetitle">Author Archive</h2>

		<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
		<h2 class="pagetitle">Blog Archives</h2>

		<?php } ?>

		<?php while (have_posts()) : the_post(); ?>
<div class="post" id="post-<?php the_ID(); ?>">
<div class="title">
<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title(); ?>"><?php the_title(); ?></a></h2>

<div class="date"><span><?php the_time('M-j-Y'); ?> By <?php the_author(); ?></span></div>	

</div>
<div class="cover">
<div class="entry">
					<?php the_content('Read the rest of this entry &raquo;'); ?>
				
</div>

</div>

<div class="postinfo">
					<div class="category"> Posted in: <?php the_category(', '); ?></div>
					<div class="com"><?php comments_popup_link('ADD COMMENTS', '1 COMMENT', '% COMMENTS'); ?></div>
</div>


</div>
		<?php endwhile; ?>

		<div class="navigation">
			<div class="alignleft"><?php next_posts_link('&laquo; Previous Entries') ?></div>
			<div class="alignright"><?php previous_posts_link('Next Entries &raquo;') ?></div>
		</div>

	<?php else : ?>

		<h1 class="title">Not Found</h1>
		<p>Sorry, but you are looking for something that isn't here.</p>

	<?php endif; ?>

</div>

<?php get_footer(); ?>