<? get_header(); ?>
	<div id="content" class="search">
		<a id="header" href="<? echo get_option('home'); ?>/"></a>
		<div id="left">&nbsp;</div>
		<? if (have_posts()) : $posts = query_posts($query_string . '&orderby=title&order=asc'); $post = $posts[0]; ?>
		<div class="navigation">
			<div class="alignleft"><? next_posts_link('&laquo; Previous') ?></div>
			<div class="alignright"><? previous_posts_link('Next &raquo;') ?></div>
		</div>
		<h2>Search Results for "<em><? the_search_query() ?></em>"</h2>
		<? while (have_posts()) : the_post(); $szPostContent = $post->post_content; $szSearchPattern = '~<img [^\>]*\ />~'; preg_match_all( $szSearchPattern, $szPostContent, $aPics ); $iNumberOfPics = count($aPics[0]);?>
		<div class="post">
			<div class="entry">
				<a href="<? the_permalink() ?>">
					<? if ( $iNumberOfPics > 0 ) { for ( $i=0; $i < $iNumberOfPics ; $i++ ) { echo $aPics[0][$i]; }; }; ?>
				</a>
			</div>
		</div>
		<? endwhile; ?>
		<? else : ?>
		<div class="post">
			<div class="entry">
				<h4>No Results for "<em><? the_search_query() ?></em>"</h4>
				<h5>Try your search again:</h5>
				<? include (TEMPLATEPATH . "/searchform.php"); ?>
			</div>
		</div>
	<? endif; ?>
		<div id="right"></div>

	</div>

<? get_footer(); ?>
