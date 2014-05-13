<? get_header(); ?>

	<div id="content">
		<a id="header" href="<? echo get_option('home'); ?>/"></a>
		<? if (have_posts()) : while (have_posts()) : the_post(); ?>
<div id="main">
			<div class="post" id="post-<? the_ID(); ?>">
				<h2><a href="<? the_permalink() ?>" rel="bookmark" title="Permanent Link to <? the_title_attribute(); ?>"><? the_title(); ?></a></h2>
				<div class="entry">
					<? the_content('Read the rest of this entry &raquo;'); ?>
				</div>
			</div>
		</div>
		<? endwhile; else : ?>
		<h2 class="center">Not Found</h2>
		<p class="center">Sorry, but you are looking for something that isn't here.</p>
		<? include (TEMPLATEPATH . "/searchform.php"); ?>

	<? endif; ?>

	</div>
	<? get_footer(); ?>
