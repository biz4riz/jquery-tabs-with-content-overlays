# jQuery Tabs with Content Overlays
Content overlays using jQuery Tabs UI. View the <a href="https://jqueryui.com/tabs/" target="_blank">jQuery Tabs Documentation</a> for a basic understanding of jQuery Tabs.

<a href="http://biz4riz.com/development/github-projects/jquery-tabs-with-content-overlays/">View Demo</a>

<h3>Styles</h3>
```html
// The tabs container needs to have position: relative on tablet and above in order to contain the overlay content.
@media (min-width: 570px) {
  .wrap {
    position: relative;
  }
}

// Section needs a bg color for the overlay z-index to work properly.
section { background: white; }

#tabs h1, #tabs h2, #tabs h3, #tabs h4, #tabs h5, #tabs h6, #tabs p {
  color: white;
}
#tabs h3 {
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}
#tabs .icon {
  margin-bottom: 2rem;
}
#tabs .icon [class^="icon-"], #tabs .icon [class*=" icon-"] {
  color: #999999;
  font-size: 5.8rem;
}
#tabs .block {
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 3rem;
  position: relative;
}
#tabs .overlay {
  background: #333333;
  height: 100%;
  padding: 5rem;
  width: 100%;
  z-index: 100;
}
@media (min-width: 570px) {
  #tabs .overlay .row {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
}
@media (min-width: 570px) {
  #tabs .overlay .row .icon {
    padding-right: 3rem;
  }
}

// Close is positioned fixed on mobile
#tabs a.close {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem 3rem;
  z-index: 200;
}
@media (min-width: 570px) {
  #tabs a.close {
    position: absolute;
  }
}
#tabs a.close [class^="icon-"], #tabs a.close [class*=" icon-"] {
  color: white;
  font-size: 2rem;
}
#tabs ul.ui-tabs-nav {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
#tabs ul.ui-tabs-nav li {
  background: #333333;
  padding-bottom: 5.25rem;
  margin-bottom: 0.45rem;
  width: 100%;
}
@media (min-width: 570px) {
  #tabs ul.ui-tabs-nav li {
    width: 49.75%;
  }
}
@media (min-width: 820px) {
  #tabs ul.ui-tabs-nav li {
    width: 24.75%;
  }
}
#tabs ul.ui-tabs-nav li.ui-state-active, #tabs ul.ui-tabs-nav li.ui-state-hover {
  background: #999999;
}
#tabs ul.ui-tabs-nav li.ui-state-active [class^="icon-"],
#tabs ul.ui-tabs-nav li.ui-state-active [class*=" icon-"],
#tabs ul.ui-tabs-nav li.ui-state-active h3, #tabs ul.ui-tabs-nav li.ui-state-active p, #tabs ul.ui-tabs-nav li.ui-state-hover [class^="icon-"],
#tabs ul.ui-tabs-nav li.ui-state-hover [class*=" icon-"],
#tabs ul.ui-tabs-nav li.ui-state-hover h3, #tabs ul.ui-tabs-nav li.ui-state-hover p {
  color: #333333;
}
#tabs .ui-tabs-panel.content {
  display: none;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
@media (min-width: 570px) {
  #tabs .ui-tabs-panel.content {
    position: absolute;
  }
}
#tabs .ui-tabs-panel.content h1, #tabs .ui-tabs-panel.content h2, #tabs .ui-tabs-panel.content h3, #tabs .ui-tabs-panel.content h4, #tabs .ui-tabs-panel.content h5, #tabs .ui-tabs-panel.content h6, #tabs .ui-tabs-panel.content p {
  color: white;
}

```

<h3>Scripts</h3>
```html

function overlay() {
	$('.overlay a.close').click(function(){
		$('.overlay').hide();
	});
}
function tabs() {
	var tabs = $('#tabs li');
	var content = $('.ui-tabs-panel.content .row');
	var contentHeight = content.innerHeight();
	
	$('#tabs').tabs();
	
	tabs.removeClass('ui-tabs-active');
	tabs.removeClass('ui-state-active');
	
	tabs.click(function(){
		$('#tabs .close').show();
		$('#tabs .ui-tabs-panel').css('z-index', 1);
	}) 	
	$('#tabs a.close').click(function(){
		$(this).hide();
		$('#tabs .ui-tabs-panel').css('z-index', -1);
	}) 
}

$(document).ready(function() {
	overlay();
	tabs();
});

```

<h3>HTML</h3>
```html
<div id="tabs">		
	<a href="javascript:void(0);" class="close"><span class="icon-close"></span></a>
	
	<!-- Tab Navigation Items -->
	<ul class="row">
		<li class="block">
			<a href="#tabs-1">
				<div class="icon"><span class="icon-camera"></span></div>
				<h3>Ullamcorper Venenatis</h3>
				<p>Vestibulum id ligula porta felis euismod semper.</p>
			</a>
		</li>
		<li class="block">
			<a href="#tabs-2">
				<div class="icon"><span class="icon-music"></span></div>
				<h3>Vehicula Tellus</h3>
				<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
			</a>
		</li>
		<li class="block">
			<a href="#tabs-3">
				<div class="icon"><span class="icon-play"></span></div>
				<h3>Egestas Porta</h3>
				<p>Donec ullamcorper nulla non metus auctor fringilla.</p>
			</a>
		</li>
		<li class="block">
			<a href="#tabs-4">
				<div class="icon"><span class="icon-file-text"></span></div>
				<h3>Ridiculus Sollicitudin</h3>
				<p>Vestibulum id ligula porta felis euismod semper.</p>
			</a>
		</li>
	</ul>

	<!-- Tab Content Overlays -->			
	<div id="tabs-1" class="content">
		<div class="overlay">
			<div class="row">
				<div class="icon"><span class="icon-camera"></span></div>
				<div>
					<h4>Tab 1 Content</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.</p>
				</div>
			</div>
		</div>
	</div>

	<div id="tabs-2" class="content">
		<div class="overlay">
			<div class="row">
				<div class="icon"><span class="icon-music"></span></div>
				<div>
					<h4>Tab 2 Content</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.</p>
				</div>
			</div>
		</div>
	</div>

	<div id="tabs-3" class="content">
		<div class="overlay">
			<div class="row">
				<div class="icon"><span class="icon-play"></span></div>
				<div>
					<h4>Tab 3 Content</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.</p>
				</div>
			</div>
		</div>
	</div>

	<div id="tabs-4" class="content">
		<div class="overlay">
			<div class="row">
				<div class="icon"><span class="icon-file-text"></span></div>
				<div>
					<h4>Tab 4 Content</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.</p>
				</div>
			</div>
		</div>
	</div>

</div>

```