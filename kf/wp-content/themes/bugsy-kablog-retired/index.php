<?php get_header(); ?>
<?php get_sidebar(); ?>
<div id="content"><a name="content"></a>
<?php if (have_posts()) : ?>

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

		<div class="post">
			<h1 class="title">Not Found</h1>
			<p>YOU are looking for something that ISN'T HERE.</p>
		</div>

	<?php endif; ?>	

</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
