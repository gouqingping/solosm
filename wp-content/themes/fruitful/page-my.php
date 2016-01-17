
<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Solo SM
 * @subpackage Fruitful theme
 * @since Fruitful theme 1.0
 */

	get_header(); 
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<div class="container">
	<div class="photoMin">
		<img src="<?php bloginfo("template_directory");?>/images/my.@2x.jpg">
	</div>
	<div class="introductionMin">
		<h1>You're still too young</h1>
		<ul>
			<li>
				<h4>Name:</h4>Pat
			</li>
			<li>
				<h4>Job:</h4>web/ui
			</li>
			<li>
				<h4>Explain:</h4>To discuss CSS3, HTML5 also JQ, JS, AJ ... all the front aspect of the problem, there are questions together, study together.
			</li>
		</ul>
		<ul>
			<li>
				<h4>姓名:</h4>Pat
			</li>
			<li>
				<h4>职业:</h4>web/ui
			</li>
			<li>
				<h4>介绍:</h4>To discuss CSS3, HTML5 also JQ, JS, AJ ... all the front aspect of the problem, there are questions together, study together.
			</li>
		</ul>

		<div id="timeline">
		<h1>Milestone</h1>
			<ol id="dates">
				<li><a href="#2014">2014</a></li>
				<li><a href="#2015">2015</a></li>
				<li><a href="#2016">2016</a></li>
			</ol>
			<ol id="issues">
				<li id="2014">
					<h2>离校，闯荡社会</h2>
					<p>2014年3月 离开生活了三年的大学，开始了我的社会生活，说实话还有点舍不得啊。</p>
					<p>2014年4月 离校后的第一份工作，一家小公司担任软件测试，唉，名字都不记得了。</p>
					<p>2014年5月 软件测试不好做啊！离职……</p>
					<p>2014年6月 找不到工作，先做做销售吧。入职 “ 成都新易居房产 ” 。</p>
					<p>2014年8月 销售也难做，转职吧！ —— 做美术，入职 “ 多迪科技 ” 。</p>
				</li>
				<li id="2015">
					<h2>进入成都桦岭科技</h2>
					<p>2015年1月10日 唉，没有理由，换个公司吧！</p>
					<p>2015年1月16日 进入 “ 成都桦岭科技有限公司 ” ，担任 WEB/UI 一职 ，开始 www.duangniui.com 的研发 。</p>
				</li>
				<li id="2016">
					<h2>社会生活第二年，我适应了吗？</h2>
					<p>2016年1月 www.duangniui.com 二期研发 “ 到公司一年了，虽然埋怨过很多次，但是还是安安心心的做了下来。 ”</p>
				</li>
			</ol>
		</div>


		<ol class="icon_lists">
            分享至：
                <li>
                	<a href="javascript:window.open('http://v.t.sina.com.cn/share/share.php?title='+encodeURIComponent(document.title)+'&amp;url='+encodeURIComponent(location.href)+'&amp;source=bookmark','_blank','width=450,height=400');void(0)"><i class="iconfont icon-xinlang" title="微博"></i></a>
                </li>
            
                <li>
                	<a href="javascript:void(0);" onclick="window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+encodeURIComponent(document.location.href));return false;" title="分享到QQ空间"><i class="iconfont icon-qzone" title="空间"></i></a>
                </li>
            
                <li>
                	<a href="http://www.facebook.com/sharer.php?u=<?php the_permalink();?>&t=<?php the_title(); ?>" target="blank"><i class="iconfont icon-facebook" title="Facebook"></i></a>
                </li>
            
                <li>
                	<a href="http://twitter.com/home?status=<?php the_permalink(); ?> <?php the_title(); ?>" title="分享到 Twitter "target="_blank "rel="nofollow"><i class="iconfont icon-twitter" title="Twitter"></i></a>
                </li>

                <li>
                	<a href="http://www.google.com/bookmarks/mark?op=add&bkmk=<?php the_permalink() ?>&title=<?php the_title(); ?>"target="_blank "><i class="iconfont icon-google" title="Google"></i></a>
                </li>
            
                <li>
                	<a href="http://www.github.com/gouqingping" target="blank"><i class="iconfont icon-github" title="Github"></i></a>
                </li>
            
        </ol>
	</div>
	<div class="cle"></div>
</div>

<script type="text/javascript">
	 $(function(){
	    $("#timeline").timelinr({
			autoPlay: 'true',
			autoPlayDirection: 'forward',
			startAt: 1  /*  默认显示第几个 */
		})
	});
</script>

</article><!-- #post-<?php the_ID(); ?> -->
<?php 
	get_footer(); 
?>
