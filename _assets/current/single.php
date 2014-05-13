<? get_header(); ?>
	<div id="content" class="single">
		<a id="header" href="<? echo get_option('home'); ?>/"></a>
		<div id="left">&nbsp;</div>
		<? if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div id="main">
			<div class="post" id="post-<? the_ID(); ?>">
				<h2><? the_title(); ?></h2>
				<div class="entry">
					<? the_content('Read the rest of this entry &raquo;'); ?>
				</div>
			</div>
		</div>
		<? endwhile; else : ?>
		<h2 class="center">Not Found</h2>
		<p class="center">Sorry, but you are looking for something that isn't here.</p>
		<? include (TEMPLATEPATH . "/searchform.php"); endif; ?>
	</div>
	<? get_footer(); ?>
