<? get_header(); ?>
	<div id="content" class="archive">
		<a id="header" href="<? echo get_option('home'); ?>/"></a>
		<div id="left">&nbsp;</div>
		<? if (have_posts()) : $posts = query_posts($query_string . '&orderby=title&order=asc'); $post = $posts[0]; ?>
		<h2><? single_cat_title(); ?></h2>
    	<div class="navigation">
    		<? next_posts_link('Next&nbsp;&raquo;') ?><? previous_posts_link('&laquo;&nbsp;Previous') ?>
    	</div>
		<? while (have_posts()) : the_post(); $szPostContent = $post->post_content; $szSearchPattern = '~<img [^\>]*\ />~'; preg_match_all( $szSearchPattern, $szPostContent, $aPics ); $iNumberOfPics = count($aPics[0]);?>
		<div class="post">
			<div class="entry">
				<a href="<? the_permalink() ?>">
					<? if ( $iNumberOfPics > 0 ) { for ( $i=0; $i < $iNumberOfPics ; $i++ ) { echo $aPics[0][$i]; }; }; ?>
				</a>
			</div>
		</div>
		<? endwhile; ?>
		<div id="right"></div>
		<? else : ?>
		<h2 class="center">Not Found</h2>
		<? include (TEMPLATEPATH . '/searchform.php'); ?>

	<? endif; ?>

	</div>

<? get_footer(); ?>
