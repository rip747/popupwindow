#PopUpWindow plugin for jQuery

Takes a link and will create a popupwindow based on the href of the link. You can over ride the default settings by passing your own settings or profile name in the REL attribute of the link.

##Installation
   
To use just include the plugin in the HEAD section of the page **AFTER** calling jQuery. After that, use jQuery to find the links you want and pass any parameters you want.

	<html>
	<head>
		<script type="text/javascript"src="http://code.jquery.com/jquery-latest.js"></script>
		<script type="text/javascript" src="jquery.popupwindow.js"></script>
		<script type="text/javascript">
		$(function()
		{
			$(".popupwindow").popupwindow();
		});
		</script>
	</head>
	<body>
		<a href="http://www.jquery.com" title="jQuery homepage" class="popupwindow"/>
	</body>
	</html>

##Demos

For more detailed examples of using PopUpWindow plus how to use the profiles feature, view the [demo page](http://rip747.github.com/popupwindow/ "PopUpWindow Demo Page").